// different basemap
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
let currPoint;

const Races = {
	"White"     : "European or White",
	"eAsian"    : "East Asian",
	"sAsian"    : "South Asian",
	"Black"     : "Black or African American",
	"Aboriginal": "Aboriginal",
	"Other"     : "Other",
};

const PendingIcon = new L.Icon({
	iconAnchor: [ 12, 41 ],
	iconUrl: "../assets/orange-icon.png",
	iconSize: [ 25, 41 ],
	popupAnchor: [ 1, -34 ],
	shadowSize: [ 41, 41 ],
	tooltipAnchor: [ 16, -28 ]
});

function plotPointsOnMap(points) {
	L.geoJson(points, {
		pointToLayer: function (feature, latlng) {
			//return L.circleMarker(latlng);
			latlngbounds.extend(latlng);
			if (feature.status === "pending") {
				return L.marker(latlng, {icon: PendingIcon});
			}
			return L.marker(latlng);
		}
	}).on('click', showDetails).addTo(map);

	// rezoom the map so that all the markers fit in the view, add 20% padding so
	// that marker dont cut off
	console.log(latlngbounds)
	map.fitBounds(latlngbounds.pad(0.20));
}

// show details about point
// e is the event info
function showDetails(e) {
	if(currPoint !== undefined) {
		if (currPoint.feature.geometry.status === "new") {
			currPoint._icon.src = '../assets/blue-icon.png';
		}
		else if (currPoint.feature.geometry.status === "pending") {
			currPoint._icon.src = '../assets/orange-icon.png';
		}
	}

	// layer.feature.geometry gives you access to all the fields
	let layer = e.layer;
	currPoint = layer;
	
	if (currPoint.feature.geometry.status === "new") {
		currPoint._icon.src = '../assets/blue-icon-focused.png';
	}
	else if (currPoint.feature.geometry.status === "pending") {
		currPoint._icon.src = '../assets/orange-icon-focused.png';
	}

	const pointBounds = [currPoint.getLatLng()];
	map.fitBounds(pointBounds);

	let sideBar = document.getElementById('sidebar');

	if (getComputedStyle(sideBar).visibility === 'hidden') {
		sideBar.style.visibility = 'visible';
	}

	// remove the previous report text
	let report = document.getElementById('report');
	let prevUserInputs = report.getElementsByClassName('user-input');
	for (let i=0; i < prevUserInputs.length; i++) {
		prevUserInputs[i].innerHTML = "";
	}

	// put gender of the person
	let genderTextSpan = document.getElementById('report-gender');
	genderTextSpan.className = 'user-input';
	let genderText = document.createTextNode(layer.feature.geometry['gender']);
	genderTextSpan.appendChild(genderText);

	// put age range of person
	let ageRangeTextSpan = document.getElementById('report-age-range');
	ageRangeTextSpan.className = 'user-input';
	let ageRangeText = document.createTextNode(
		" ~ " + layer.feature.geometry['age'] + " years");
	ageRangeTextSpan.appendChild(ageRangeText);

	// put race of person
	let raceTextSpan = document.getElementById('report-race');
	raceTextSpan.className = 'user-input';
	let raceText = document.createTextNode(
		Races[layer.feature.geometry['race']]
	);
	raceTextSpan.appendChild(raceText);

	// put other attributes
	let otherAttrTextSpan = document.getElementById('report-other');
	otherAttrTextSpan.className = 'user-input';
	otherAttrTextSpan.innerHTML =
		"Long hair? " + (layer.feature.geometry['longhair'] ? "Yes" : "No") +
		"<br>" +
		"Long beard? " + (layer.feature.geometry['longbeard'] ? "Yes" : "No");

	// put extra info
	let extraTextSpan = document.getElementById('report-distinctive');
	extraTextSpan.className = 'user-input';
	let extraText = document.createTextNode(layer.feature.geometry['extra']);
	extraTextSpan.appendChild(extraText);

	let pendingBtn = document.getElementById('pending-btn');
	pendingBtn.addEventListener('click', markAsPending);

	let completedBtn = document.getElementById('completed-btn');
	completedBtn.addEventListener('click', markAsCompleted);

	let closeBtn = document.getElementById('close-btn');
	closeBtn.addEventListener('click', closeDetails);
}

function markAsPending(e) {
	let currPointDetails = currPoint.feature.geometry;
	let currPointId = currPointDetails._id;
	if (currPointDetails.status === "pending") return;

	currPoint._icon.src = '../assets/orange-icon-focused.png';
	currPointDetails.status = "pending";

	updatePointStatusInDb(currPointId, "pending")
		.then(function(responseJson) {
			alert("Your change has been saved.");
			currPoint._icon.src = '../assets/orange-icon-focused.png';
		})
		.catch(function(error) {
			alert(error);
		});
}

function markAsCompleted(e) {
	let currPointDetails = currPoint.feature.geometry;
	let currPointId = currPointDetails._id;
	if (currPointDetails.status === "complete") return;

	updatePointStatusInDb(currPointId, "complete")
		.then(function(responseJson) {
			alert("Your change has been saved.");
			map.removeLayer(currPoint);
			currPoint = undefined;
		})
		.catch(function(error) {
			alert(error);
		});
	closeDetails();
}

function closeDetails(e) {
	let details = document.getElementById('sidebar')
	details.style.visibility = 'hidden';

	if (currPoint.feature.geometry.status === "pending") {
		currPoint._icon.src = '../assets/orange-icon.png';
	}
	else if (currPoint.feature.geometry.status === "new") {
		currPoint._icon.src = '../assets/blue-icon.png';
	}
}

// returns a Promise object
function updatePointStatusInDb(pointId, pointStatus) {
	return fetch('/savestatus/' + pointStatus, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({id: pointId}),
	})
	.then(function(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error("We were unable to save your changes.");
	});
}

// different basemap
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

// keep track of the boundary of the markers so that we can update the
// map to fit them all
var latlngbounds = new L.latLngBounds();

plotPointsOnMap(points);
if (window.EventSource) {
	var source = new EventSource('/stream');

	source.addEventListener('message', function(e) {
		var data = JSON.parse(e.data);
		if (data.coordinates) {
			points.push(data);
			plotPointsOnMap(data);
		}
	}, false)

	source.addEventListener('open', function(e) {
	  console.log("Connection was opened")
	}, false)

	source.addEventListener('error', function(e) {
	  if (e.readyState == EventSource.CLOSED) {
		console.log("Connection was closed")
	  }
	}, false)
} else {
	console.log("sse not supported.");
}
