var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
	type: String,
	coordinates: Array,
	gender: String,
	age: String,
	race: String,
	longhair: Boolean,
	longbeard: Boolean,
	extra: String,
	status: String
});

// Mongoose Model definition
var Json = mongoose.model('Jstring', JsonSchema, 'pointscollection');

// this function gets ALL the points from the db
// returns the entire document without modifications
exports.get_points = function(callback) {
	Json.find({}).exec(function(err, docs) {
		if (err) callback(err, null);
		callback(null, docs);
	});
}

exports.get_all_active_points = function(callback) {
	var activeStatusTypes = ["new", "pending"];
	Json.find({ status: { $in: activeStatusTypes } }).exec(function(err, docs) {
		if (err) callback(err, null);
		callback(null, docs);
	});
}

// this function stores A user report into the db
exports.save_request = function(data, callback) {
	Json.create(data, function(err, result) {
		if (err) callback(err, null);
		callback(null, result);
	});
}

exports.update_point_status = function(id, newStatus, callback) {
	Json.findByIdAndUpdate(id, {status: newStatus}, {new: true},
		function(err, result) {
			if (err) callback(err, null);
			// result contains the updated point document
			callback(null, result);
		}
	);
}
