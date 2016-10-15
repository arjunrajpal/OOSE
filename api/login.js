var examiner = require('../models/Examiner.js');

module.exports = function(request,response)
{
	var email = request.body.email;
	var password = request.body.password;

	examiner.findOne({'email':email},function(err,user){
		if(err||!user){
			console.log('User with this email id does not exists');
			response.json({'error':'The Specified Email id does not exists'});
			return;
		}
		user.checkPassword(password,function(err,isMatch){
			if(err||!isMatch){
				console.log('Password not a match');
				response.json({'error':'The Password is incorrect'});
				return;
			}
			response.json(user);
		});
	});
}