/**
 * Process Object
 * 
 * The process is a global object, an instance of EventEmitter, can be accessed from anywhere.
 * 
 * It provides the facility to get process information such as process id, architecture, platform, 
 * version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.
 * 
 */


// Returns process architecture: 'arm', 'ia32', or 'x64'
console.log(`Process Architecture: ${process.arch}`);  



// Returns process id of the process
console.log(`Process PID: ${process.pid}`);  



// Returns platform of the process: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
console.log(`Process Platform: ${process.platform}`);  



// Returns the node version
console.log(`Process Version: ${process.version}`);  



// Returns path of current working directory
console.log(`Current directory: ${process.cwd()}`);  



// Returns the Node.js process uptime in seconds.
console.log(`Uptime: ${process.uptime()}`);  



// Returns an object having information of memory usage.
console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);  



// Print command line arguments
process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
});  
