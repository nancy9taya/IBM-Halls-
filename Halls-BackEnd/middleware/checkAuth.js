
/**
*@module middleware
*/

const jwt  = require('jsonwebtoken');
const User = require('../models/User');
var { db_users } = require('../cloudant');
/**
* chechAuth  check if token valid 
*@function chechAuth
*@memberof module:middleware
*@param {object}  req                              Express request object
*@param {string}  req.headers.authorization        search by user ID  which is in the token
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 401/ if success it returns status of 200 
*@param {string}  res.message      if error Auth failed 
 */
var returnDecode;
const auth = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWTSECRET);
        let selector = {}
        selector['_id'] = decoded._id;
        db_users.find({ 'selector': selector }, (err, documents) => {
        if (err) {
            throw new Error();
         }
         else {
            req.user = documents.docs[0];
            next();
         }
         });
         
     
    } catch (error) {
        res.status(401).send({error:'Auth failed!'})
    }
}

module.exports = auth;
//exports.decode = returnDecode;