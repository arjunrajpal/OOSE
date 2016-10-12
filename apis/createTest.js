var test = require('../models/test');

function storeTest(request,response)
{
	var examinerID = request.query.examinerID;
 	var name = request.query.name;
	var password = request.query.password;
	var questions = request.questions;
	var duration = request.query.duration;

	var testData = new test({
		name:name,
		password:password,
		examinerID:examinerID,
		questions:questions,
		duration:duration
	});

	testData.save(function(err)
	{
		if(err)
			return handleError(err);
	});
}

module.exports = storeTest();