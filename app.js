var express = require('express');
var app = express();
var mongoose = require ('mongoose');
var routes = require('./routes/index');
var tweet = require('./routes/tweet');
var mention = require('./routes/mention');


//Configure Section

//Connect to the mongodb database

mongoose.connect('mongodb://127.0.0.1/fifatweetminem1');

// Set the dir for views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


// Middletier Section

// Routes Section

app.use('/', routes);
app.get('/tweet', tweet);
app.get('/mention', mention);


// Start server

var port = process.env.PORT || 4000;

app.listen(port,function(){
  console.log('Server rocking on port '+port+' All the magic happens there');
});
