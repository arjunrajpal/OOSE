var examiner = require('../models/examiner');

function login(request,response)
{
	var email = request.body.email;
	var password = request.body.password;

	var examiner = examiner;
	examiner.find({'email':email},function(err,e){
		var isMatch=e.checkPassword(password,done);
		if(isMatch)
			return response.json(e);
	});

}

module.exports = login();