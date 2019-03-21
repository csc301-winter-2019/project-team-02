// different basemap
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
let currPoint

let orangeIcon = L.icon({
	iconUrl: '../assets/orange-icon.png',
	iconSize: [25, 41],
    iconAnchor: [12, 41]
})


function plotPointsOnMap(points) {
	L.geoJson(points, {
		pointToLayer: function (feature, latlng) {
			//return L.circleMarker(latlng);
			latlngbounds.extend(latlng);
			return L.marker(latlng);
		}
	}).on('click', showDetails).addTo(map)

	// rezoom the map so that all the markers fit in the view, add 20% padding so
	// that marker dont cut off
	map.fitBounds(latlngbounds.pad(0.20));
}

// show details about point
// e is the event info
function showDetails(e) {
	// layer.feature.geometry gives you access to all the fields
	let layer = e.layer
	console.log(e)
	//layer._icon.src = '../assets/blue-icon.png'
	console.log(e.layer._icon.src)
	console.log(L.Icon.Default.prototype.options)
	console.log(L.Marker.prototype.options.icon)
	currPoint = layer
	console.log(currPoint)
	
	let sideBar = document.getElementById('sidebar')

	if (getComputedStyle(sideBar).visibility === 'hidden') {
		sideBar.style.visibility = 'visible'
	}

	let point = document.getElementById('point')

	//get the previous input text from the previous point
	let prevUserInput = point.getElementsByClassName('user-input')

	// remove the previous point text
	while (prevUserInput.length !== 0) {
		prevUserInput[0].parentNode.removeChild(prevUserInput[0])
	}

	let pointBreaks = point.getElementsByClassName('point-break')

	// put age range of person
	let ageRangeTextSpan = document.createElement('span')
	ageRangeTextSpan.className = 'user-input'
	let ageRangeText = document.createTextNode(layer.feature.geometry['ageRange'])
	ageRangeTextSpan.appendChild(ageRangeText)
	pointBreaks[0].parentNode.insertBefore(ageRangeTextSpan, pointBreaks[0])

	// put clothing description of person
	let clothingDescTextSpan = document.createElement('span')
	clothingDescTextSpan.className = 'user-input'
	let clothingDescText = document.createTextNode(layer.feature.geometry['clothingDescription'])
	clothingDescTextSpan.appendChild(clothingDescText)
	pointBreaks[1].parentNode.insertBefore(clothingDescTextSpan, pointBreaks[1])

	// put whether person is injured or not
	let isInjured = layer.feature.geometry['isInjured']
	let injurySpan = document.createElement('span')
	injurySpan.className = 'user-input'
	if (isInjured) {
		injurySpan.appendChild(document.createTextNode('Injured'))
		injurySpan.style.color = 'red'
	}
	else {
		injurySpan.appendChild(document.createTextNode('Not injured'))
		injurySpan.style.color = 'green'
	}
	pointBreaks[2].parentNode.insertBefore(injurySpan, pointBreaks[2])

	// put reason for help
	let helpReasonTextSpan = document.createElement('span')
	helpReasonTextSpan.className = 'user-input'
	let helpReasonText = document.createTextNode(layer.feature.geometry['reasonForHelp'])
	helpReasonTextSpan.appendChild(helpReasonText)
	point.appendChild(helpReasonTextSpan)

	// let pendingBtn = document.getElementById('pending-btn')
	// pendingBtn.addEventListener('click', markAsPending)

	// let completedBtn = document.getElementById('completed-btn')
	// completedBtn.addEventListener('click', markAsCompleted)

	let closeBtn = document.getElementById('close-btn')
	closeBtn.addEventListener('click', closeDetails)
}

function markAsPending(e) {
	currPoint.src = '../assets/orange-icon.png'
}

function markAsCompleted(e) {
	map.removeLayer(currPoint)
}

function closeDetails(e) {
	let details = document.getElementById('sidebar')
	details.style.visibility = 'hidden'
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
