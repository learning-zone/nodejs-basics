/**
 *  ------------------
 *    Global Objects
 *  ------------------
 * 
 *    __dirname()
 *    __filename()
 *    clearTimeout(timeoutObject)
 *    console()
 *    exports()
 *    global()
 *    module()
 *    Process()
 *    require()
 *    setTimeout(callback, delay[, ...args])
 *    TextDecoder()
 *    TextEncoder()
 *    URL()
 * 
 * */

//----------------------
//   reqiure() Object
//----------------------
 var path = require("path");
 console.log(`Rock on world from ${path.basename(__filename)}`);  // Rock on world from global-objects.js

 const jsonData = require('./assets/file.json');
 console.log(jsonData);


//-------------------------
//  dirname() & filename()
//-------------------------
console.log(`Current directory: ${__dirname}`);
console.log(`Current directory: ${path.dirname(__filename)}`);
console.log(`Current file: ${__filename}`);


//--------------------
//  Process() Object
//--------------------

// Example: 01
const process = require('process');
//console.log(process);

// Example: 02
/* process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});
 */
// Example: 03
process.on('warning', warning => {
  console.warn(warning.name); // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack); // Print the stack trace
});

// Example: 04 process.argv
process.argv.forEach((val, index) => {
  console.log(`process.argv: ${index}: ${val}`);
});

// Example: 05 process.chdir (directory)
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('./assets');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

// Example: 06 process.cpuUsage()
const startUsage = process.cpuUsage();      
const now = Date.now();                    // spin the CPU for 500 milliseconds
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage)); // { user: 452000, system: 16000 }


// Example: 07 process.memoryUsage()
console.log(process.memoryUsage());


// Example: 07 process.pid()
console.log(`This process is pid: ${process.pid}`);


// Example: 08 process.platform()
console.log(`This platform is: ${process.platform}`);

