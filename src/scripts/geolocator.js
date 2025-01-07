import axios from 'axios';

export const fetchIPGeolocation = async (ip) => {
  const apiKey = 'at_HLIklK6fiBycbgi7OxhesqkD2ql2p';
  const url = ` https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP geolocation:', error.message);
    return null;
  }
};
