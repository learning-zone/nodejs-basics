/**
 * 
 * Transport Layer Security (TLS)
 * 
 * It is the successor to Secure Sockets Layer (SSL). TLS along with SSL is 
 * used for cryptographic protocols to secure communication over the web.
 * 
 * TLS uses public-key cryptography to encrypt messages. It encrypts 
 * communication generally on the TCP layer.
 * 
 */

const tls = require('tls');  

function connected(stream) {  
    if (stream) {  
       // socket connected  
      stream.write("GET / HTTP/1.0\n\rHost: encrypted.google.com:443\n\r\n\r");    
    } else {  
      console.log("Connection failed!");  
    }  
}  
 // needed to keep socket variable in scope  
var dummy = this;  
 // try to connect to the server  
dummy.socket = tls.connect(443, 'encrypted.google.com', function() {  
   // callback called only after successful socket connection  
   dummy.connected = true;  
   if (dummy.socket.authorized) {  
      // authorization successful  
      dummy.socket.setEncoding('utf-8');  
      connected(dummy.socket);  
   } else {  
      // authorization failed  
     console.log(dummy.socket.authorizationError);  
     connected(null);  
   }  
});  
 dummy.socket.addListener('data', function(data) {  
   // received data  
   console.log(data);  
});  
 dummy.socket.addListener('error', function(error) {  
   if (!dummy.connected) {  
     // socket was not connected, notify callback  
     connected(null);  
   }  
   console.log("FAIL");  
   console.log(error);  
});  
 dummy.socket.addListener('close', function() {  
    console.log('Connection Closed!');   
});  
