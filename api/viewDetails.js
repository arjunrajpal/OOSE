var examiner = require('../models/Examiner.js');
var mongoose = require('mongoose');

function viewDetails(request,response)
{
	var examinerId = mongoose.Types.ObjectId(request.query.examinerId);

	examiner.findById(examinerId,function(err,examinerDetails){
		if(err){
			console.log('Examiner ID:' +examinerId+':\n'+err);
			response.json({'err':err});
		}
		response.json(examinerDetails);
	});
}

module.exports = viewDetails();