var expect  = require('chai').expect;
var request = require('request');
const dotenv = require('dotenv');
const config = require('config');
dotenv.config();
const  UserController = require('../controllers/userControllers');

describe("user signup",function(){
it('user signup Test#1', function() {
    let body ={
        email: 'nancy.hassan1998@gmail.com' ,
        password:'nancyhassantaya' ,
        name:'nancy'
           
    }
    let result = UserController.validateSignUp(body)
    let msg;
    if(result.error!=  null){
           msg = 'Error happened in Test#1'
    }
    else{
           msg = 'Done'
    }
  
      expect(msg).to.equal('Done');
  
 });

 it('user signup Test#2', function() {
    let body ={
        email: 'nancy.hassan1998.com' ,
        password:'nancyhassantaya' ,
        name:'nancy'
    }
    let result = UserController.validateSignUp(body)
    let msg;
    if(result.error!=  null){
           msg = 'Error happened in Test#2'
    }
    else{
           msg = 'Done'
    }
  
      expect(msg).to.equal('Error happened in Test#2');
  
 });

});

