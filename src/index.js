import './styles/style.css';

let map = L.map('map').setView([-1.29524, 36.81233], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([-1.29524, 36.81233]).addTo(map);

let circle = L.circle([-1.29524, 36.81233], {
  color: 'yellow',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);
