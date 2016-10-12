var test = require('../models/test');

function storeTest(request,response)
{
	var examinerID = request.body.examinerID;
 	var name = request.body.name;
	var password = request.body.password;
	var questions = request.body.questions;
	var duration = request.body.duration;

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
		response.statusCode(200);
	});
}

module.exports = storeTest();