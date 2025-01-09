import './styles/style.css';
import { createMap } from './scripts/maps';
import { fetchIPGeolocation } from './scripts/geolocator.js';

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#name');

const map = createMap('');

searchBtn.addEventListener('click', () => {
  const inputValue = searchInput.value;
  createMap(inputValue);
});
