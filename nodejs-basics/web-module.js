/**
 * Web Module
 * 
 * Web Server is a software program that handles HTTTP requests sent by HTTP clients 
 * like web browsers, and returns web pages in response to the clients. Web servers 
 * usually respond with html documents along with images, style sheets and scripts.
 * 
 * 
 * ------------------------------
 * Web Application Architecture
 * ------------------------------
 * 
 * 1. Client Layer: The Client layer contains web browsers, mobile browsers or applications 
 *    which can make HTTP request to the web server.
 * 
 * 2. Server Layer: The Server layer contains Web server which can intercepts the request made 
 *    by clients and pass them the response.
 * 
 * 3. Business Layer: The business layer contains application server which is utilized by web 
 *    server to do required processing. This layer interacts with data layer via data base or some external programs.
 * 
 * 4. Data Layer: The Data layer contains databases or any source of data.
 * 
 */


var http = require('http');  
var fs = require('fs');  
var url = require('url');  
  
// Create a server  
http.createServer( function (request, response) {    
   // Parse the request containing file name  
   var pathname = url.parse(request.url).pathname;  
     
   // Print the name of the file for which request is made.  
   console.log("Request for " + pathname + " received.");  
     
   // Read the requested file content from file system  
   fs.readFile(pathname.substr(1), function (err, data) {  
      if (err) {  
         console.log(err);  
         // HTTP Status: 404 : NOT FOUND  
         // Content Type: text/plain  
         response.writeHead(404, {'Content-Type': 'text/html'});  
      }else{      
         //Page found       
         // HTTP Status: 200 : OK  
         // Content Type: text/plain  
         response.writeHead(200, {'Content-Type': 'text/html'});      
           
         // Write the content of the file to response body  
         response.write(data.toString());         
      }  
      // Send the response body   
      response.end();  
   });     
}).listen(4200);  
// Console will print the message  
console.log('Server running at http://localhost:4200/index.html');  
