var examiner = require('../models/Examiner.js');

module.exports = function signUp(request,response)
{
	var name = request.body.name;
	var password = request.body.password;
	var email = request.body.email;
	var phoneNo = request.body.phoneNo;
	var institution = request.body.institution;

	var examinerData = new examiner({
		name:name,
		password:password,
		email:email,
		phoneNo:phoneNo,
		institution:institution
	});

	examinerData.save(function(err, user){
		if(err) {
			response.json({'error': err});
			return;
		}
		response.json(user);
		return;
	});
}