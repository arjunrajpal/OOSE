var examiner = require('./examiner');

function login(request,response))
{
	var email = request.query.email;
	var password = request.query.password;

	var examiner = examiner;
	examiner.find({'email':email},function(err,e){
		var isMatch=e.checkPassword(password,done);
		if(isMatch)
			return e;
	});

}

exports.module=login();