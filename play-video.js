/**  
 *  -------------------------
 *   Play video using Node
 *  -------------------------
 * 
 * RUN: cmd > node play-video.js
 * 
 * */
const http = require('http');
const fs = require('fs'); // to help serve a local video file

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of mp4 video for the response
  res.writeHead(200, { 'Content-Type': 'video/mp4' });

  // Read the video into a stream
  let vidstream = fs.createReadStream('assets/NASA.mp4');

  // Pipe our stream into the response
  vidstream.pipe(res);
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
