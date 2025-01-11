export const resolveDomainToIP = async (domain) => {
  try {
    const response = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
      {
        headers: { Accept: 'application/dns-json' },
      },
    );
    const data = await response.json();
    return data.Answer.map((record) => record.data);
  } catch (err) {
    console.error('Error resolving DNS:', err.message);
    throw err;
  }
};

export const isValidIPAddress = (input) => {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
  return ipv4Regex.test(input);
};
