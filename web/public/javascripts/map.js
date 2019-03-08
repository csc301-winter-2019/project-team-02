// different basemap
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

function plotPointsOnMap(points) {
	L.geoJson(points, {
		pointToLayer: function (feature, latlng) {
			//return L.circleMarker(latlng);
			latlngbounds.extend(latlng);
			return L.marker(latlng);
		}
	}).bindPopup(function (layer) {
		// layer.feature.geometry gives you access to all the fields
		return "<p>" + JSON.stringify(layer.feature.geometry) + "</p>";
	}).addTo(map)

	// rezoom the map so that all the markers fit in the view
	map.fitBounds(latlngbounds);
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
