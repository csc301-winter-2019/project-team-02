var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var dumbJsonSchema = new Schema({
	type: String,
	coordinates: Array,
	gender: String,
	age: String,
	race: String,
	longhair: Boolean,
	longbeard: Boolean,
	extra: String,
	status: {type: String, default: "new"}
});

// Mongoose Model definition
var dumbJson = mongoose.model('dumbJstring', dumbJsonSchema, 'dumbpointscollection');

// this function gets ALL the points from the db
// returns the entire document without modifications
exports.get_points = function(callback) {
	dumbJson.find({}).exec(function(err, docs) {
		if (err) callback(err, null);
		callback(null, docs);
	});
}

// this function stores A user report into the db
exports.save_request = function(data, callback) {
	dumbJson.create(data, function(err, result) {
		if (err) callback(err, null);
		callback(null, result);
	});
}
