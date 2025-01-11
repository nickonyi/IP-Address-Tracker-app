//import './styles/style.css';
//import { createMap } from './scripts/maps';
//import { dnsLookUp } from './scripts/dnslookup';

//const searchBtn = document.querySelector('#search-btn');
//const searchInput = document.querySelector('#name');
//
//const map = createMap('');
//
//searchBtn.addEventListener('click', () => {
//  const inputValue = searchInput.value;
//  createMap(inputValue);
//});

const dns = require('dns').promises;
const getIPv4Address = async (domain) => {
  try {
    const result = await dns.lookup(domain, { family: 4 });
    return result.address;
  } catch (err) {
    throw err;
  }
};

(async () => {
  try {
    const address = await getIPv4Address('example.com');
    console.log('IPv4 Address:', address);
  } catch (err) {
    console.error('Error:', err);
  }
})();
