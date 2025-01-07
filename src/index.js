import './styles/style.css';
import { createMap } from './scripts/maps';
import { fetchIPGeolocation } from './scripts/geolocator.js';

const map = createMap();
console.log(fetchIPGeolocation(''));
