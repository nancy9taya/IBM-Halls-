/**
*@module controllers/hallControllers
*/
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const Hall = require('../models/Hall');
const env = require('dotenv').config();
var randomHash = require('random-key');
var randomBytes = require('crypto');
var { db_halls } = require('../cloudant');
const { clearLine } = require('readline');
const { v4: uuidv4 } = require('uuid');
const decode_id = require('../middleware/getOID');
let Array2D = (r, c) => [...Array(r)].map(x => Array(c).fill(0));
let out;
/**
* HallController  valdiation
*@memberof module:controllers/hallControllers
*@param {number}   req.body
*@param {number}   req.body.rows           you enter number of rows
*@param {number}   req.body.columns        you enter number of columns
*@param {number}   req.body.chairLength    you enter chair width 
*@param {number}   req.body.chairWidth     you enter chaie length
*@param {number}   req.body.isBench        you enter number of 1 or 2 indicate if there is or not
*@param {number}   req.body.benchesWidth   you enter bench width 
*@param {number}   req.body.isGap          you enter number of 1 or 2 indicate if there is or not
*@param {number}   req.body.noGaps         you enter number of gaps in the hall
*@param {array}   req.body.columnsThenGap  you enter array of how many cloumns before each gap
*@param {number}   req.body.gapwidth       you enter gap width
*/
function joiValidate(req) {
    const schema = {
        rows:
            Joi.number().required(),
        columns:
            Joi.number(),
        chairLength:
            Joi.number().required(),
        chairWidth:
            Joi.number().required(),
        isBench:
            Joi.number().required(),
        benchesWidth:
            Joi.number().required(),
        isGap:
            Joi.number().required(),
        noGaps:
            Joi.number().required(),
        columnsThenGap:
            Joi.array().required(),
        gapwidth:
            Joi.number().required()
    }
    return Joi.validate(req, schema);
};
exports.validateHallData = joiValidate;

/**
* HallController  function to calculate the horizontal distance
*@memberof module:controllers/hallControllers
*@param {number}   chairWidth
**/
function horizontalDistance(chairWidth) {//if there isnot any gap
    let distance = Math.ceil(100 / chairWidth);
    return distance;
}
/**
* HallController  function to calculate the virticall distance
*@memberof module:controllers/hallControllers
*@param {number}   chairWidth
*@param {number}   chairLength
**/
function virticallDistance(chairLength, chairWidth) {//if there isnot any gap
    let distance = Math.ceil(Math.sqrt(Math.pow(100, 2) - Math.pow(chairWidth, 2)) / chairLength);
    return distance;
}
/**
* HallController  function to calculate the start postion
*@memberof module:controllers/hallControllers
*@param {number}   chairWidth
*@param {number}   gapwidth
**/
function startPostionIfGap(chairWidth, gapwidth) {//if there is a gap
    let distance = Math.ceil((100 - gapwidth) / chairWidth);
    return distance;
}
/**
* HallController  function to calculate the virtical distance if there is a benche
*@memberof module:controllers/hallControllers
*@param {number}   chairWidth
*@param {number}   chairLength
*@param {number}   benchesWidth
**/
function virticallDistanceWithBenche(chairLength, chairWidth, benchesWidth) {//there is benche for each chair
    let distance = Math.ceil((Math.sqrt(Math.pow(100, 2) - Math.pow(chairWidth, 2)) - benchesWidth) / (benchesWidth + chairLength));
    return distance;
}
/**
* HallController  function to apply the algorithm of distibution
*@memberof module:controllers/hallControllers
*@param {number}   rows
*@param {number}   columns
*@param {number}   chairWidth
*@param {number}   chairLength
*@param {number}   benchesWidth
*@param {number}   noGroups
*@param {number}   start
*@param {number}   count
*@param {boolean}  ifBenches
**/
function algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, ifBenches, columnsThenGap) {

    let i = 1; let j = 1;
    let first = true;

    while (j <= rows) {
        while (i <= columns) {
            if (first == true && i == 1) {
                i = start;//start from the start chair
            }
            else if (first == false && i == 1) {
                i = start + 1;
                //start from the start + 1  chair to make sure that the distance is hypotenuse the pythagorean triangle
            }
            if (noGroups == 0) {
                out[j][i] = true;
            }
            else {
                if((i + columnsThenGap[noGroups - 1])< columns+1)
                out[j][i + columnsThenGap[noGroups - 1]] = true;
            }

            let countUnvaildHorizontal = horizontalDistance(chairWidth);
            i = i + countUnvaildHorizontal;
            i++;
            count++;


        }
        first = !first;
        i = 1;
        let countUnvaildVertical;
        if (ifBenches == false) {
            countUnvaildVertical = virticallDistance(chairLength, chairWidth);//to apply pythagorean theorem 
        }
        else {
            countUnvaildVertical = virticallDistanceWithBenche(chairLength, chairWidth, benchesWidth)//to apply pythagorean theorem 
        }
        if (countUnvaildVertical == 0) {
            j = j + 2;
            first = !first;
        } else {
            j = j + countUnvaildVertical;
        }
    }
    return count;
}
/**
* HallController  function to indicate the case of hall
*@memberof module:controllers/hallControllers
*@param {boolean}   gap
*@param {boolean}   benches
**/
function cases(gap, benches) {
    let caseNo = 0;//initialy
    //case 1:there is no gap no benches
    if (gap == false && benches == false) {
        caseNo = 1;
        return caseNo;
    }
    //case 2:there is a  gap ,but no benches
    else if (gap == true && benches == false) {
        caseNo = 2;
        return caseNo;
    }
    //case 3: there is  benches ,but no gap 
    else if (gap == false && benches == true) {
        caseNo = 3;
        return caseNo;
    }
    //case 4: there is gap and benches
    else if (gap == true && benches == true) {
        caseNo = 4;
        return caseNo;
    }
}
/**
* HallController  function to do all the work of distribution
*@memberof module:controllers/hallControllers
*@param {number}   caseNo
*@param {number}   rows
*@param {number}   columns
*@param {number}   chairWidth
*@param {number}   chairLength
*@param {number}   benchesWidth
*@param {number}   noGaps
*@param {number}   columnsThenGap
*@param {number}   gapwidth
**/
function fixed_algorithims(caseNo, rows, columns, chairLength, chairWidth, benchesWidth, noGaps, columnsThenGap, gapwidth) {
    out = Array2D(rows + 1, columns + 1);
    if (caseNo == 1) {
        let noGroups = 0; // the hall as whole will be as one group
        let count = 0;
        let start = 1;
        count = algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, false, columnsThenGap);
        return out;
    }
    else if (caseNo == 2) {
        //if the gap is 100cm or bigger so we can distrubute each part in the hall as punch
        let noGroups = columnsThenGap.length;
        if (gapwidth >= 100) {
            let c = 0;
            let count = 0;
            //because we can split it two groups that distance between them equal or bigger 100 cm so always start eqauls 1
            let start = 1
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap[c], chairLength, chairWidth, benchesWidth, c, start, count, false, columnsThenGap);
                c++;
            }
            return modify(out , rows , columnsThenGap , columns, noGaps)
        

        } else {
            let start = startPostionIfGap(chairWidth, gapwidth);//here we get we should skip how may chairs to start distrubation
            let startPosition = new Array();
            let k = 1;
            startPosition[0] = 1;
            if (k < noGroups) {
                startPosition[k] = start + 1;
                k++;
            }
            let c = 0;
            let count = 0;
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap[c], chairLength, chairWidth, benchesWidth, c, startPosition[c], count, false, columnsThenGap);
                c++;
            }
        }
         return  modify(out , rows , columnsThenGap , columns, noGaps)
            
    }
    else if (caseNo == 3) {
        let noGroups = 0; // the hall as whole will be as one group
        let count = 0;
        let start = 1;
        count = algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, true, columnsThenGap);
        return out;
    }
    else if (caseNo == 4) {
        //  if the gap is 100cm or bigger so we can distrubute each part in the hall as punch 
        let noGroups = columnsThenGap.length;
        if (gapwidth >= 100) {
            let c = 0;
            let count = 0;
            //because we can split it two groups that distance between them equal or bigger 100 cm so always start eqauls 1
            let start = 1
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap[c], chairLength, chairWidth, benchesWidth, c, start, count, true, columnsThenGap);
                c++;
            }
            return  modify(out , rows , columnsThenGap , columns, noGaps)
            

        } else {
            let start = startPostionIfGap(chairWidth, gapwidth);//here we get we should skip how may chairs to start distrubation
            let startPosition = new Array();
            let k = 1;
            startPosition[0] = 1;
            if (k < noGroups) {
                startPosition[k] = start + 1;
                k++;
            }
            let c = 0;
            let count = 0;
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap[c], chairLength, chairWidth, benchesWidth, c, startPosition[c], count, true, columnsThenGap);
                c++;
            }
        }
        return  modify(out , rows , columnsThenGap , columns, noGaps)
        
    }
};
/**
* HallController  function to modify 2d array output to add gaps
*@memberof module:controllers/hallControllers
*@param {number}   rows
*@param {number}   columns
*@param {number}   noGaps
*@param {number}   columnsThenGap
**/
function modify(out, rows, columnsThenGap, columns, noGaps) {

    let m = Array2D(rows + 1, columns + 1 + noGaps);
    let last = 0;
    var mycol=0
    var start =true;
    // expand to have the correct amount or rows

    for (let r = 0; r < rows + 1; r++) {
                     
            for (var c = 0; c < columns+1; c++) {
                if(start ==true){
                  mycol= c;
                 start = false;
                }
                if(c == columnsThenGap[last]+1){
                  mycol++;
                  last++;
                }
                m[r][mycol]=out[r][c];
                mycol++;
            
               
            }
            mycol=0;
            start=true;
            last = 0;
                    
    }
   return m;
}

/**
* HallController  
*@function distributionAlgo 
*@memberof module:controllers/hallControllers
*@param {object}  req      Express request object
*@param {object}  res      Express response object
**/
exports.distributionAlgo = (req, res, next) => {
    console.log("Came to distribution")
    //first valdiate
    console.log(req.body)
    const { error } = joiValidate(req.body)
    if (error)
        return res.status(400).send({ message: error.details[0].message });

       // return res.json({ message: "Done"}).status(200);
    let gap;
    let benches;
    let caseNo;
    const decodedID = decode_id(req);
    var output_distribution = new Array();

    if (req.body.isBench == 1) {
        benches = true;
    } else {
        benches = false;
    }
    if (req.body.isGap == 1) {
        gap = true;
    } else {
        gap = false;
    }
    caseNo = cases(gap, benches);
 
    output_distribution = fixed_algorithims(
        caseNo, req.body.rows, req.body.columns,
        req.body.chairLength, req.body.chairWidth,
        req.body.noGaps, req.body.benchesWidth,
        req.body.columnsThenGap, req.body.gapwidth
        );
  
    const hall = new Hall({
        _id: new mongoose.Types.ObjectId(),
        userId:decodedID,
        rows: req.body.rows,
        columns: req.body.columns,
        chairLength: req.body.chairLength,
        chairWidth: req.body.chairWidth,
        benchesWidth: req.body.benchesWidth,
        noGaps:req.body.noGaps,
        columnsThenGap: req.body.columnsThenGap,
        gapwidth: req.body.gapwidth,
        distibution: output_distribution
    });

    db_halls.insert(hall, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'faild' });
        } else {
            return res.status(200).json({ Array :output_distribution  });
        }
    });

};
/**
* HallController  
*@function getData
*@memberof module:controllers/hallControllers
*@param {object}  req      Express request object
*@param {object}  res      Express response object
**/
exports.getData = (req, res, next) => {
    const decodedID = decode_id(req);
    let selector = {}
    selector['userId'] = decodedID;
    db_halls.find({ 'selector': selector }, (err, documents) => {
      if (err) {
        return res.status(401).json({ message: 'failed' });
      } else {
          //return last entered data
        return res.status(200).json({ Array :documents.docs[documents.docs.length - 1].distibution,message:'Done' });
      }
    });

};
