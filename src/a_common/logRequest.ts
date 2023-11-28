import {
  // NetworkInterfaceInfo,
  networkInterfaces,
} from 'os';

export function getLANInfo(PORT: number) {
  const interfaces = networkInterfaces();
  // const listAddress = Object.values(interfaces)
  const listAddress = Object.keys(interfaces)
    //   .flat()
    //   .filter((item) => !item.internal && item.family == "IPv4")
    // .find(Boolean).address;
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
    .reduce((results, name) => results.concat(interfaces[name]), [])
    .filter(
      (element) => element.family == '4' || element.family == 'IPv4',
      // && !element.internal
    )
    .map((element) => element.address);
  const ipPublic = listAddress[0];
  const ipLocal = listAddress[1];

  console.log('-------------------------------------');
  console.log('\x1b[32m', 'Public:', `http://${ipPublic}:${PORT}/`);
  console.log('\x1b[32m', 'Local:', `http://${ipLocal}:${PORT}/`);
  console.log('\x1b[32m', 'Local:', `http://localhost:${PORT}/`, '\x1b[0m');
  console.log('-------------------------------------');
}
