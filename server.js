/*
 * It is recommended that you set the NODE_ENV environment variable 
 * in your operating system prior to running your application. 
 * In a Windows environment, this can be done by executing the following 
 * command in your command prompt: 
 * > set NODE_ENV=development 
 * While in a Unix-based environment, you should simply use the following 
 * exportcommand: 
 * $ export NODE_ENV=development
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(9090);
module.exports = app;

console.log('server running at port 9090');