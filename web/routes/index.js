var express = require('express');
var router = express.Router();
var Mockpoints = require('../models/mockpoints');
var Points = require('../models/points');
var fs = require("fs");
var GeoJsonGeometriesLookup = require('geojson-geometries-lookup');
var torontoNeighbourhoords = JSON.parse(fs.readFileSync(__dirname + '/../data/Neighbourhoods.geojson', "utf8"));

const connections = [];
const glookup = new GeoJsonGeometriesLookup(torontoNeighbourhoords);

/* GET home page. */
router.get('/', function(req, res, next) {
	// for now just redirect to /map
	res.redirect('/map');
});

/* GET Map page. */
router.get('/map', function(req,res) {
	Points.get_all_active_points(function(err, points){
		res.render('map', {
			lat : 43.665234,
			lng : -79.383370,
			points: points
		});
	});
});

router.post('/mobilerequest', function(req, res) {
	var point = req.body;

	if (!point.coordinates.length) {
		var errMssg = "Coordinates field must not be empty in a request.";
		return res.status(422).send({ error: errMssg });
	}

	if (!glookup.hasContainers(point)) {
		var errMssg = "Sorry, we currently only support locations strictly within the City of Toronto.";
		return res.status(422).send({ error: errMssg });
	}

	// here we are guaranteed to have a valid point in Toronto
	Points.save_request(point, function(err, result) {
		if (err) {
			console.log(`err inserting mobile request into db: ${err}`);
			res.status(500).send({ error: "Sorry, something failed on our end." });
		} else {
			// send event to all connections
			for(var i = 0; i < connections.length; i++) {
				connections[i].sseSend(result);
			}
			console.log(result);
			res.status(201).send({'status': 'success'});
		}
	});
});

router.post('/savestatus/:status', function(req, res) {
	var data = req.body;
	var pointId = data.id;
	var setStatus = req.params.status;
	if (
			setStatus !== "new" &&
			setStatus !== "pending" &&
			setStatus !== "complete"
	) {
		console.log("Invalid status supplied.");
		return res.status(422).send({error: "Error: Status must be one of 'new', 'pending', or 'complete'"});
	}

	// here we are guaranteed to be able to do the query
	Points.update_point_status(pointId, setStatus, function(err, result) {
		if (err) {
			console.log(`err updating point status in db: ${err}`);
			res.status(500).send({ error: "Oops. Something went wrong on our end." });
		} else {
			console.log(result);
			res.status(200).send({'status': 'success'});
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
