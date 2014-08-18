var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/fifatweetminem1');
mongoose.model('xyz', {name: String});


router.get("/tweet", function(req,res){

  mongoose.model('xyz','tweets').findOne(function(err, people){    //create a modles'xyz' and pass in the collection name
    res.send(people)                                              //Find the first tweet with mongoDB findOne()
  });

});

module.exports = router;
