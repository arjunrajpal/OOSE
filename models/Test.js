
var mongoose = require('mongoose');
var Schema = require("mongoose/lib/schema.js");
var examiner = require('./Examiner.js');

//Schema
var testSchema = mongoose.Schema({
	name:String,
	password:String,
	examinerID:{type:Schema.Types.ObjectId, ref:'examiner', required:true},
	questions:[{qString:String,option1:String,option2:String,option3:String,option4:String,correct:String}],
	password:{type:String, required:true},
	questions:[{qString:String,option1:String,option2:String,option3:String,option4:String,correct:Number}],
	examinee:[{name:String,email:String,score:Number}]
});

//Test Model
var test = mongoose.model('test',testSchema);

//Exports
module.exports = test;