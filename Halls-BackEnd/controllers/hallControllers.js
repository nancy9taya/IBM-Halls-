const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const env = require('dotenv').config();
var randomHash = require('random-key');
var randomBytes = require('crypto');
var { db_halls } = require('../cloudant');
const { clearLine } = require('readline');

var output = new Array();

function joiValidate(req) {
    const schema = {
        shape:
            Joi.number().required(),
        rows:
            Joi.number().required(),
        columns:
            Joi.number(),
        firstColumn:
            Joi.number(),
        increasedColumn:
            Joi.number(),
        chairLength:
            Joi.number().required(),
        chairWidth:
            Joi.number().required(),
        benchesWidth: Joi.number().required(),
        columnsThenGap: Joi.number().required(),
        gapwidth: Joi.number().required()
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
function horizontalDistanceWithGap(chairWidth, gapwidth) {//if there is a gap
    let distance = Math.ceil((100 - gapwidth) / chairWidth);
    return distance;
}
function virticallDistanceWithBenche(chairLength, chairWidth, benchesWidth) {//there is benche for each chair
    let distance = Math.ceil((Math.sqrt(Math.pow(100, 2) - Math.pow(chairWidth, 2)) - benchesWidth) / (benchesWidth + chairLength));
    return distance;
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
        let i = 1; let j = 1; let count = 0;
        let first = true;
        while (j <= rows) {
            while (i <= columns) {
                if (first == true && i == 1) {
                    i = 1;//start from the first chair
                }
                else if (first == false && i == 1) {
                    i = 2;//start from the second chair
                }
                let spot = { num: i, status: true, row: j };
                output[count] = spot;
                let countUnvaildHorizontal = horizontalDistance(chairWidth);
                i = i + countUnvaildHorizontal;
                i++;
                count++;
                first = !first;
            }
            i = 1;
            let countUnvaildVertical = virticallDistance(chairLength, chairWidth);//to apply pythagorean theorem 
            j = j + countUnvaildVertical;
        }
        console.log(output);
        return output;
    }
    else if(caseNo == 2){


    }
    else if(caseNo == 3){


    }
    else if(caseNo == 4){

        
    }
}
function cirular_algorithims(caseNo,  rows ,columns ,chairLength , chairWidth ,benchesWidth , columnsThenGap,gapwidth ){





}
exports.distributionAlgo = (req, res, next) => {






};
