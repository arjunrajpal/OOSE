var express = require('express')

var api=express.Router();

var viewTest=require('./viewTest.js');
var viewQuestions=require('./viewQuestions.js');
var viewReport=require('./viewReport.js');

api.get('/viewTest', function(req, res){
	viewTest(req, res);
});

api.get('/viewQuestions', function(req, res){
	viewQuestions(req, res);
});

api.get('/viewReport', function(req, res){
	viewReport(req, res);
});