var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var dumbJsonSchema = new Schema({
	type: String,
	coordinates: Array
});

// Mongoose Model definition
var dumbJson = mongoose.model('dumbJstring', dumbJsonSchema, 'dumbpointscollection');

exports.get_dumb_points = function(callback) {
	dumbJson.find({}).exec(function(err, docs){
		callback(err, docs)
	});
}
