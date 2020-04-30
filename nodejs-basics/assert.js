/**
 * Assert Module
 * 
 * The assert module provides a simple set of assertion tests that can be used to test invariants.
 * 
 */

 // Example: 01
var assert = require('assert');  
function add (a, b) {  
  return a + b;  
}  
var expected = add(10, 20);  
assert( expected === 30, 'Test Pass');  



// Example: 02
var assert = require('assert');  
function add (a, b) {  
  return a + b;  
}  
var expected = add(10, 20);  
assert( expected === 40, 'Test Fail!');  
// Output
/*
AssertionError [ERR_ASSERTION]: Test Fail!
    at Object.<anonymous> (C:\workspace\GitHub\nodejs-interview-questions\nodejs-basics\assert.js:24:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
*/
