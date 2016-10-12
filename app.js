var express=require('express');
var logger=require('morgan');
var bodyParser=require('body-parser');

console.log('hello');

//App Requirements
var app=express();

var port = normalizePort(process.env.PORT||3000);
app.set('port', port);

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended:false});
    
var server = require("http").createServer(app);

console.log('server Started')

//Database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

//API Routing

var api=require('./api')
app.use('/api', api)

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}