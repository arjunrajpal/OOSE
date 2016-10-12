var express = require('express');

var api=express.Router();

var login=require('./login.js');
var signUp=require('./signUp.js');
var createTest=require('./createTest.js');
var viewDetails=require('./viewDetails.js');
var viewTest=require('./viewTest.js');
var viewQuestions=require('./viewQuestions.js');
var viewReport=require('./viewReport.js');
var submitTest=require('./submitTest.js');

api.post('/login',function(req,res){
	login(req,res);
});

api.post('/signUp',function(req,res){
	signUp(req,res);
});

api.post('/createTest',function(req,res){
	createTest(req,res);
});

api.get('/viewDetails',function(req,res){
	viewDetails(req,res);
});

api.get('/viewTest', function(req, res){
	viewTest(req, res);
});

api.get('/viewQuestions', function(req, res){
	viewQuestions(req, res);
});

api.get('/viewReport', function(req, res){
	viewReport(req, res);
});

api.post('/submitTest', function(req. res){
	submitTest(req, res);
})
