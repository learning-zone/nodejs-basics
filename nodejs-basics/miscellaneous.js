// The default operation of the path module varies based on the operating system on which a Node.js application is running.
var path = require('path');

// The util module is primarily designed to support the needs of Node.js' own internal APIs.
var util = require('util');

// The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary.
var v8 = require('v8');

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);
util.log(v8.getHeapStatistics());
