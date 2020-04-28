/**
 * Node.js OS Module
 * provides some basic operating-system related utility functions.
 * 
 */
const os = require('os');  


// This methods returns the amount of free system memory in bytes.
console.log("Free Memory: ", os.freemem() +' bytes');  


// This method returns the home directory of the current user.
console.log("Home directory: ", os.homedir());  


// This method is used to returns the hostname of the operating system.
console.log("Host Name: ", os.hostname()); 


// This method returns the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.
console.log("Endianness(): ", os.endianness());  


// This method returns an array containing the 1, 5, and 15 minute load averages. 
// The load average is a time fraction taken by system activity, calculated by the operating system and 
// expressed as a fractional number.
console.log("Loadavg(): ", os.loadavg());


// This method returns the operating system platform of the running computer i.e.
// 'darwin', 'win32','freebsd', 'linux', 'sunos' etc.
console.log("Platform: ", os.platform());  


// This method returns the operating system release.
console.log("Release: ", os.release());  


// This method returns the operating system's default directory for temporary files.
console.log("Tmpdir: ", os.tmpdir());  


// This method returns the total amount of system memory in bytes.
console.log("Totalmem: ", os.totalmem());  


// This method returns the operating system name. 
console.log("Type: ", os.type());  


// This method returns the system uptime in seconds.
console.log("Uptime: ", os.uptime()); 



// This method is used to fetch the operating system CPU architecture.
console.log("Architecture: ",os.arch()); 


// This method is used to fetch an array of objects containing information about each cpu/core installed: 
// model, speed (in MHz), and times.
console.log("CPUs: \n",os.cpus());  
 

// This method returns a list of network interfaces.
console.log("Network Interfaces : \n",os.networkInterfaces());   
