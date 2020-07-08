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
const RandHash =require('../models/RandHash');// put randam hash in url in verify mail
var randomHash = require('random-key');
var randomBytes= require('crypto');
var mailOptions;
const rand =new RandHash;
const  passport = require('passport');
const	FacebookStrategy = require('passport-facebook').Strategy;
var Cloudant = require('@cloudant/cloudant');
var cloudant = new Cloudant({ url:"https://4cf5dc48-8705-49e2-9672-a6542a0aaea9-bluemix.cloudant.com" , plugins: { iamauth: { iamApiKey: "wvxUMFT5UgL7ZEL_ARKwA-AifCrWVicETFDXAN4AQJ4c" } } });

let db = cloudant.use('collage_app');
/**
* UserController signup valdiation
*@memberof module:controllers/userControllers
*@param {object}   req.body
*@param {string}   req.body.email     you enter user email should be vaild and real
*@param {string}   req.body.password  you put password  min 8 characters and max is 80
*@param {string}   req.body.name      you enter user name min 3 letters and max 30
*@param {date}     req.body.birthDate   you enter user birthdate min 1900
*@param {boolean}  req.body.gender    you enter user gender true for female and false for male 
*/


 function joiValidate (req) {
	const schema = {
    email: 
    Joi.string().email().lowercase().required(),
    password: 
    Joi.string().min(8).max(80).alphanum().required(),
    name: 
    Joi.string().min(3).max(30).required(),
    birthDate:
    Joi.date().required().min('1-1-1900').iso(),
    gender:
    Joi.boolean().required(),
    type:
    Joi.string().required()
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
function validatePassword (req) {

	const schema = {
    newPassword: Joi.string().min(8).max(80).alphanum().required(),
    confirmedPassword: Joi.string().min(8).max(80).alphanum().required()
	}
	return Joi.validate(req, schema);
}

exports.validateUserPassword = validatePassword;
/**
* UserController change password valdiation
*@memberof module:controllers/userControllers
*@param {object}   req.body
*@param {string}   req.body.oldPassword  you put password  min 8 characters and max is 80
*@param {string}   req.body.newPassword       you put password  min 8 characters and max is 80
*@param {string}   req.body.confirmedPassword  you put password  min 8 characters and max is 80
 */
function changePassword (req) {

	const schema = {
    oldPassword:Joi.string().min(8).max(80).alphanum().required(),
    newPassword: Joi.string().min(8).max(80).alphanum().required(),
    confirmedPassword: Joi.string().min(8).max(80).alphanum().required()
	}
	return Joi.validate(req, schema);
}

exports.validateChangePassword = changePassword;
/**
* UserController random hash generator
*@memberof module:controllers/userControllers
*@param {schema}  rand
*@param {string}  rand.randNo  it generates random string of legnth 50
 */
function randGenerator(){
  rand.randNo = randomHash.generate(50);
}
/**
* UserController edit his profile including editing his email
*@memberof module:controllers/userControllers
*@param {object}   req.body
*@param {string}   req.body.email  - edit the email
*@param {string}   req.body.password  - edit the password
*@param {string}   req.body.gender  - edit the gender
*@param {string}   req.body.birthDate  - edit the birth date
*@param {string}   req.body.country - edit the country
*@param {string}   req.body.phone  - edit the Mobile number
*/
function validateEdit (req){
    const schema = {
      email: 
      Joi.string().email().lowercase().required(),
      password: 
      Joi.string().min(8).max(80).alphanum().required(),
      gender:
      Joi.bool(),
      birthDate:
      Joi.date().min('1-1-1900').max('1-1-2009').iso(),
      country:
      Joi.string(),
      phone:
      Joi.string()
    }
    return Joi.validate(req, schema); 
  }
  exports.validateFullEdit = validateEdit
  /**
  * UserController edit his profile Without editing his email
  *@memberof module:controllers/userControllers
  *@param {object}   req.body
  *@param {string}   req.body.email  - edit the email
  *@param {string}   req.body.gender  - edit the gender
  *@param {string}   req.body.birthDate  - edit the birth date
  *@param {string}   req.body.country - edit the country
  *@param {string}   req.body.phone  - edit the Mobile number
  */
  function validateEditWithoutEmail (req){ //na2s el phone
    const schema = {
      email: 
      Joi.string().email().lowercase().required(),
      gender:
      Joi.bool(),
      birthDate:
      Joi.date().min('1-1-1900').max('1-1-2009').iso(),
      country:
      Joi.string(),
      phone:
      Joi.string()
    }
    return Joi.validate(req, schema); 
  }
  exports.validateEditWithoutMail = validateEditWithoutEmail;

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
   port: 8000,
   secure: false,
   auth: {
      user: process.env.MAESTROEMAIL,//change 
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
exports.userSignup =   (req, res, next) => {
  const { error } = joiValidate(req.body)
  if (error)
   return res.status(400).send({ message: error.details[0].message });
   const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name:req.body.name,
    email: req.body.email,
    password: req.body.password,
    birthDate:req.body.birthDate,
    gender:req.body.gender,
    type:req.body.type
  });
  db.insert(user, (err, result) => {
    if (err) {
        console.log('Error occurred: ' + err.message, 'create()');
        return res.status(500).json({message: 'faild'});
    } else {
        return res.status(201).json({message: 'User created'});
    }
});
   //this object is created for LikedSongLibrary
  /*let userId;
  User.find({ name: req.body.name  })
  .exec()
   .then(user => {
     if (user.length >= 1) {
       return res.status(409).json({
         message: 'Username already exists'
       });
     }  
     else {
           bcrypt.hash(req.body.password, 10, (err, hash) => {
             if (err) {
               return res.status(500).json({
                 error: err
               });
             } else {
              randGenerator();
              const host = req.get('host');//just our locahost
              const link="http://"+host+"/user/verify?id="+rand.randNo;
              mailOptions={
                   from: 'Do Not Reply '+process.env.MAESTROEMAIL,
                   to : req.body.email,//put user email
                   subject : "Please confirm your Email account",
                   html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
               }
              console.log(mailOptions);
              smtpTransport.sendMail(mailOptions,async function(error, response){
              if(error){
                 console.log(error);
                 return res.status(500).send({ msg: 'Unable to send email' });     
                 
              }else{
                     //here that the message send successfulyy so the user can sign up  
                     const user = new User({
                       _id: new mongoose.Types.ObjectId(),
                       name:req.body.name,
                       email: req.body.email,
                       password: hash,
                       birthDate:req.body.birthDate,
                       gender:req.body.gender,
                       type:req.body.type
                     });
                     rand.userId=user._id;//to use it back in verify mail
                     rand.save().then().catch();
                     user.uri= 'Maestro:User:'+ user._id.toString();
                     user.href = 'https://api.Maestro.com/v1/users/'+ user._id.toString();
                     user.externalUrls.value = 'https://open.Maestro.com/users/'+ user._id.toString();
                     user.image.data = fs.readFileSync(imgPath);//just set the default image as its first sigup for the user
                     user.image.contentType = 'jpg';
                     user.maestroId = randomHash.generate(30);
                     const token = jwt.sign(
                       { _id: user._id,
                         name: user.name, 
                       },
                       process.env.JWTSECRET
                     );
                     user.token = token ;
                     user
                       .save()
                       .then(result => {
                         console.log(result);
                         res.status(201).json({
                           message: 'User created',
                           token: token
                         });
                           //creating the playlist liked songs playlist after creating the user
                       //  trackController.createLikedSongs(user._id); 
                       })
                       .catch(err => {
                         console.log(err);
                         res.status(500).json({
                           error: err
                         });
                       });
                    }
               });
             }
           });
         }
    });      */
};

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

   User
    .findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        if (result) {

          const token = jwt.sign(
            { _id: user._id,
              name: user.name, 
            },
            process.env.JWTSECRET,
            {
              expiresIn: '7d'
            }
          );
          User.updateOne({email: req.body.email},{token: token})
          .exec()
          .then(result =>{
              return res.status(200).json({
              message: 'Auth successful',
              token: token
            });
           })
          .catch(err => {
            res.status(401).json({
              message: 'Auth failed'
            });
          });  
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
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
  console.log(req.protocol+":/"+req.get('host'));
  if((req.protocol+"://"+req.get('host'))==("http://"+req.get('host'))){
     console.log("Domain is matched. Information is from Authentic email");
     RandHash
     .findOne({ randNo: req.query.id  })
     .exec()
     .then(rand=> {
       if (rand.length < 1) {
         return res.status(401).json({
           message: 'The User doesnot Exist'
         });
       }
         console.log("Email is verified");
          User.updateOne({_id:rand.userId},{active: true})
          .exec()
          .then(result =>{
             res.status(200).json({
             message:"Email is been Successfully verified"
            });
            rand.remove({userID: rand.userId });
           })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });   
    })
    .catch(err => {
       console.log("Email is not verified");
       res.status(500).json({
        error: err
      });
    });
 } else{
      res.status(401).json({
      message: 'Domain doesnot Match'
      });
    }
};
/**
* UserController delete User
*@memberof module:controllers/userControllers
*@function userDelete
*@param {function} checkAuth           Function for validate authenticate
*@param {object}  req                  Express request object
*@param {string}  req.params.id        search by user ID 
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /User deleted
 */
exports.userDelete = (req, res, next) => {
  User.remove({ _id: req.params.id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
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
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  console.log(decoded._id);
  User.updateOne({_id:decoded._id},{token: null})
  .exec()
  .then(result =>{
     res.status(200).json({
      message: 'logging out success'
    });
  //  rand.remove({userID: rand.userId });
   })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });     
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
exports.userMailExist = function MailExist (req, res, next) {
  User.find({ email: req.params.mail})
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail exists'
        });
      } else {
        return res.status(200).json({
          message: 'success'
        });
      }
    })
     .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
/**
* UserController  User change password
*@memberof module:controllers/userControllers
*@function userChangePassword 
*@param {function} checkAuth           Function for validate authenticate
*@param {function} changePassword      Function for validate new password
*@param {object}  req                  Express request object
*@param {string}  req.headers.authorization     search by userId which in the token
*@param {string}  req.body.oldPassword         search by user password
*@param {string}  req.body.newPassword           user new password
*@param {string}  req.body.confirmedPassword     user confirmed password
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 401,500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /You change password successfly
 */
exports.userChangePassword = (req, res, next) => {
  const { error } =  changePassword(req.body)
  if (error)
  return res.status(400).send({ msg: error.details[0].message });
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  console.log(decoded._id);
  User.findOne({ _id: decoded._id})
    .exec()
    .then(user => {
      if (user.length < 1) { 
        return res.status(401).json({
        message: 'user is not exists'
      });
    }
        bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: 'Enter correct old password'
            });
          }
          if(result){
            if(req.body.newPassword != req.body.oldPassword ){
            if(req.body.newPassword == req.body.confirmedPassword){
              bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                if (err) {
                  return res.status(500).json({
                    error: err
                  });
                } 
                else {
                  User
                  .updateOne({_id:decoded._id},{password: hash})
                  .exec()
                  .then(result => {
                    res.status(200).json({
                    message: 'You change password successfly'
                    });
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(500).json({
                      error: err
                    });
                  });
                }
              });
            }else{
              return res.status(401).json({
                message: 'Please confirm the New password' 
              });
            }
          }else{
            return res.status(401).json({
              message: 'Please enter anthor new password' 
            });
           }
          }
        });
    })
     .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
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

exports.userForgetPassword = (req, res, next) => {  
  console.log(  req.params.mail )
  const host =req.hostname;
  console.log( host);
  User
  .findOne({ email: req.params.mail})
  .exec()
  .then(user => {
    if (user.length < 1) {
      return res.status(401).json({
        message: 'The Mail doesnot Exist'
      });
      }
      console.log( user._id )
      console.log( user.email )
      console.log(  req.params.mail )
      randGenerator();
      rand.userId = user._id ;
      console.log( rand.userId)
      console.log( rand.randNo)
      rand.save().then().catch();
   
      const link ="http://"+host+"/user/resetPassword?id="+rand.randNo;
       mailOptions={
        from: 'Do Not Reply '+process.env.MAESTROEMAIL,
        to : user.email,//put user email
        subject : "Reset your password",
        html : "Hello.<br>No need to worry, you can reset your Maestro password by clicking the link below:<br><a href="+link+">Reset password</a><br1>   Your username is:"+user._id+"</br1> </br2>  If you didn't request a password reset, feel free to delete this email and carry on enjoying your music!</br2>"
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        return res.status(500).send({ msg: 'Unable to send Email' });                
      }else{
        return res.status(201).json({message: 'send msg successfuly'});
       }
      });
    
  })
   .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
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
  console.log(req.protocol+":/"+req.get('host'));
  if((req.protocol+"://"+req.get('host'))==("http://"+req.get('host'))){
     console.log("Domain is matched. Information is from Authentic email");
     RandHash
     .findOne({ randNo: req.query.id  })
     .exec()
     .then(rand=> {
       if (rand.length < 1) {
         return res.status(401).json({
           message: 'The User doesnot Exist'
         });
       }
        validatePassword (req.body);
        if(req.body.newPassword == req.body.confirmedPassword){
          bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } 
            else {
              User
              .updateOne({_id:rand.userId},{password: hash})
              .exec()
              .then(result => {
                const token = jwt.sign(
                  { _id: rand.userId
                  },
                  process.env.JWTSECRET
                );
                res.status(200).json({
                  message: 'You reset password successfly',
                  token: token
                });
              rand.remove({userID: rand.userId });
              User
               .findOne({_id:rand.userId})
               .exec()
               .then(user => {
                mailOptions={
                  from: 'Do Not Reply '+process.env.MAESTROEMAIL,
                  to : user.email,//put user email
                  subject : "Confirm Reset Password",
                  html : "Hello.<br>You just have changed your password <br>"
                }
                console.log(mailOptions);
                smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                  console.log(error);
                  return res.status(500).send({ msg: 'Unable to send Email' });                
                }
               });
              });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
            }
          });
        }else{
          return res.status(401).json({
            message: 'Please confirm the New password' 
          });
        }
       })
      .catch(err => {
        console.log("your cannot reset your password");
        res.status(401).json({
            message: 'your cannot reset your password'
          });
      });
    }
    else{
      res.status(401).json({
      message: 'Domain doesnot Match'
      });
    }
};
/**
* UserController  User change to premuim 
*@memberof module:controllers/userControllers
*@function userIsPremuim 
*@param {function} checkAuth           Function for validate authenticate
*@param {object}  req                  Express request object
*@param {string}  req.headers.authorization        search by user ID  which in the token
*@param {object}  res 
*@param {status}  res.status       if error  it returns status of 401,500/ if success it returns status of 200 
*@param {string}  res.message      the type of error /User is now Premuim
 */
exports.userIsPremuim = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  console.log(decoded._id);
  User.updateOne({_id: decoded._id},{isPremium : true})
  .exec()
  .then(result =>{
   User
    .findOne({_id: decoded._id})
    .exec()
    .then(user => {
       mailOptions={
        from: 'Do Not Reply '+process.env.MAESTROEMAIL,
        to : user.email,//put user email
        subject : "Premuim Subscribe",
        html : "Hello.<br> Congratulations! You just have turned to our premuim subscribe <br>"
      }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
          console.log(error);
         return res.status(500).send({ msg: 'Unable to send Email' });                
        }
         else{
          res.status(200).json({
          message:"User is now Premuim"
          });
        }
      });
     })
     .catch(err => {
        res.status(401).json({
        message: 'User isnot find'
        });
    });
   })
  .catch(err => {
    console.log(err);
    res.status(500).json({
    error: err
    });
  });   
 };

 