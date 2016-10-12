var examiner = require('../models/Examiner.js');

function login(request,response)
{
	var email = request.body.email;
	var password = request.body.password;

	var examiner = examiner;
	examiner.find({'email':email},function(err,e){
		if(err||!e){
			console.log('User with this email id does not exists');
			res.json({'error':'The Specified Email id does not exists'});
		}
		e.checkPassword(password,function(err,isMatch){
			if(err||!isMatch){
				console.log('Password not a match');
				res.json({'error':'The Password is incorrect'});
			}
		response.json(e);
	});

}

module.exports = login();