var express = require('express');
var router = express.Router();

// Mongoose import
var mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var uri;
if (env === 'development') {
    uri = 'mongodb://localhost:27017/helpthehome'
} else if (env === 'qa') {
    uri = process.env.MONGODB_URI
} else if (env === 'production') {
    uri = ''
}

// Mongoose connection to MongoDB
mongoose.connect(uri, { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error);
    } else {
	console.log("Connected to mongo!");
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

// Mongoose Model definition
var Json = mongoose.model('JString', JsonSchema, 'pointcollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  // for now just redirect to /map
  //res.render('index', { title: 'Welcome' });
  res.redirect('/map');
});

/* GET Map page. */
router.get('/map', function(req,res) {
    // we can use the database to fetch some data, for now just hardcode
    Json.find({},{}, function(e,docs){
        res.render('map', {
            lat : 43.6529,
            lng : -79.3849
        });
    });
});

module.exports = router;
