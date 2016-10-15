
var Test=require('../models/Test.js')
var mongoose=require('mongoose')

//Requires examinerId in the Query
module.exports = function(req, res){

	var examinerID=mongoose.Types.ObjectId(req.query.examinerID);

	Test.find({examinerID: examinerID}, '_id name', function(err, tests){

		if(err){
			console.log('User ID:' +examinerID+':\n'+err);
			res.json({'error':err});
		}

		return res.json(tests);
	})

}