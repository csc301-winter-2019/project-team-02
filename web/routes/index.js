var express = require('express');
var router = express.Router();
var Mockpoints = require('../models/mockpoints');
var Points = require('../models/points');

/* GET home page. */
router.get('/', function(req, res, next) {
	// for now just redirect to /map
	res.redirect('/map');
});

/* GET Map page. */
router.get('/map', function(req,res) {
	// load the map with mockdata
	Mockpoints.get_dumb_points(function(err, points){
		res.render('map', {
			lat : 43.665234,
			lng : -79.383370,
			points: points
		});
	});
});

module.exports = router;
