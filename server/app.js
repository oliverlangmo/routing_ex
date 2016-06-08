var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
// don't use extended as
var urlencodedParser = bodyParser.urlencoded( { extended:false } );

var server = app.listen(8080, 'localhost', function(){
  console.log('server on 8080 is listening');
});

app.get('/', function(req, res){
  console.log("hello from /");
res.writeHead(200);
console.log("we are in / url");
res.write('hello from base url');
res.end();
});
app.get('/funny', function(req, res){
console.log("hello from funny");
res.write('hello from funny');
res.end();
});
app.get('/getForm', function(req, res){
  console.log('test.html');
  res.write('response from:'+ req.query.getWonky);
  res.end();
});
// urlencodedParser "dependency injection" is needed for POST
app.post( '/postForm', urlencodedParser, function( req, res){
  // receives a POST request from the form on getTest.html
  res.write( 'post request received: ' + req.body.dogNameIn );
  res.end();
});
app.get( '/getthisTest', function( req, res){
  res.sendFile( path.resolve('views/getTest.html') );
});
app.use(express.static('public'));
