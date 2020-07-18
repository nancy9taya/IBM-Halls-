const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const Hall = require('../models/Hall');
const env = require('dotenv').config();
var randomHash = require('random-key');
var randomBytes = require('crypto');
var { db_halls } = require('../cloudant');
const { clearLine } = require('readline');
const { v4: uuidv4 } = require('uuid');
var output = new Array();

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
        columnsThenGap:
            Joi.number().required(),
        gapwidth:
            Joi.number().required()
    }
    return Joi.validate(req, schema);
};
exports.validateHallData = joiValidate;



function horizontalDistance(chairWidth) {//if there isnot any gap
    let distance = Math.ceil(100 / chairWidth);
    return distance;
}

function virticallDistance(chairLength, chairWidth) {//if there isnot any gap
    let distance = Math.ceil(Math.sqrt(Math.pow(100, 2) - Math.pow(chairWidth, 2)) / chairLength);
    return distance;
}
function startPostionIfGap(chairWidth, gapwidth) {//if there is a gap
    let distance = Math.ceil((100 - gapwidth) / chairWidth);
    return distance;
}
function virticallDistanceWithBenche(chairLength, chairWidth, benchesWidth) {//there is benche for each chair
    let distance = Math.ceil((Math.sqrt(Math.pow(100, 2) - Math.pow(chairWidth, 2)) - benchesWidth) / (benchesWidth + chairLength));
    return distance;
}

function algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, ifBenches) {
    let i = 1; let j = 1;
    let first = true;
    while (j <= rows) {
        while (i <= columns) {
            if (first == true && i == 1) {
                i = start;//start from the start chair
            }
            else if (first == false && i == 1) {
                i = start + 1;//start from the start + 1  chair to make sure that the distance is hypotenuse the pythagorean triangle
            }

            let spot = { num: i, status: true, row: j, group: noGroups + 1 };
            output[count] = spot;
            let countUnvaildHorizontal = horizontalDistance(chairWidth);
            i = i + countUnvaildHorizontal;
            i++;
            count++;
            first = !first;
        }
        i = 1;
        let countUnvaildVertical;
        if (ifBenches == false) {
            countUnvaildVertical = virticallDistance(chairLength, chairWidth);//to apply pythagorean theorem 
        }
        else {
            countUnvaildVertical = virticallDistanceWithBenche(chairLength, chairWidth, benchesWidth)//to apply pythagorean theorem 
        }
        j = j + countUnvaildVertical;
    }
    return count;
}

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

function fixed_algorithims(caseNo, rows, columns, chairLength, chairWidth, benchesWidth, columnsThenGap, gapwidth) {
    if (caseNo == 1) {
        let noGroups = 0; // the hall as whole will be as one group
        let count = 0;
        let start = 1;
        count = algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, false);
        console.log(output);
        return output;
    }
    else if (caseNo == 2) {
        //if the gap is 100cm or bigger so we can distrubute each part in the hall as punch 
        let noGroups = columns / columnsThenGap;
        if (gapwidth >= 100) {
            let c = 0;
            let count = 0;
            //because we can split it two groups that distance between them equal or bigger 100 cm so always start eqauls 1
            let start = 1
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap, chairLength, chairWidth, benchesWidth, c, start, count, false);
                c++;
            }
            console.log(output);
            return output;

        } else {
            let start = startPostionIfGap(chairWidth, gapwidth);//here we get we should skip how may chairs to start distrubation
            let startPosition = new Array();
            let k = 1;
            startPosition[0] = 1;
            if (k < noGroups) {
                startPosition[k] = start + 1;
                k++;
            }
            console.log(startPosition);
            let c = 0;
            let count = 0;
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap, chairLength, chairWidth, benchesWidth, c, startPosition[c], count, false);
                c++;
            }
        }
        console.log(output);
        return output;
    }
    else if (caseNo == 3) {
        let noGroups = 0; // the hall as whole will be as one group
        let count = 0;
        let start = 1;
        count = algorithm(rows, columns, chairLength, chairWidth, benchesWidth, noGroups, start, count, true);
        console.log(output);
        return output;
    }
    else if (caseNo == 4) {
        //  if the gap is 100cm or bigger so we can distrubute each part in the hall as punch 
        let noGroups = columns / columnsThenGap;
        if (gapwidth >= 100) {
            let c = 0;
            let count = 0;
            //because we can split it two groups that distance between them equal or bigger 100 cm so always start eqauls 1
            let start = 1
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap, chairLength, chairWidth, benchesWidth, c, start, count, true);
                c++;
            }
            console.log(output);
            return output;

        } else {
            let start = startPostionIfGap(chairWidth, gapwidth);//here we get we should skip how may chairs to start distrubation
            let startPosition = new Array();
            let k = 1;
            startPosition[0] = 1;
            if (k < noGroups) {
                startPosition[k] = start + 1;
                k++;
            }
            console.log(startPosition);
            let c = 0;
            let count = 0;
            while (c < noGroups) {
                count = algorithm(rows, columnsThenGap, chairLength, chairWidth, benchesWidth, c, startPosition[c], count, true);
                c++;
            }
        }
        console.log(output);
        return output;
    }
};
exports.distributionAlgo = (req, res, next) => {
    //first valdiate
    const { error } = joiValidate(req.body)
    if (error)
        return res.status(400).send({ message: error.details[0].message });

       // return res.json({ message: "Done"}).status(200);
    let gap;
    let benches;
    let caseNo;
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
  // console.log(caseNo, req.body.rows, req.body.columns, req.body.chairLength, req.body.chairWidth, req.body.benchesWidth, req.body.columnsThenGap, req.body.gapwidth);
    output_distribution = fixed_algorithims(caseNo, req.body.rows, req.body.columns, req.body.chairLength, req.body.chairWidth, req.body.benchesWidth, req.body.columnsThenGap, req.body.gapwidth);(caseNo, req.body.rows, req.body.columns, req.body.chairLength, req.body.chairWidth, req.body.benchesWidth, req.body.columnsThenGap, req.body.gapwidth);
    const hall = new Hall({
        _id: new mongoose.Types.ObjectId(),
        rows: req.body.rows,
        columns: req.body.columns,
        chairLength: req.body.chairLength,
        chairWidth: req.body.chairWidth,
        benchesWidth: req.body.benchesWidth,
        columnsThenGap: req.body.columnsThenGap,
        gapwidth: req.body.gapwidth,
        distibution: output_distribution
    });
    //console.log(hall);
    db_halls.insert(hall, (err, result) => {
        if (err) {
            console.log('Error occurred: ' + err.message, 'create()');
            return res.status(500).json({ message: 'faild' });
        } else {
            return res.status(200).json({ message: "Done" ,hall: hall});
        }
    });

};
