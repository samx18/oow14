var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ftweet = require('../models/ftweet');


router.get("/tweet", function(req,res){

  ftweet.findOne(function(err, oneTweet){    //Find the first tweet with mongoDB findOne()
  res.send(oneTweet);
  });

});

module.exports = router;
