var express = require('express');
var app = express();

//Configure

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Use middletier


// Define routes
app.get("/", function(req,res){
  res.render("index");
});

// Start server

var port = process.env.PORT || 4000;

app.listen(port,function(){
  console.log('Server rocking on port '+port);
});
