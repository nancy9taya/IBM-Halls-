var expect  = require('chai').expect;
var request = require('request');
const dotenv = require('dotenv');
const config = require('config');
dotenv.config();
const  HallController = require('../controllers/hallControllers');

describe("halls data",function(){
    it('halls data Test#1', function() {
        let body ={
                rows:3,
                columns:5,
                chairLength:100,
                chairWidth:100,
                isBench:2,
                benchesWidth:0,
                isGap:1,
                noGaps:1,
                columnsThenGap:[2,3],
                gapwidth:100    
        }
        let result = HallController.validateHallData(body)
        let msg;
        if(result.error!=  null){
               msg = 'Error happened in Test#1'
        }
        else{
               msg = 'Done'
        }
      
          expect(msg).to.equal('Done');
    });

    it('halls data Test#2', function() {
        let body ={
            rows:'',
            columns:5,
            chairLength:100,
            chairWidth:100,
            isBench:2,
            benchesWidth:0,
            isGap:1,
            noGaps:1,
            columnsThenGap:[2,3],
            gapwidth:100    
    }
        let result = HallController.validateHallData(body)
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