/**
*@module controllers/userControllers
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');//this used for hashing the passwords to provide more secuirty
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const env = require('dotenv').config();
const fs = require('fs');
const imgPath = './public/profileImage/default.jpg';
const nodemailer = require("nodemailer");
const RandHash = require('../models/RandHash');// put randam hash in url in verify mail
var randomHash = require('random-key');
var randomBytes = require('crypto');
var mailOptions;
const passport = require('passport');
var { db_users } = require('../cloudant');
var { db_randhashes } = require('../cloudant');
const { v4: uuidv4 } = require('uuid');


/**
* UserController signup valdiation
*@memberof module:controllers/userControllers
*@param {object}   req.body
*@param {string}   req.body.email     you enter user email should be vaild and real
*@param {string}   req.body.password  you put password  min 8 characters and max is 80
*@param {string}   req.body.name      you enter user name min 3 letters and max 30
*/


function joiValidate(req) {
  const schema = {
    email:
      Joi.string().email().lowercase().required(),
    password:
      Joi.string().min(8).max(80).required(),
    name:
      Joi.string().min(3).max(30).required(),
  }
  return Joi.validate(req, schema);
};
exports.validateSignUp = joiValidate;


/**
* UserController forget password valdiation
*@memberof module:controllers/userControllers
*@param {object}   req.body
*@param {string}   req.body.newPassword       you put password  min 8 characters and max is 80
*@param {string}   req.body.confirmedPassword  you put password  min 8 characters and max is 80
 */
function validatePassword(req) {

  const schema = {
    newPassword: Joi.string().min(8).max(80).alphanum().required(),
    confirmedPassword: Joi.string().min(8).max(80).alphanum().required()
  }
  return Joi.validate(req, schema);
}

exports.validateUserPassword = validatePassword;
/**
* UserController random hash generator
*@memberof module:controllers/userControllers
*@param {schema}  rand
*@param {string}  rand.randNo  it generates random string of legnth 50
 */
function randGenerator() {
  rand.randNo = randomHash.generate(50);
}


const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  port: 8000,
  secure: false,
  auth: {
    user: process.env.HALLEMAIL,//change 
    pass: process.env.PASSWORD
  }
});
/**
* UserController signup 
*@memberof module:controllers/userControllers
*@function userSignup 
*@param {function} joiValidate          Function for validate data
*@param {object}  req      Express request object
*@param {string}  req.body.email     you enter user email should be vaild and real
*@param {string}  req.body.password  you put password  min 8 characters and max is 80
*@param {string}  req.body.name      you enter user name min 3 letters and max 30
*@param {date}    req.body.birthDate   you enter user birthdate min 1900
*@param {boolean} req.body.gender    you enter user gender true for female and false for male
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 400 ,409 ,500/ if success it returns status of 201 
*@param {string}  res.message      the type of error /user created successfully
*@param {token}   res.token   it returns token if user sigup successfully
 */
exports.userSignup = async function (req, res, next) {

  const { error } = joiValidate(req.body)
  if (error){
    return res.status(400).send({ message: error.details[0].message });
  }
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const rand = new RandHash;
      rand.randNo = randomHash.generate(50);
      const host = req.get('host');//just our locahost
      const link = "http://" + host + "/user/verify?id=" + rand.randNo;
      mailOptions = {
        from: 'Do Not Reply ' + process.env.MAESTROEMAIL,
        to: req.body.email,//put user email
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
      }
      smtpTransport.sendMail(mailOptions, async function (error, response) {
        if (error) {
          console.log(error);
          return res.status(500).send({ msg: 'Unable to send email' });

        } else {
          let mail=req.body.email.toLowerCase();
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: mail,
            password: hash
          });
          rand.userId = user._id;
          db_randhashes.insert(rand, (err, result) => {
            if (err) {
              console.log('Error occurred: ' + err.message, 'create()');
              return res.status(500).json({ message: 'faild' });
            } else {
              const token = jwt.sign(
                {
                  name: user.name
                },
                process.env.JWTSECRET
              );
              db_users.insert(user, (err, result) => {
                if (err) {
                  console.log('Error occurred: ' + err.message, 'create()');
                  return res.status(500).json({ message: 'faild' });
                } else {
                  return res.json({ token }).status(200);
                }
              });
            }
          });
        }
      });
    }
  });
}
/**
* UserController login 
*@memberof module:controllers/userControllers
*@function userLogin
*@param {object}  req                Express request object
*@param {string}  req.body.email     you enter user email should be vaild and real
*@param {string}  req.body.password  you put password  min 8 characters and max is 80
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 400 ,401/ if success it returns status of 200 
*@param {string}  res.message      the type of error /user created successfully
*@param {token}   res.token         it returns token if user login successfully
 */

exports.userLogin = (req, res, next) => {
  console.log("get in Log in")
  let selector = {}
  let email=req.body.email.toLowerCase();
  selector['email'] = email;
  console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
  db_users.find({ 'selector': selector }, (err, documents) => {
    console.log(err)
    console.log(documents)
    if (err) {

      console.log('Error occurred: ' + err.message, 'create()');
      return res.status(401).json({ message: 'failed' });
    } else if(documents.docs.length>0) {
      console.log(documents.docs.length);
      console.log(req.body.password)
      console.log(documents.docs[0].password)
      bcrypt.compare(req.body.password, documents.docs[0].password, function (err,result) {
        if (err) {
          return res.status(401).json({ message: 'Auth failed' });
        }
        else if (result) {
          const token = jwt.sign(
            {
              _id: documents.docs[0]._id
            },
            process.env.JWTSECRET
          );

          return res.json({ token }).status(200);
        }
        else{
            return res.status(401).json({ message: 'Auth failed' });
        }
      });
    }
    else{
       return res.status(401).json({ message: 'Auth failed' });

    }
  });
};
/**
* UserController verify mail
*@memberof module:controllers/userControllers 
*@function userVerifyMail
*@param {object}  req                  Express request object
*@param {string}  req.query.id     random hash key which refrenced to user ID
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 401 ,500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /Email is verified
 */

exports.userVerifyMail = (req, res, next) => {
  console.log(req.protocol + ":/" + req.get('host'));
  if ((req.protocol + "://" + req.get('host')) == ("http://" + req.get('host'))) {
    console.log("Domain is matched. Information is from Authentic email");
    let selector = {};
    selector['randNo'] = req.query.id;
    db_randhashes.find({ 'selector': selector }, (err, documents) => {
      if (err) {
        console.log('Error occurred: ' + err.message, 'create()');
        return res.status(401).json({ message: 'failed' });
      } else {
        console.log(documents.docs.length);
        if (documents.docs.length < 1) {
          return res.status(404).json({ message: 'The random hash doesnot Exist' });
        }
        else {
          var user_id = documents.docs[0].userId;
          db_randhashes.destroy(documents.docs[0]._id, documents.docs[0]._rev, (err) => {
            if (err) {
              return res.status(404).json({ message: 'The User doesnot Exist' });
            } else {
              db_users.get(user_id, (err, document) => {
                if (err) {
                  return res.status(404).json({ message: 'The User doesnot Exist' });
                } else {
                  console.log(document);
                  let item = {
                    _id: document._id,
                    _rev: document._rev,
                    name: document.name,
                    email: document.email,
                    password: document.password,
                    birthDate: document.birthDate,
                    gender: document.gender,
                    facebook: document.facebook,
                    loggedByFb: document.loggedByFb,
                    createdAt: document.createdAt
                  }
                  item["active"] = true;
                  db_users.insert(item, (err, result) => {
                    if (err) {
                      console.log('Error occurred: ' + err.message, 'create()');
                      return res.status(404).json({ message: 'failed' });
                    } else {
                      return res.status(200).json({ message: 'success' });
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  } else {
    res.status(401).json({
      message: 'Domain doesnot Match'
    });
  }
};
/**
* UserController  User logout
*@memberof module:controllers/userControllers
*@function userLogout
*@param {function} checkAuth           Function for validate authenticate
*@param {object}  req                  Express request object
*@param {string}  req.params.id        search by user ID 
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /User deleted
 */
exports.userLogout = (req, res, next) => {

};
/**
* UserController  check mail exists before
*@memberof module:controllers/userControllers
*@function  userMailExist 
*@param {object}  req                  Express request object
*@param {string}  req.params.mail       search by user ID 
*@param {object}  res 
*@param {status}  res.status       if existx  it returns status of 409/ if success it returns status of 200 
*@param {string}  res.message      erorr Mail exists/ or success
 */
exports.userMailExist = function MailExist(req, res, next) {
  let selector = {}
  const mail=req.params.mail.toLowerCase();
  selector['email'] = mail;
  console.log(selector)
  db_users.find({ 'selector': selector }, (err, documents) => {
    console.log(documents)
    if (err) {
      console.log('Error occurred: ' + err.message, 'create()');
      return res.status(401).json({ message: 'failed' });
    } else {
      console.log(documents.docs.length);
      if (documents.docs.length > 0) {
        return res.status(409).json({ message: 'Mail exists' });
      }
      else {
        return res.status(200).json({ message: 'success' });
      }
    }
  });
};

/**
* UserController  User forget password
*@memberof module:controllers/userControllers
*@function userForgetPassword 
*@param {object}  req                      Express request object
*@param {string}  req.params.mail          user mail to send link to set new password
*@param {object}  res                      Express response object
*@param {status}  res.status               if error  it returns status of 401,500/ if success it returns status of 200 
*@param {string}  res.message              the type of error /send msg successfuly
 */

exports.userForgetPassword = async (req, res, next) => {
  const host = req.hostname;
  const port = req.port;
  let selector = {}
  const mail=req.params.mail.toLowerCase();
  selector['email'] = mail;
  db_users.find({ 'selector': selector }, (err, documents) => {
    if (err) {
      console.log('Error occurred: ' + err.message, 'create()');
      return res.status(401).json({ message: 'User does not exist' });
    } else {
      const rand = new RandHash;
      rand.randNo = randomHash.generate(50);
      rand.userId = documents.docs[0]._id;
      console.log(rand)
      db_randhashes.insert(rand, (err, result) => {
        if (err) {
          console.log('Error occurred: ' + err.message, 'create()');
          return res.status(500).json({ message: 'faild' });
        } else {
          //const link = "https://hallsfe.eu-gb.cf.appdomain.cloud/#/resetpass?id=" + rand.randNo;
          const link = "http://localhost:4200/#/resetpass?id=" + rand.randNo;
          mailOptions = {
            from: 'Do Not Reply ' + process.env.HALLEMAIL,
            to: documents.docs[0].email,//put user email
            subject: "Reset your password",
            html: "Hello.<br>No need to worry, you can reset your Halls password by clicking the link below:<br><a href=" + link + ">Reset password</a><br1>   Your username is:" + documents.docs[0]._id + "</br1> </br2>  If you didn't request a password reset, feel free to delete this email</br2>"
          }
          console.log(mailOptions)
          smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
              return res.status(500).send({ msg: 'Unable to send Email' });
            } else {
              return res.status(201).json({ message: 'send msg successfuly' });
            }
          });
        }
      });

    }
  });
};
/**
* UserController  User reset password
*@memberof module:controllers/userControllers
*@function userResetPassword
*@param {function} validatePassword         Function for validate new password
*@param {object}  req                       Express request object
*@param {string}  req.req.query.id           random hash key which refrenced to user ID
*@param {string}  req.body.newPassword           user new password
*@param {string}  req.body.confirmedPassword     user confirmed password
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 401,500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /You set new password successfly 
*@param {token}   res.token         it returns token if user set new password successfly 
 */

exports.userResetPassword = (req, res, next) => {
  console.log(req.protocol + ":/" + req.get('host'));
  if ((req.protocol + "://" + req.get('host')) == ("http://" + req.get('host'))) {
    console.log("Domain is matched. Information is from Authentic email");
    let selector = {};
    selector['randNo'] = req.query.id;
    db_randhashes.find({ 'selector': selector }, (err, documents) => {
      if (err) {
        console.log('Error occurred: ' + err.message, 'create()');
        return res.status(401).json({ message: 'failed' });
      } else {
        console.log(documents.docs.length);
        if (documents.docs.length < 1) {
          return res.status(404).json({ message: 'The random hash doesnot Exist' });
        }
        else {
          validatePassword(req.body);
          if (req.body.newPassword == req.body.confirmedPassword) {
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if (err) {
                return res.status(500).json({
                  error: err
                });
              }
              else {
                var user_id = documents.docs[0].userId;
                //destroy hash 
                db_randhashes.destroy(documents.docs[0]._id, documents.docs[0]._rev, (err) => {
                  if (err) {
                    return res.status(404).json({ message: 'The User doesnot Exist' });
                  } else {
                    db_users.get(user_id, (err, document) => {
                      if (err) {
                        return res.status(404).json({ message: 'The User doesnot Exist' });
                      } else {
                        console.log(document);
                        let item = {
                          _id: document._id,
                          _rev: document._rev,
                          name: document.name,
                          email: document.email,
                          birthDate: document.birthDate,
                          gender: document.gender,
                          facebook: document.facebook,
                          loggedByFb: document.loggedByFb,
                          createdAt: document.createdAt,
                          active: document.active
                        }
                        item["password"] = hash;
                        db_users.insert(item, (err, result) => {
                          if (err) {
                            console.log('Error occurred: ' + err.message, 'create()');
                            return res.status(404).json({ message: 'failed' });
                          } else {
                            mailOptions = {
                              from: 'Do Not Reply ' + process.env.HALLEMAIL,
                              to: item.email,//put user email
                              subject: "Confirm Reset Password",
                              html: "Hello.<br>You just have changed your password <br>"
                            }
                            console.log(mailOptions);
                            smtpTransport.sendMail(mailOptions, function (error, response) {
                              if (error) {
                                console.log(error);
                                return res.status(500).send({ msg: 'Unable to send Email' });
                              }
                              else {
                                const token = jwt.sign(
                                  {
                                    _id: documents.docs[0]._id
                                  },
                                  process.env.JWTSECRET
                                );
                                return res.status(200).json({ message: 'You reset password successfly', token: token });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });

          } else {
            return res.status(401).json({ message: 'Please confirm the New password' });
          }
        }
      }
    });
  }
  else {
    res.status(401).json({
      message: 'Domain doesnot Match'
    });
  }
};







