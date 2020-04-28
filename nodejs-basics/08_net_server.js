/**
 * NET Module
 * 
 * It provides an asynchronous network API for creating stream-based 
 * TCP or IPC servers (net.createServer()) and clients (net.createConnection()).
 * 
 * The Node.js net module contains functions for creating both servers and clients.
 */

const net = require('net');  
var server = net.createServer((socket) => {  
  socket.end('goodbye\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
});  