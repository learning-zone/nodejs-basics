
/**
 *  Domain Name System (DNS)s
 * 
 */


// Example: dns.lookup()
const dns = require('dns');  
dns.lookup('www.nodejs.org', (err, addresses, family) => {  
  //console.log('addresses:', addresses);  
  //console.log('family:',family);  
}); 
/** 
 * --------
 *  Output
 * --------
 * addresses: 104.20.22.46
 * family: 4
 * 
 * */ 


// Example: lookupService() 
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
  console.log(hostname, service);  
});
/** 
 * --------
 *  Output
 * --------
 * BLR-G24FSF2-10L.mm-ads.com ssh
 * 
 * */ 
