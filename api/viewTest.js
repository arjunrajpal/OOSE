
var Test=require('../models/Test.js')
var mongoose=require('mongoose')

//Requires examinerId in the Query
module.exports = function(req, res){

	var examinerId=mongoose.Types.ObjectId(req.query.examinerId);

	Test.find({examinerId: examinerId}, function(err, tests){

		if(err){
			console.log('User ID:' +examinerId+':\n'+err);
			res.json({'error':err});
			return;
		}

		return res.json(tests);
	})

};