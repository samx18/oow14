// Setup a schema & a model
var mongoose = require('mongoose');
var tweetSchema = new mongoose.Schema({
  name: String
});

var tweetModel = mongoose.model('xyz',tweetSchema, 'tweets');

// export this to be used in the routes
module.exports = tweetModel;
