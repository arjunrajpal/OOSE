var examiner = require('../models/Examiner.js');

function signUp(request,reponse)
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

	examinerData.save(function(err){
		if(err)
			response.json({'error':err});
		response.statusCode(200);
	});
}

module.exports = signUp();