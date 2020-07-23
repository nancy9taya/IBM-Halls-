const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    minlength: 5,
    maxlength: 128,
    unique: true
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
//  birthDate:{
//     type: Date,
//     required: true
//   },
//   gender:{
//     type: Boolean,
//     required: true
//   },
  active:{
    type: Boolean,
    default: false
  },
  facebook:{
     token:{
      type: String,
      default: null
     },
     id:{
      type: String
     }

  },
  loggedByFb:{
    type: Boolean,
    default: false
  }
});

module.exports= mongoose.model('User', userSchema);


 
