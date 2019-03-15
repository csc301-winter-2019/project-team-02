var express = require('express');
var router = express.Router();
var Mockpoints = require('../models/mockpoints');
var Points = require('../models/points');
const connections = [];
/* GET home page. */
router.get('/', function(req, res, next) {
	// for now just redirect to /map
	res.redirect('/map');
});

/* GET Map page. */
router.get('/map', function(req,res) {
	// load the map with all the points
	// Mockpoints.get_points(function(err, points){
	Points.get_points(function(err, points){
		res.render('map', {
			lat : 43.665234,
			lng : -79.383370,
			points: points
		});
	});
});

router.post('/mobilerequest', function(req, res) {
    console.log(req.body);
	var data = req.body;
	Points.save_request(data, function(err, result) {
		if (err) {
			console.log(`err inserting mobile request into db: ${err}`);
			res.status(500).send({ error: "boo:(" });
		} else {
			// send event to all connections
			for(var i = 0; i < connections.length; i++) {
				connections[i].sseSend(data);
			}
			console.log(result);
			res.status(200).send({'status': 'success', 'data': data});
		}
	});

});


router.get('/stream', function(req, res){
	// set up server side event (communication line between front end and server)
	res.sseSetup();
	// send an event to the front end to open the connection
	res.sseSend('ok');
	// push connection to connection array
	connections.push(res);
});
module.exports = router;
