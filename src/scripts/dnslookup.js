import dns from 'dns';
export const dnsLookUp = (domainName) => {
  dns.lookup(domainName, { family: 4 }, (err, address, family) => {
    if (err) {
      console.error('Error:', err);
    } else {
      return address;
    }
  });
};
