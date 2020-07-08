  const express = require("express");
  const  passport = require('passport');
  const app = express();// require('config-passport.js')(passport);
  const morgan = require("morgan");
  const bodyParser = require("body-parser");
  const mongoose = require("mongoose");
  const  FBlogin = require('./routes/FBlogin');
  const userRoutes = require('./routes/user');
 // app.use('/uploads', express.static('uploads'));
 var Cloudant = require('@cloudant/cloudant');
 // Initialize Cloudant with settings from .env
 var username = process.env.cloudant_username || "nodejs";
 var password = process.env.cloudant_password;
 var cloudant = new Cloudant({ url:"https://4cf5dc48-8705-49e2-9672-a6542a0aaea9-bluemix.cloudant.com" , plugins: { iamauth: { iamApiKey: "wvxUMFT5UgL7ZEL_ARKwA-AifCrWVicETFDXAN4AQJ4c" } } });
  //mongoose.connect(`mongodb://localhost/MaestroApp`, { useNewUrlParser: true ,useUnifiedTopology: true ,useCreateIndex: true  }).
 // catch(error => handleError(error));
  //mongoose.set('useFindAndModify', false);

 // mongoose.Promise = global.Promise;
  
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  
  passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
      done(err, user);
    });
  });
  app.use(passport.initialize());  
  app.use("/user", userRoutes);
  app.use("/auth",FBlogin);

  
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  
  module.exports = app;