/**
 * Path Module 
 * 
 * The path module provides utilities for working with file and directory paths. 
 * 
 */
const path = require('path');

 
// Normalization  
console.log('normalization : ' + path.normalize('/nodejs-basics/nodejs//node/dir/tab/..'));  

// Join  
console.log('joint path : ' + path.join('/nodejs-basics', 'nodejs', 'node/dir', 'tab', '..'));  

// Resolve  
console.log('resolve : ' + path.resolve('path_example.js')); 

// Extension   
console.log('ext name: ' + path.extname('path_example.js'));    