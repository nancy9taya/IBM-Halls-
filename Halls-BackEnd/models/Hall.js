const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const hallSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  rows:{
    type: Number
  },
  columns:{
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
 noGaps:{
   type: Number 
 },
 columnsThenGap:{
    type: Array
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
 distibution:{
   type: Array
 }
});

module.exports= mongoose.model('Hall', hallSchema);


 
