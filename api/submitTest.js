
var Test=require('../models/Test.js');
var mongoose=require('mongoose');

//Requires the following at submission
//testId
//User: name, email, score
//Post Request

function existsEmail(email,examineeArray){
	for(var i=0; i<examineeArray.length; i++){

		if(examineeArray[i].email==email)
			return true;
	}
	return false;
}

module.exports = function(req, res){

	var testId=mongoose.Types.ObjectId(req.body.testId);

	Test.findById(testId, '_id examinee', function(err, test){

		if(err){
			console.log('Test ID:' + testId +':\n'+err);
			res.json({'error':err});
			return;
		}

		if(existsEmail(req.body.email, test.examinee)){
			res.json({'error':'Already attempted test'});
			return;
		}
		Test.findOneAndUpdate({_id:testId},{
			$push:{examinee:{name:req.body.name,email:req.body.email,score:req.body.score}}
		}, {new:true}, function(err, updatedTest){

			if(err || !updatedTest){
				res.json({"error":err});
				return;
			}

			return res.json(updatedTest);
		});
	})

};