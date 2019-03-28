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
	Points.get_all_active_points(function(err, points){
		res.render('map', {
			lat : 43.665234,
			lng : -79.383370,
			points: points
		});
	});
});

router.post('/mobilerequest', function(req, res) {
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
