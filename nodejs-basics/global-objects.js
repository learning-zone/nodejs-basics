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
