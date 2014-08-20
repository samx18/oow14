var express = require('express');
var app = express();
var routes = require('./routes/index');
var tweet = require('./routes/tweet');


//Configure

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


// Use middletier

// Use Routes

app.use('/', routes);
app.get('/tweet', tweet);


// Start server

var port = process.env.PORT || 4000;

app.listen(port,function(){
  console.log('Server rocking on '+port+' All magic happens there');
});
