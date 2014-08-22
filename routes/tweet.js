var express = require('express');
var router = express.Router();
var tweetModel = require('../models/tweetModel');


router.get("/tweet", function(req,res){

  // Use the model to reference functions

  tweetModel.findOne(function(err, oneTweet){    //Find the first tweet with mongoDB findOne()
  res.send(oneTweet);
  });

});

module.exports = router;
