var examiner = require('../models/examiner');

function login(request,response)
{
	var email = request.body.email;
	var password = request.bo.password;

	var examiner = examiner;
	examiner.find({'email':email},function(err,e){
		var isMatch=e.checkPassword(password,done);
		if(isMatch)
			return e;
	});

}

module.exports=login();