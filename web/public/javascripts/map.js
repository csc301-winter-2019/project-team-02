// different basemap
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// different basemap
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			subdomains: 'abcd',
			minZoom: 0,
			maxZoom: 20,
			ext: 'png'
}).addTo(map);

// Create point feature for somewhere downtown
var myDataPoint = L.marker([43.6529, -79.3849]).addTo(map);

// Create line feature and add style and add to map
var myDataLine = L.polyline([
		[43.6529, -79.3849],
		[43.6531, -79.3855]],
		{color: 'red', weight: 10}).addTo(map);

// Create area feature add style and add to map
var myArea = L.polygon([
		[43.650948, -79.385655],
		[43.66, -79.388],
		[43.6634, -79.4011],
		[43.66, -79.4011]],
		{color: 'blue', weight: 4}).addTo(map);

// Bind popup to Data Point object
// myDataPoint.bindPopup("This is my city");
// i can add regular html to this too - neat!
myDataPoint.bindPopup("<h3>City Hall (not really)</h3><p>Toronto, ON<br>Information about city hall.</p>");

// Bind popup to area object
myArea.bindPopup("U of T Campus (not really)");

// Create an Empty Popup
var popup = L.popup();

// Write function to set Properties of the Popup
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}

// Listen for a click event on the Map element
map.on('click', onMapClick);
