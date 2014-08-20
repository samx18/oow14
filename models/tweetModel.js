// Setup a schema & a model
var mongoose = require('mongoose');
var tweetSchema = new mongoose.Schema({
  name: String
});

mongoose.connect('mongodb://127.0.0.1/fifatweetminem1');


var tweetModel = mongoose.model('xyz',tweetSchema, 'tweets');

// export this to be used in the routes
module.exports = tweetModel;
