
var mongoose = require('mongoose');
var Schema = require("mongoose/lib/schema.js");
var examiner = require('./Examiner.js');
var bcrypt = require('bcrypt-nodejs');

// SALT Factor for hashing passwords
var SALT_FACTOR = 10;
//Schema
var testSchema = mongoose.Schema({
	name:String,
	examinerId:{type:Schema.Types.ObjectId, ref:'examiner', required:true},
	questions:[{qString:String,option1:String,option2:String,option3:String,option4:String,correct:String}],
	password:{type:String, required:true},
	//questions:[{qString:String,option1:String,option2:String,option3:String,option4:String,correct:Number}],
	examinee:[{name:String,email:String,score:Number}],
	duration:Number
});


// No Operation Function to use with bcrypt
var noop = function () {
};

// Hash the password before saving
testSchema.pre("save", function (done) {
	var test = this;
	if (!test.isModified("password")) {
		return done();
	}
	bcrypt.genSalt(SALT_FACTOR, function (error, salt) {
		if (error) {
			return done(error);
		}
		bcrypt.hash(test.password, salt, noop, function (error, hashedPassword) {
			if (error) {
				return done(error);
			}
			test.password = hashedPassword;
			done();
		});
	});
});

testSchema.methods.checkPassword = function (guess, done) {
	bcrypt.compare(guess, this.password, function (error, isMatch) {
		done(error, isMatch);
	});
};
//Test Model
var test = mongoose.model('test',testSchema);

//Exports
module.exports = test;