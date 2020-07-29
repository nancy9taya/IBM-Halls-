var expect  = require('chai').expect;
var request = require('request');
const dotenv = require('dotenv');
const config = require('config');
dotenv.config();
const  HallController = require('../controllers/hallControllers');

describe("send Data",function(){
    it('send Data Test#1', function(done) {

      const options = {
          method:'POST',
          url:process.env.baseURL + '/hall/sendData',
          headers: {
            'Authorization': process.env.token
          },
          json:true,
          body:{
                "rows":3,
                "columns":5,
                "chairLength":100,
                "chairWidth":100,
                "isBench":2,
                "benchesWidth":0,
                "isGap":1,
                "noGaps":1,
                "columnsThenGap":[2,3],
                "gapwidth":100
            }
  
        };
      request(options, function( response, body) {
         if(body)
         {
   
           expect(body.body.Array).to.be.a('Array');
           expect(body.body.Array).to.deep.equal([
            [
              0, 0, 0, 0,
              0, 0, 0, 0
            ],
            [
              0,    true, 0, 0,
              true, 0,    0, 0
            ],
            [
              0, 0, 0, 0,
              0, 0, 0, 0
            ],
            [
              0,    true, 0, 0,
              true, 0,    0, 0
            ]
          ]);
          done();
          }
      
      });
     });

});

