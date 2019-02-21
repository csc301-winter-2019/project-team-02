var express = require('express');
var router = express.Router();

// Mongoose import
var mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var uri;
if (env === 'development') {
    uri = 'mongodb://localhost:27017/helpthehome'
    // use for small testing only if really necessary
    // uri = 'mongodb+srv://development:dreamteam@cluster0-krnr4.mongodb.net/helpthehome?retryWrites=true'
} else if (env === 'qa') {
    uri = process.env.MONGODB_URI
} else if (env === 'production') {
    uri = ''
}

// Mongoose connection to MongoDB
mongoose.connect(uri, { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error);
        console.log("App was not able to connect to the mongo server!");
        console.log("... double check that the mongo server is running locally");
    } else {
	console.log(`connected to ${uri}`);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed,
    coordinates: Array
});

// Mongoose Model definition
var Json = mongoose.model('Jstring', JsonSchema, 'pointscollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  // for now just redirect to /map
  //res.render('index', { title: 'Welcome' });
  res.redirect('/map');
});

/* GET Map page. */
router.get('/map', function(req,res) {
    // we can use the database to fetch a point, SELECT coordinates
    Json.findOne({name: "points"}, 'coordinates', function(e,point){
	if (e) return e;
	// send the view lat, and long.
        res.render('map', {
            lat : point.coordinates[1],
            lng : point.coordinates[0]
        });
    });
});

module.exports = router;
