// different basemap
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// different basemap
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

L.geoJson(points, {
	pointToLayer: function (feature, latlng) {
		//return L.circleMarker(latlng);
		return L.marker(latlng);
	}
}).on('click', showDetails).addTo(map)

// show details about point
// e is the event info
function showDetails(e) {
	// layer.feature.geometry gives you access to all the fields
	let layer = e.layer
	
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

	let closeBtn = document.getElementById('close-btn')
	closeBtn.addEventListener('click', closeDetails)
}

function closeDetails(e) {
	let details = document.getElementById('sidebar')
	details.style.visibility = 'hidden'
}