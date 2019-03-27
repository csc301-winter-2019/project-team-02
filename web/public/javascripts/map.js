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

function plotPointsOnMap(points) {
	L.geoJson(points, {
		pointToLayer: function (feature, latlng) {
			//return L.circleMarker(latlng);
			latlngbounds.extend(latlng);
			return L.marker(latlng);
		}
	}).on('click', showDetails).addTo(map);

	// rezoom the map so that all the markers fit in the view, add 20% padding so
	// that marker dont cut off
	map.fitBounds(latlngbounds.pad(0.20));
}

// show details about point
// e is the event info
function showDetails(e) {
	// layer.feature.geometry gives you access to all the fields
	let layer = e.layer;
	currPoint = layer;
	
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
	currPoint._icon.src = '../assets/orange-icon.png';
}

function markAsCompleted(e) {
	map.removeLayer(currPoint);
}

function closeDetails(e) {
	let details = document.getElementById('sidebar')
	details.style.visibility = 'hidden';
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
			plotPointsOnMap(points);
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
