var express = require('express');
var router = express.Router();
// Mongoose import
var mongoose = require('mongoose');
// Mongoose Schema definition
var Schema = mongoose.Schema;

var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed,
    coordinates: Array,
    ageRange: String,
    clothingDescription: String,
    isInjured: Boolean,
    reasonForHelp: String
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

router.post('/mobilerequest', function(req, res) {
    var data = {
        'coordinates': req.body.coordinates,
        'type': req.body.type,
        'isInjured': req.body.isInjured,
        'reasonForHelp': req.body.reasonForHelp,
        'ageRange': req.body.ageRange,
        'clothingDescription': req.body.clothingDescription
    }
    Json.create(data, function(err, result) {
        if (err) {
            console.log(`err inserting mobile request into db: ${err}`);
            res.status(500).send({ error: "boo:(" });
        } else {
            console.log(result);
            res.status(200).send({'status': 'success', 'data': data});
        }
    });    
});

module.exports = router;
