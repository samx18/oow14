// Setup a schema & a model
var mongoose = require('mongoose');
var mentionSchema = new mongoose.Schema({
  count: Number
});

var mentionModel = mongoose.model('mention',mentionSchema, 'tweets');

// export this to be used in the routes
module.exports = mentionModel;
