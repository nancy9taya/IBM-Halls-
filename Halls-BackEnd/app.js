  const express = require("express");
  const  passport = require('passport');
  const app = express();// require('config-passport.js')(passport);
  const morgan = require("morgan");
  const bodyParser = require("body-parser");
  const userRoutes = require('./routes/user');
  const hallRoutes = require('./routes/hall');
  var Cloudant = require('@cloudant/cloudant');
  const cors=require('cors');
  const checkAuth = require('./middleware/checkAuth');
   
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  
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

  app.use("/user", userRoutes);
  app.use("/hall",hallRoutes);
 // app.use('/FormData',userRoutes)

  
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