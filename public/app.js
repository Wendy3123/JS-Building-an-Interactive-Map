//Note: You do NOT need to create an external JS file for this project despite any instructions you may see in Canvas. This file, app.js, is the only external JS file you need.



// Create map
let map = L.map('map').setView([51.505, -0.09], 13);



// Add openstreetmap tiles

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions


// Create and add a geolocation marker

var marker = L.marker([51.5, -0.09]).addTo(map);

// Draw the 2nd arrondissement
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//just for fun add the circle pinpoint too
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Metro station markers

marker.bindPopup("<b> Princess Wendy's world!</b><br>Wendy lives here.").openPopup();
polygon.bindPopup("I am a polygon.");
circle.bindPopup("I am a circle.");


// Create red pin marker


var redIcon = L.icon({
    iconUrl: './assets/red-pin.png',

    iconSize:     [30, 35], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker([51.5, -0.09], {icon: redIcon}).addTo(map);