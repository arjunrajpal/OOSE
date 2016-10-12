var mongoose=require('mongoose')
var Test=require('../models/Test.js')

//Request Body Will Contain:
//testId,testPassword, examineeEmail

function existsEmail(examineeEmail, examineeArray){

	for (examinee in examineeArray){
		if(examinee.email==examineeEmail)
			return false;
	}
	return true;
}

module.exports = function(req, res){

	var testId = mongoose.Types.ObjectId(req.body.testId);

	Test.findById(testId, function(err, test){
		if(err||!test){
			console.log('Could Not find the registered Test')
			res.json({'error':'The Specified Test does not exist'})
		}
		//Now the test Exists
		test.checkPassword(req.body.testPassword, function(err, isMatch){
			if(err|| !isMatch){
				console.log('Password not a match');
				res.json({'error':'The Password is incorrect'});
			}
			//Now Passord has matched

			//Check for already existent User
			else if(!existsEmail(req.body.examineeEmail, test.examinee)){
				console.log('User already registered');
				res.json({'error':'User already Registered'});
			}
			//Ready to Login
			res.json({'success'});
		})
	})
};