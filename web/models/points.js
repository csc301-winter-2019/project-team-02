var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
	type: String,
	coordinates: Array
});

// Mongoose Model definition
var Json = mongoose.model('Jstring', JsonSchema, 'pointscollection');
