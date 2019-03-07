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
}).bindPopup(function (layer) {
	// layer.feature.geometry gives you access to all the fields
	showDetails(layer)

	return "<p>" + JSON.stringify(layer.feature.geometry) + "</p>";
}).addTo(map)


function showDetails(layer) {
	let sideBar

	if (document.getElementById('sidebar') === null) {
		sideBar = document.createElement('div')
		let notificationsHeaderElement = document.createElement('h1')
		notificationsHeaderElement.appendChild(document.createTextNode('Details'))
		sideBar.appendChild(notificationsHeaderElement)
		sideBar.id = "sidebar"
	}
	else {
		sideBar = document.getElementById('sidebar')
	}

	let point

	if (document.getElementById('point') !== null) {
		point = document.getElementById('point')
		point.parentNode.removeChild(point)
	}

	point = document.createElement('div')
	point.id = 'point'

	let strongElement = document.createElement('strong')
	let ageRangeText = document.createTextNode('Age range: ')
	strongElement.appendChild(ageRangeText)
	point.appendChild(strongElement)
	point.appendChild(document.createTextNode(layer.feature.geometry['ageRange']))
	point.appendChild(document.createElement('br'))

	let strongElement2 = document.createElement('strong')
	let clothingDescText = document.createTextNode('Clothing description: ')
	strongElement2.appendChild(clothingDescText)
	point.appendChild(strongElement2)
	point.appendChild(document.createTextNode(layer.feature.geometry['clothingDescription']))
	point.appendChild(document.createElement('br'))

	let strongElement3 = document.createElement('strong')
	let injuryStatusText = document.createTextNode('Injury status: ')
	strongElement3.appendChild(injuryStatusText)
	point.appendChild(strongElement3)

	let isInjured = layer.feature.geometry['isInjured']
	let injurySpan = document.createElement('span')
	if (isInjured) {
		injurySpan.appendChild(document.createTextNode('Injured'))
		injurySpan.style.color = 'red'
	}
	else {
		injurySpan.appendChild(document.createTextNode('Not injured'))
		injurySpan.style.color = 'green'
	}
	point.appendChild(injurySpan)
	point.appendChild(document.createElement('br'))

	let strongElement4 = document.createElement('strong')
	let helpReasonText = document.createTextNode('Reason for help: ')
	strongElement4.appendChild(helpReasonText)
	point.appendChild(strongElement4)
	point.appendChild(document.createTextNode(layer.feature.geometry['reasonForHelp']))

	sideBar.appendChild(point)

	let closeBtn = document.createElement('button')
	let closeBtnText = document.createTextNode('Close')
	closeBtn.id = 'close-btn'
	closeBtn.appendChild(closeBtnText)

	sideBar.appendChild(closeBtn)

	let insertBefore = document.getElementById('map')
	insertBefore.parentNode.insertBefore(sideBar, insertBefore)

	closeBtn.addEventListener('click', closeDetails)
}

function closeDetails(e) {
	let details = document.getElementById('sidebar')
	details.parentNode.removeChild(details)
}