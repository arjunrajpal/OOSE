var examiner = require('../models/examiner');

function signUp(request,reponse)
{
	var name = request.query.name;
	var password = request.query.password;
	var email = request.query.email;
	var phoneNo = request.query.phoneNo;
	var institution = request.query.institution;

	var examinerData = new examiner({
		name:name,
		password:password,
		email:email,
		phoneNo:phoneNo,
		institution:institution
	});

	examinerData.save(function(err){
		if(err)
			return handleError(err);
	});
}

module.exports = signUp();