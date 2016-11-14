var express=require('express');
var logger=require('morgan');
var bodyParser=require('body-parser');
var path=require('path')

console.log('hello');

//App Requirements
var app=express();

app.get('/', function(req, res) {
    res.sendfile('homePage.html', { root: __dirname + "/views" } );
});

var port = normalizePort(process.env.PORT||3000);
app.set('port', port);

app.use(logger('dev'));

    
var server = require("http").createServer(app);

console.log('server Started')

//Body-Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

//Static Directories
app.use(express.static(path.join(__dirname, 'views')));

app.listen(3000);



//API Routing

var api=require('./api');
app.use('/api', api);

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