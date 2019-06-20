//--------------------
//  Process() Object
//--------------------

const process = require('process');
//console.log(process);

// Example: Exit
/* process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});
 */
// Example: Warning
process.on('warning', warning => {
  console.warn(warning.name); // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack); // Print the stack trace
});

// Example: process.argv
process.argv.forEach((val, index) => {
  console.log(`process.argv: ${index}: ${val}`);
});

// Example: process.chdir (directory)
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('./assets');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

// Example: process.cpuUsage()
const startUsage = process.cpuUsage();      
const now = Date.now();                    // spin the CPU for 500 milliseconds
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage)); // { user: 452000, system: 16000 }


// Example: process.memoryUsage()
console.log(process.memoryUsage());


// Example: process.pid()
console.log(`This process is pid: ${process.pid}`);


// Example: process.platform()
console.log(`This platform is: ${process.platform}`);
