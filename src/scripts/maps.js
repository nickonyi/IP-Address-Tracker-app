import { fetchIPGeolocation } from './geolocator';

export const createMap = async () => {
  const coordinatesData = await fetchIPGeolocation('');
  const coordinates = coordinatesData.location;

  let map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);

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
