// var expect  = require('chai').expect;
// var request = require('request');
// const dotenv = require('dotenv');
// const config = require('config');
// dotenv.config();
// const  UserController = require('../controllers/userControllers')

// describe("sign up",function(){
//   it('signup Test#1', function(done) {
//     const options = {
//         method:'POST',
//         url:process.env.baseURL + '/user/signup',
//         json:true,
//         body:{
//             'email': 'nancy.hassan1998@gmail.com' ,
//             'password':'aaa' ,
//             'name':'taya'
//           }

//       };
//     request(options, function( response, body) {
//        if(body)
//        {
//         expect(body.body.message).to.have.errmsgs;
//         done();
//         }
    
//     });
//    });


//   it('signup Test#2', function(done) {
//     this.timeout(10000);
//     const options = {
//         method:'POST',
//         url:process.env.baseURL + '/user/signup',
//         json:true,
//         body:{
//             'email': 'basanthassan019@gmail.com' ,
//             'password':'basanthassan' ,
//             'name':'basantHassan'
//           }

//       };
//     request(options, function( response, body) {
//        if(body)
//        {
        
//         expect(body.body.token);
//         done();
//         }
//     });
//  });
// });

// describe("login ",function(){
//   it('login Test#1', function(done) {
//     const options = {
//         method:'POST',
//         url:process.env.baseURL + '/user/login',
//         json:true,
//         body:{
//             'email': 'nancy.hassan1998@gmail.com',
//             'password':'nancyhassan' 
//           }

//       };
//     request(options, function( response, body) {
//        if(body)
//        {
//         expect(body.body.token);
//         done();
//         }
//     });
//    });


//   it('login Test#2', function(done) {
//     const options = {
//         method:'POST',
//         url: process.env.baseURL + '/user/login',
//         json:true,
//         body:{
//           'email': 'nancy.hassan1998@gmail.com',
//           'password':'7oda' 
//           }

//       };
//     request(options, function( response, body) {
//        if(body)
//        {
//         expect(body.body.message).to.have.errmsgs;
//         done();
//         }
//     });
//  });
// });

// describe("mail exists ",function(){
//     it('mail exists Test#1', function(done) {
//       const options = {
//           method:'GET',
//           url:process.env.baseURL + '/user/mailExist/basanthassan019@gmail.com'
  
//         };
//       request(options, function( response, body) {
//          if(body)
//          {
//             var reqBody =body.body.toString('utf8');
//             reqBody = JSON.parse(reqBody)
//              expect(reqBody.message).to.have.errmsgs;
//              done();
         
//           }
//       });
//      });
//      it('mail exists Test#2', function(done) {
//         const options = {
//             method:'GET',
//             url:process.env.baseURL + '/user/mailExist/hassan.taya@hotmail.com'
            
//           };
//         request(options, function( response, body) {
//            if(body)
//            {
//               var reqBody =body.body.toString('utf8');
//               reqBody = JSON.parse(reqBody)
//               expect(reqBody.message).to.equal("success");
//               done();
           
//             }
//         });
//        });
// });

  
// describe("forgetPassword",function(){
//     it('forgetPassword  Test#1', function(done) {
//       const options = {
//           method:'GET',
//           url:process.env.baseURL + '/user/forgetPassword/nancy.hassan1998@gmail.com'
//         };
//       request(options, function( response, body) {
//          if(body)
//          {
//              var reqBody =body.body.toString('utf8');
//              reqBody = JSON.parse(reqBody);
//             expect(reqBody.message).to.equal("send msg successfuly");
//             done();
         
//           }
//       });
//      });
    
// });




