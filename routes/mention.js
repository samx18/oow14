var express = require('express');
var router = express.Router();
var mentionModel = require('../models/mentionModel');
var brasil=0,brazil=0;


router.get("/mention", function(req,res){

  mentionModel.count({'text': /Brasil/ }, function(err,count) {    //Get count of mentions
    console.log('Number of mentions of Brasil is: '+count);
    brasil = count;
    //res.send('The number of mentions is: '+count);
  });

  mentionModel.count({'text': /Brazil/ }, function(err,count) {    //Get count of mentions
    console.log('Number of mentions of Brazil is: '+count);
    brazil = count;
    //res.send('The number of mentions is: '+count);
  });
    res.send('The number of mentions of Brasil is: '+brasil);


});

module.exports = router;
