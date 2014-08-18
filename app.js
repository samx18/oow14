var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Configure

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
//mongoose.connect('mongodb://127.0.0.1/users');
mongoose.connect('mongodb://127.0.0.1/fifatweetminem1');
//var peopleSchema = new mongoose.Schema({ name: String});
mongoose.model('xyz', {name: String});
//var People = mongoose.model('people', peopleSchema);


// Use middletier


// Define routes
app.get("/", function(req,res){
  res.render("index");
});

app.get("/tweet", function(req,res){

  mongoose.model('xyz','tweets').findOne(function(err, people){    //create a modles'xyz' and pass in the collection name
     res.send(people)                                              //Find the first tweet with mongoDB findOne()
  });
});

// Start server

var port = process.env.PORT || 4000;

app.listen(port,function(){
  console.log('Server rocking on port '+port);
});
