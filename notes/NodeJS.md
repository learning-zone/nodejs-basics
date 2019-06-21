<dl>
  <dt>NodeJS</dt>
  <dd>Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript. </dd>

  <dt>Node.js Process Model</dt>
  <dd>Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.</dd>

<dt>Primitive Types</dt>
<dd>1. String<br/>  
    2. Number<br/>  
    3. Boolean<br/>  
    4. Undefined<br/>  
    5. Null<br/>  
    6. RegExp </dd>


<dt>Buffer</dt>
<dd>Node.js includes an additional data type called Buffer (not available in browser's JavaScript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.</dd>

<dt>Node.js Module</dt>
<dd>1. Core Modules<br/>
    2. Local Modules<br/>
    3. Third Party Modules </dd>


<dt>Core Modules</dt>
<dd>

|  Core Module |	Description                                                                 |
|:-------------|:-------------------------------------------------------------------------------|
|http	       | http module includes classes, methods and events to create Node.js http server.|
|url	       | url module includes methods for URL resolution and parsing.                    |
|querystring   | querystring module includes methods to deal with query string.                 |
|path	       | path module includes methods to deal with file paths.                          |
|fs	           | fs module includes classes, methods, and events to work with file I/O.         |
|util	       | util module includes utility functions useful for programmers.                 |

</dd>


<dt>Example: Load and Use Core http Module</dt>
<dd>
  
```
   var http = require(http);

   var server = http.createServer(function(req, res){
      //write code here
    });
    server.listen(8080);
```
</dd>

<dt>Local Module</dt>
<dd>Local modules are modules created locally in your Node.js application.</dd>


<dt>Example: log.js</dt>
<dd>
  
```
var log = {
            info: function (info) { 
                console.log('Info: ' + info);
            },
            warning:function (warning) { 
                console.log('Warning: ' + warning);
            },
            error:function (error) { 
                console.log('Error: ' + error);
            }
    };

module.exports = log

```
</dd>

<dt>Create Node.js Web Server</dt>
<dd>

```
var http = require('http');  //Import core module

var server = http.createServer(function (req, res) {   //creating server

    //handle incomming requests here..

});

server.listen(4200); //listen for any incoming requests
console.log('Node.js web server at port 4200 is running..')

```

</dd>

<dt>Handle HTTP Request</dt>
<dd>

```
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 

        // set response content
        res.write('<html><body><p>This is Home Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/employee") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Employee Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/admin") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Admin Page.</p></body></html>');
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(4200); // listen for any incoming requests
console.log('Node.js web server at port 4200 is running..')

```
</dd>

<dt>Node.js File System</dt>
<dd>Node.js includes <code>fs</code> module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.</dd>

<dt>Example: Reading File</dt>
<dd>

```
var fs = require('fs');

fs.readFile('file.txt', function (err, data) {
    if (err) throw err;

    console.log(data);
});
```
</dd>

<dt>Example: Creating & Writing File</dt>
<dd>

```
var fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err)
      console.log(err);
    else
      console.log('Write operation complete.');
});

```
</dd>

<dt>Example: Append File Content</dt>
<dd>

```
var fs = require('fs');

fs.appendFile('file.txt', 'Hello World!', function (err) {
    if (err)
      console.log(err);
    else
      console.log('Append operation complete.');
});

```
</dd>
<dt>Example: File open and read</dt>
<dd>

```
var fs = require('fs');

fs.open('file.txt', 'r', function (err, fd) {

    if (err) {
      return console.error(err);
    }

    var buffr = new Buffer(1024);

    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {

        if (err) throw err;

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
          console.log(buffr.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
          if (err) throw err;
        });
    });
});

```
</dd>

<dt>Example: File Delete</dt>
<dd>

```
var fs = require('fs');

fs.unlink('test.txt', function () {

    console.log('File Deleted.');

});
```
</dd>
<dt>Debug Node.js Application</dt>
<dd>

```
var fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, data) {

    debugger;

    if (err) throw err;
    console.log(data);
});

```
</dd>

<dt>Important debugging commands</dt>
<dd>

| Command	      | Description                                                      |
|:--------------|:-----------------------------------------------------------------|
|next	          |  Stop at the next statement.                                     |
|cont	          |  Continue execute and stop at the debugger statement if any.     |
|step	          |  Step in function.                                               |
|out	          |  Step out of function.                                           |
|watch	        |  Add the expression or variable into watch.                      |
|watcher	      |  See the value of all expressions and variables added into watch.|
|Pause	        |  Pause running code.                                             |

</dd>


<dt>Node.js EventEmitter</dt>
<dd>Node.js allows us to create and handle custom events easily by using events module. Event module includes EventEmitter class which can be used to raise and handle custom events.</dd>

<dt>Example: EventEmitter</dt>
<dd>

```
var emitter = require('events').EventEmitter;

var em = new emitter();

//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent
em.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is first event emitter example.');

// Raising SecondEvent
em.emit('SecondEvent', 'This is second event emitter example.');
```
</dd>


<dt>EventEmitter class</dt>
<dd>

|EventEmitter Methods                   |   Description                                                                                                 |
|:------------------------------------  |:--------------------------------------------------------------------------------------------------------------|
|emitter.addListener(event, listener)   |Adds a listener to the end of the listeners array for the specified event.                                     |
|emitter.on(event, listener)            |Adds a listener to the end of the listeners array for the specified event.                                     |
|emitter.once(event, listener)          |This listener is invoked only the next time the event is fired, after which it is removed.                     |
|emitter.removeListener(event, listener)|Removes a listener from the listener array for the specified event.                                            |
|emitter.removeAllListeners([event])    |Removes all listeners, or those of the specified event.                                                        |
|emitter.setMaxListeners(n)             |By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.      |
|emitter.getMaxListeners()              |Returns the current maximum listener value for the emitter which is either set by emitter.setMaxListeners(n)   |
|emitter.listeners(event)               |Returns a copy of the array of listeners for the specified event.                                              |
|emitter.emit(event[, arg1])            |Raise the specified events with the supplied arguments.                                                        |
|emitter.listenerCount(type)            |Returns the number of listeners listening to the type of event.                                                |

</dd>

<dt>Frameworks for Node.js</dt>
<dd>

|  Framework            |        Description                                                                                                                      |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|Express.js             |Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications|
|Geddy                  |Geddy is a simple, structured web application framework for Node.js based on MVC architecture.                                            |
|Locomotive             |It supports MVC patterns, RESTful routes, and convention over configuration, while integrating seamlessly with any database and template  | engine.|
|Koa                    |Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.|
|Total.js	              |Totaljs is free web application framework for building web sites and web applications using JavaScript, HTML and CSS on Node.js          |
|Hapi.js	              | Hapi is a rich Node.js framework for building applications and services.                                                                |
|Keystone	              | Keystone is the open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.|
|Derbyjs	              |Derby support single-page apps that have a full MVC structure, including a model provided byÂ Racer, a template and styles based view, and controller code with application logic and routes.|
|Sails.js	              |It's especially good for building chat, realtime dashboards, or multiplayer games; but you can use it for any web application project - top to bottom.                                     |
|Meteor                	|Meteor is a complete open source platform for building web and mobile apps in pure JavaScript.                                           |
|Mojito	                |This HTML5 framework for the browser and server from Yahoo offers direct MVC access to the server database through the local routines. One clever feature allows the code to migrate. If the client can't run JavaScript for some reason, Mojito will run it on the server -- a convenient way to handle very thin clients. |
|Restify	              |Restify is a node.js module built specifically to enable you to build correct REST web services.                                         |
|Loopback	              |Loopback is an open-source Node.js API framework.                                                                                        |
|ActionHero	            |actionhero.js is a multi-transport Node.JS API Server with integrated cluster capabilities and delayed tasks.                            |
|Frisby	                |Frisby is a REST API testing framework built on node.js and Jasmine that makes testing API endpoints easy, fast, and fun.                |
|Chocolate.js	          |Chocolate is a simple webapp framework built on Node.js using Coffeescript.                                                              |

</dd>

</dl>
