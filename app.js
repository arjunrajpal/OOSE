var express=require('express');
var logger=require('morgan');
console.log('hello');

//App Requirements
var app=express();

var port = normalizePort(process.env.PORT||3000);
app.set('port', port);

app.use(logger('dev'));

var server = require("http").createServer(app);

console.log('server Started')

//Database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test');

// var Schema=mongoose.Schema;
// var db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function()
// {
// 	var kittySchema=new Schema({
// 		name:String
// 	});

// 	var Kitten=mongoose.model('Kitten',kittySchema);

// 	var silence=new Kitten({name:'arjun'});

// 	silence.save(function(err,silence){
// 		if(err)
// 			return console.error(err);

// 	});
// });

var Kitten = require('./models/Kitten.js')

var arjun=new Kitten({name:'Arjun'});
arjun.save(function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log("Saved Kitten");
        console.log(arjun);
    }
})

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