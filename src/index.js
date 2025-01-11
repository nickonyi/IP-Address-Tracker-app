import './styles/style.css';
import { createMap } from './scripts/maps';

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#name');

const map = createMap('');

searchBtn.addEventListener('click', () => {
  const inputValue = searchInput.value;
  createMap(inputValue);
});

//const dns = require('dns');
//
//dns.lookup('IBws3M.com', { family: 4 }, (err, address, family) => {
//  if (err) {
//    //console.error('Error:', err);
//  } else {
//    //console.log(`IP Address: ${address}`);
//    //console.log(`IP Family: IPv${family}`);
//  }
//});
