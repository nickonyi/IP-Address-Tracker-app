import { fetchIPGeolocation } from './geolocator';

let map = '';

export const createMap = async (ip) => {
  const coordinatesData = await fetchIPGeolocation(ip);
  const coordinates = coordinatesData.location;

  if (map) {
    map.remove();
  }
  map = L.map('map').setView([coordinates.lat, coordinates.lng], 14);

  const mapTile = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  ).addTo(map);

  let marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map);

  return {
    mapTile,
    marker,
  };
};
