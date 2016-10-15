
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

// SALT Factor for hashing passwords
var SALT_FACTOR = 10;

// Create a examiner Schema
var examinerSchema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    phoneNo: {type: String, required: true, unique: true},
    email: {type:String, required:true, unique:true},
    institution:{type:String}
});

// No Operation Function to use with bcrypt
var noop = function () {
};

// Hash the password before saving
examinerSchema.pre("save", function (done) {
    var examiner = this;
    if (!examiner.isModified("password")) {
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, function (error, salt) {
        if (error) {
            return done(error);
        }
        bcrypt.hash(examiner.password, salt, noop, function (error, hashedPassword) {
            if (error) {
                return done(error);
            }
            examiner.password = hashedPassword;
            done();
        });
    });
});

examinerSchema.methods.checkPassword = function (guess, done) {
    bcrypt.compare(guess, this.password, function (error, isMatch) {
        done(error, isMatch);
    });
};

var examiner = mongoose.model("examiner", examinerSchema);
module.exports = examiner;