/**
 * Events
 * 
 * Node.js is a single-threaded application, but it can support concurrency via 
 * the concept of event and callbacks. 
 * 
 * Every API of Node.js is asynchronous and being single-threaded, they use async 
 * function calls to maintain concurrency.
 * 
 */

var EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

var myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});
myEmitter.emit('event');



//---------------
// Error events
//---------------
var myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js
