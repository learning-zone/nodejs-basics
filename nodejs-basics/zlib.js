/**
 * Zlib Module
 * 
 * The Node.js Zlib module is used to provide compression and decompression (zip and unzip) 
 * functionalities. It is implemented using Gzip and deflate/inflate.
 * 
 */


// --------------------------------------------------------------------
//   Method	              Description
// --------------------------------------------------------------------
// constants	        Returns an object containing Zlib constants
// createDeflate()	    Creates a Deflate object
// createDeflateRaw()	Creates a DeflateRaw object
// createGunzip()	    Creates a Gunzip object
// createGzip()	        Creates a Gzip object
// createInflate()	    Creates a Inflate object
// createInflateRaw()	Creates a InflateRaw object
// createUnzip()	    Creates a Unzip object
// deflate()	        Compress a string or buffer, using Deflate
// deflateSync()	    Compress a string or buffer, syncronously, using Deflate
// deflateRaw()	        Compress a string or buffer, using DeflateRaw
// deflateRawSync()	    Compress a string or buffer, syncronously, using DeflateRaw
// gunzip()	            Compress a string or buffer, using Gunzip
// gunzipSync()	        Compress a string or buffer, syncronously, using Gunzip
// gzip()	            Compress a string or buffer, using Gzip
// gzipSync()	        Compress a string or buffer, syncronously, using Gzip
// inflate()	        Decompress a string or buffer, using Inflate
// inflateSync()	    Decompress a string or buffer, syncronously, using Inflate
// inflateRaw()	        Decompress a string or buffer, using InflateRaw
// inflateRawSync()	    Decompress a string or buffer, syncronously, using InflateRaw
// unzip()	            Decompress a string or buffer, using Unzip
// unzipSync()	        Decompress a string or buffer, syncronously, using Unzip



//--------------------------
// Example: Compress File
//-------------------------- 

var zlib = require('zlib'); 
var fs = require('fs');
var gzip = zlib.createGzip();  
var r = fs.createReadStream('input.txt');  
var w = fs.createWriteStream('input.txt.gz');  
r.pipe(gzip).pipe(w); 
