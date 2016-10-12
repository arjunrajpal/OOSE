
var Test=require('../models/Test.js')
var mongoose=require('mongoose')

//Requires testId in the Query
module.exports = function(req, res){

	var testId=mongoose.Types.ObjectId(req.query.testId);

	Test.findById(testId, 'examinee', function(err, test){

		if(err){
			console.log('Test ID:' + testId +':\n'+err);
			res.json({'error':err});
		}

		return res.json(test.examinee);
	})

}