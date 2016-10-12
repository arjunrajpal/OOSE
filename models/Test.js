var examiner = require('./examiner.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
	name:String,
	password:String,
	examinerID:examiner.id,
	questions:[{qString:String,option1:String,option2:String,option3:String,option4:String,correct:String}],
	examinee:[{name:String,email:String,score:Number}]
});

var test = mongoose.model('test',testSchema);

module.exports = test;
