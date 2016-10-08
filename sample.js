var express=require('express');
console.log('hello');
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function()
{
	var kittySchema=new Schema({
		name:String
	});

	var Kitten=mongoose.model('Kitten',kittySchema);

	var silence=new Kitten({name:'arjun'});

	silence.save(function(err,silence){
		if(err)
			return console.error(err);

	});
});