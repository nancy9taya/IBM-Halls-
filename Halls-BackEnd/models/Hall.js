const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const hallSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  shape:{
    type: String  //circular or fixed 
  },
  rows:{
    type: Number
  },
  columns:{
    type: Number
  },
  firstColumn:{
    type: Number
  },
 increasedColumn:{
    type: Number
 },
 chairLength:{
    type: Number
 },
 chairWidth:{
    type: Number

 },
 benchesWidth:{
    type: Number
 },
 columnsThenGap:{
    type: Number
 },
 gapwidth:{
    type: Number
 },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
 },
});

module.exports= mongoose.model('Hall', hallSchema);


 
