var test = require('../models/Test.js');
var mongoose = require('mongoose');

function existsTestName(name,testArray){

	for(test in testArray){
		if(test.name==name)
			return true;
	}

	return false;
}

module.exports = function storeTest(request,response)
{
	var examinerID = mongoose.Types.ObjectId(request.body.examinerID);
 	var name = request.body.name;
	var password = request.body.password;
	var questions = request.body.questions;
	var duration = request.body.duration;

	test.find({examinerID:examinerID},'name',function(err,tests){
		if(existsTestName(name,tests)){
			console.log('Test with same name already exists');
			response.json({'error':'Test with same name exists'});
		}
		var testData = new test({
			name:name,
			password:password,
			examinerID:examinerID,
			questions:questions,
			duration:duration
		});

		testData.save(function(err){
			if(err)
				response.json({'error':err});
			response.json({'success':200});
		});
	});
}