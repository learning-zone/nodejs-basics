/**
 * Stream Module
 * 
 * Streams are the objects that facilitate you to read data from a source 
 * and write data to a destination. There are four types of streams in Node.js
 * 
 * 1. Readable: This stream is used for read operations.
 * 2. Writable: This stream is used for write operations.
 * 3. Duplex: This stream can be used for both read and write operations.
 * 4. Transform: It is type of duplex stream where the output is computed according to input.
 * 
 * 
 * Each type of stream is an Event emitter instance and throws several events at different times. 
 * Following are some commonly used events:
 * 
 * 1. Data:This event is fired when there is data available to read.
 * 2. End:This event is fired when there is no more data available to read.
 * 3. Error: This event is fired when there is any error receiving or writing data.
 * 4. Finish:This event is fired when all data has been flushed to underlying system.
 * 
 */


/**
 * Reading from stream
 * 
 */
var fs = require("fs");  
var data = '';  

// Create a readable stream  
var readerStream = fs.createReadStream('input.txt'); 

// Set the encoding to be utf8.   
readerStream.setEncoding('UTF8');  

// Handle stream events --> data, end, and error  
readerStream.on('data', function(chunk) {  
   data += chunk;  
});  
readerStream.on('end',function(){  
   console.log(data);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended!");  



/**
 * Writing to stream
 * 
 */
var fs = require("fs");  
var data = 'A Solution of all Technology';  
// Create a writable stream  
var writerStream = fs.createWriteStream('output.txt');  

// Write the data to stream with encoding to be utf8  
writerStream.write(data,'UTF8');  

// Mark the end of file  
writerStream.end();  

// Handle stream events --> finish, and error  
writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  
writerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended!");  



/**
 * Piping Streams
 * 
 * Piping is a mechanism where output of one stream is used as input to another stream. 
 * There is no limit on piping operation.
 * 
 */
var fs = require("fs");  
// Create a readable stream  
var readerStream = fs.createReadStream('input.txt');  
// Create a writable stream  
var writerStream = fs.createWriteStream('output.txt');  
// Pipe the read and write operations  
// read input.txt and write data to output.txt  
readerStream.pipe(writerStream);  
console.log("Program Ended!");   




/**
 * Chaining Streams
 * 
 * Chaining stream is a mechanism of creating a chain of multiple stream operations by 
 * connecting output of one stream to another stream. It is generally used with piping operation.
 * 
 */
var fs = require("fs");  
var zlib = require('zlib');  
// Compress the file input.txt to input.txt.gz  
fs.createReadStream('input.txt')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('input.txt.gz'));  
  console.log("File Compressed.");  
