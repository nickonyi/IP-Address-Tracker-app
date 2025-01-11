import './styles/style.css';
import { createMap } from './scripts/maps';
import { isValidIPAddress } from './scripts/dnslookup';
import { resolveDomainToIP } from './scripts/dnslookup';

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#name');

const map = createMap('');

searchBtn.addEventListener('click', () => {
  let inputValue = searchInput.value;
  if (isValidIPAddress(inputValue)) {
    createMap(inputValue);
  } else {
    resolveDomainToIP(inputValue)
      .then((addresses) => createMap(addresses))
      .catch((err) => console.error('Error:', err));
  }
});
