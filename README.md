# Node.js Basics

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

<br/>

## Related Topics

* *[HTML Basics](https://github.com/learning-zone/html-basics)*
* *[CSS Basics](https://github.com/learning-zone/css-basics)*
* *[JavaScript Basics](https://github.com/learning-zone/javascript-basics)*
* *[SQL Basics](https://github.com/learning-zone/sql-basics)*
* *[MongoDB Basics](https://github.com/learning-zone/mongodb-basics)*
* *[Node.js APIs](nodejs-api.md)*
* *[Node.js Commands](nodejs-commands.md)*
* *[Node.js Coding Practice](nodejs-programming.md)*

<br/>

## Table of Contents

* [Introduction](#-1-introduction)
* [Node.js Setup](#-2-nodejs-setup)
* [Node.js Data Types](#-3-nodejs-data-types)
* [Node.js Architecture](#-4-nodejs-architecture)
* [Node.js Events](#-5-nodejs-events)
* [Node.js File System](#-6-nodejs-file-system)
* [Node.js Streams](#-7-nodejs-streams)
* [Node.js Multithreading](#-8-nodejs-multithreading)
* [Node.js Web Module](#-9-nodejs-web-module)
* [Node.js Middleware](#-10-nodejs-middleware)
* [Node.js RESTFul API](#-11-nodejs-restful-api)
* [Node.js Routing](#-12-nodejs-routing)
* [Node.js Caching](#-13-nodejs-caching)
* [Node.js Error Handling](#-14-nodejs-error-handling)
* [Node.js Logging](#-15-nodejs-logging)
* [Node.js Internationalization](#-16-nodejs-internationalization)
* [Node.js Testing](#-17-nodejs-testing)
* [Node.js Miscellaneous](#-18-nodejs-miscellaneous)

<br/>

## # 1. INTRODUCTION

<br/>

## Q. What is Node.js?

Node.js is an open-source server side runtime environment built on Chrome\'s V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Node.js Process Model?

Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms.

All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn\'t have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the key features of Node.js?

* **Asynchronous and Event driven** – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests.

* **Fast in Code execution** – Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster.

* **Single Threaded but Highly Scalable** – Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests.

* **Node.js library uses JavaScript** – This is another important aspect of Node.js from the developer\'s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript.

* **There is an Active and vibrant community for the Node.js framework** – The active community always keeps the framework updated with the latest trends in the web development.

* **No Buffering** – Node.js applications never buffer any data. They simply output the data in chunks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does Node.js work?

A Node.js application creates a single thread on its invocation. Whenever Node.js receives a request, it first completes its processing before moving on to the next request.

Node.js works asynchronously by using the event loop and callback functions, to handle multiple requests coming in parallel. An Event Loop is a functionality which handles and processes all your external events and just converts them to a callback function. It invokes all the event handlers at a proper time. Thus, lots of work is done on the back-end, while processing a single request, so that the new incoming request doesn\'t have to wait if the processing is not complete.

While processing a request, Node.js attaches a callback function to it and moves it to the back-end. Now, whenever its response is ready, an event is called which triggers the associated callback function to send this response.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is difference between process and threads in Node.js?

**1. Process:**

Processes are basically the programs that are dispatched from the ready state and are scheduled in the CPU for execution. PCB (Process Control Block) holds the concept of process. A process can create other processes which are known as Child Processes. The process takes more time to terminate and it is isolated means it does not share the memory with any other process.

The process can have the following states new, ready, running, waiting, terminated, and suspended.

**2. Thread:**

Thread is the segment of a process which means a process can have multiple threads and these multiple threads are contained within a process. A thread has three states: Running, Ready, and Blocked.

The thread takes less time to terminate as compared to the process but unlike the process, threads do not isolate.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. NODE.JS SETUP

<br/>

## Q. How to create a simple server in Node.js that returns Hello World?

**Step 01**: Create a project directory

```js
mkdir myapp
cd myapp
```

**Step 02**: Initialize project and link it to npm

```js
npm init
```

This creates a `package.json` file in your myapp folder. The file contains references for all npm packages you have downloaded to your project. The command will prompt you to enter a number of things.
You can enter your way through all of them EXCEPT this one:

```js
entry point: (index.js)
```

Rename this to:

```js
app.js
```

**Step 03**: Install Express in the myapp directory

```js
npm install express --save
```

**Step 04**: app.js

```js
/**
 * Express.js
 */
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
```

**Step 05**: Run the app

```bah
node app.js
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/hello-world-in-nodejs-ue3cs3)**

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain the concept of URL module in Node.js?

The URL module in Node.js splits up a web address into readable parts. Use `require()` to include the module. Then parse an address with the `url.parse()` method, and it will return a URL object with each part of the address as properties.

**Example:**

```js
/**
 * URL Module in Node.js
 */
const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2022&month=september';
const q = url.parse(adr, true);

console.log(q.host); // localhost:8080
console.log(q.pathname); // "/default.htm"
console.log(q.search); // "?year=2022&month=september"

const qdata = q.query; // { year: 2022, month: 'september' }
console.log(qdata.month); // "september"
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. NODE.JS DATA TYPES

<br/>

## Q. What are the data types in Node.js?

Just like JS, there are two categories of data types in Node: Primitives and Objects.

**1. Primitives:**

* String
* Number
* BigInt
* Boolean
* Undefined
* Null
* Symbol

**2. Objects:**

* Function
* Array
* Buffer

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain String data type in Node.js?

Strings in Node.js are sequences of unicode characters. Strings can be wrapped in a single or double quotation marks.
Javascript provide many functions to operate on string, like indexOf(), split(), substr(), length.

**String functions:**

|Function   | Description               |
|-----------|---------------------------|
|charAt()   |It is useful to find a specific character present in a string.|
|concat()   |It is useful to concat more than one string.|
|indexOf()  |It is useful to get the index of a specified character or a part of the string.|
|match()    |It is useful to match multiple strings.|
|split()    |It is useful to split the string and return an array of string.|
|join()     |It is useful to join the array of strings and those are separated by comma (,) operator.|

**Example:**

```js
/** 
 * String Data Type
 */
const str1 = "Hello";
const str2 = 'World';

console.log("Concat Using (+) :" , (str1 + ' ' + str2));
console.log("Concat Using Function :" , (str1.concat(str2)));
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain Number data type in Node.js?

The number data type in Node.js is 64 bits floating point number both positive and negative. The parseInt() and parseFloat() functions are used to convert to number, if it fails to convert into a number then it returns `NaN`.

**Example:**

```js
/**
 * Number Data Type
 */
// Example 01:
const num1 = 10;
const num2 = 20;

console.log(`sum: ${num1 + num2}`); 

// Example 02:
console.log(parseInt("32"));  // 32
console.log(parseFloat("8.24")); // 8.24
console.log(parseInt("234.12345")); // 234
console.log(parseFloat("10")); // 10

// Example 03:
console.log(isFinite(10/5)); // true
console.log(isFinite(10/0)); // false

// Example 04:
console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain BigInt data type in Node.js?

A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending **n** to the end of an integer literal, or by calling the BigInt() function ( without the new operator ) and giving it an integer value or string value.

**Example:**

```js
/**
 * BigInt Data Type
 */
const maxSafeInteger = 99n; // This is a BigInt
const num2 = BigInt('99'); // This is equivalent
const num3 = BigInt(99); // Also works

typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain Boolean data type in Node.js?

Boolean data type is a data type that has one of two possible values, either true or false. In programming, it is used in logical representation or to control program structure.

The boolean() function is used to convert any data type to a boolean value. According to the rules, false, 0, NaN, null, undefined, empty string evaluate to false and other values evaluates to true.

**Example:**

```js
/**
 * Boolean Data Type
 */
// Example 01:
const isValid = true; 
console.log(isValid); // true 

// Example 02:
console.log(true && true); // true 
console.log(true && false); // false 
console.log(true || false); // true 
console.log(false || false); // false 
console.log(!true); // false 
console.log(!false); // true 
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain `Undefined` and `Null` data type in Node.js?

In node.js, if a variable is defined without assigning any value, then that will take **undefined** as value. If we assign a null value to the variable, then the value of the variable becomes **null**.

**Example:**

```js
/**
 * NULL and UNDEFINED Data Type
 */
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain Symbol data type in Node.js?

Symbol is an immutable primitive value that is unique. It\'s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.

**Example:**

```js
/**
 * Symbol Data Type
 */
const NAME = Symbol()
const person = {
  [NAME]: 'Ritika Bhavsar'
}

person[NAME] // 'Ritika Bhavsar'
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain function in Node.js?

Functions are first class citizens in Node\'s JavaScript, similar to the browser\'s JavaScript. A function can have attributes and properties also. It can be treated like a class in JavaScript.

**Example:**

```js
/**
 * Function in Node.js
 */
function Messsage(name) {
 console.log("Hello "+name);
}

Messsage("World"); // Hello World
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain Buffer data type in Node.js?

Node.js includes an additional data type called Buffer ( not available in browser\'s JavaScript ). Buffer is mainly used to store **binary data**, while reading from a file or receiving packets over the network.

**Example:**

```js
/**
 * Buffer Data Type
 */
let b = new Buffer(10000);
let str = "----------";

b.write(str); 
console.log( str.length ); // 10
console.log( b.length ); // 10000
```

*Note: Buffer() is deprecated due to security and usability issues.*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. NODE.JS ARCHITECTURE

<br/>

## Q. How does Node.js works?

Node.js is completely event-driven. Basically the server consists of one thread processing one event after another.

A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event ( maybe another request ). When the IO operation is finished, that is another kind of event, and the server will process it ( i.e. continue working on the request ) by executing the callback as soon as it has time.

Node.js Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows Single Threaded with Event Loop Model. Node.js Processing model mainly based on Javascript Event based model with Javascript callback mechanism.  

<p align="center">
  <img src="assets/event-loop.png" alt="Node Architecture" width="800px" />
</p>
  
**Single Threaded Event Loop Model Processing Steps:**

* Clients Send request to Web Server.
* Node.js Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node.js Web Server receives those requests and places them into a Queue. It is known as **Event Queue**.
* Node.js Web Server internally has a Component, known as **Event Loop**. Why it got this name is that it uses indefinite loop to receive requests and process them.
* Event Loop uses Single Thread only. It is main heart of Node.js Platform Processing Model.
* Event Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
* If yes, then pick up one Client Request from Event Queue
    * Starts process that Client Request
    * If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
    * If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        * Checks Threads availability from Internal Thread Pool
        * Picks up one Thread and assign this Client Request to that thread.
        * That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        * Event Loop in turn, sends that Response to the respective Client.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the core modules of Node.js?

Node.js has a set of core modules that are part of the platform and come with the Node.js installation. These modules can be loaded into the program by using the require function.

**Syntax:**

```js
const module = require('module_name');
```

**Example:**

```js
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome to Node.js!');
  res.end();
}).listen(3000);
```

The following table lists some of the important core modules in Node.js.

|Name         |Description                                             |
|-------------|--------------------------------------------------------|
|Assert       |It is used by Node.js for testing itself. It can be accessed with require('assert').|
|Buffer       |It is used to perform operations on raw bytes of data which reside in memory. It can be accessed with require('buffer')|
|Child Process|It is used by node.js for managing child processes. It can be accessed with require('child_process').|
|Cluster      |This module is used by Node.js to take advantage of multi-core systems, so that it can handle more load. It can be accessed with require('cluster').|
|Console      |It is used to write data to console. Node.js has a Console object which contains functions to write data to console. It can be accessed with require('console'). |
|Crypto       |It is used to support cryptography for encryption and decryption. It can be accessed with require('crypto').|
|HTTP         |It includes classes, methods and events to create Node.js http server.|
|URL          |It includes methods for URL resolution and parsing.|
|Query String |It includes methods to deal with query string.|
|Path         |It includes methods to deal with file paths.|
|File System  |It includes classes, methods, and events to work with file I/O.|
|Util         |It includes utility functions useful for programmers.|
|Zlib         |It is used to compress and decompress data. It can be accessed with require('zlib').|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do you understand by Reactor Pattern in Node.js?

**Reactor Pattern** is used to avoid the blocking of the Input/Output operations. It provides us with a handler that is associated with I/O operations. When the I/O requests are to be generated, they get submitted to a demultiplexer, which handles concurrency in avoiding the blocking of the I/O mode and collects the requests in form of an event and queues those events.

**There are two ways in which I/O operations are performed:**

**1. Blocking I/O:** Application will make a function call and pause its execution at a point until the data is received. It is called as "Synchronous".

**2. Non-Blocking I/O:** Application will make a function call, and, without waiting for the results it continues its execution. It is called as "Asynchronous".

<p align="center">
  <img src="/assets/reactor-pattern.jpg" alt="Reactor Pattern" width="600px" />
</p>

**Reactor Pattern comprises of:**

**1. Resources:** They are shared by multiple applications for I/O operations, generally slower in executions.

**2. Synchronous Event De-multiplexer/Event Notifier:** This uses Event Loop for blocking on all resources. When a set of I/O operations completes, the Event De-multiplexer pushes the new events into the Event Queue.

**3. Event Loop and Event Queue:** Event Queue queues up the new events that occurred along with its event-handler, pair.

**4. Request Handler/Application:** This is, generally, the application that provides the handler to be executed for registered events on resources.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the global objects of Node.js?

Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.

These objects are modules, functions, strings and object itself as explained below.

**1. global:**

It is a global namespace. Defining a variable within this namespace makes it globally accessible.

```js
var myvar;
```

**2. process:**

It is an inbuilt global object that is an instance of EventEmitter used to get information on current process. It can also be accessed using require() explicitly.

**3. console:**

It is an inbuilt global object used to print to stdout and stderr.

```js
console.log("Hello World"); // Hello World
```

**4. setTimeout(), clearTimeout(), setInterval(), clearInterval():**

The built-in timer functions are globals

```js
function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var timeoutObj = setTimeout(printHello, 2000);
```

**5. __dirname:**

It is a string. It specifies the name of the directory that currently contains the code.

```js
console.log(__dirname);
```

**6. __filename:**

It specifies the filename of the code being executed. This is the resolved absolute path of this code file. The value inside a module is the path to that module file.

```js
console.log(__filename);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is chrome v8 engine?

V8 is a C++ based open-source JavaScript engine developed by Google. It was originally designed for Google Chrome and Chromium-based browsers ( such as Brave ) in 2008, but it was later utilized to create Node.js for server-side coding.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs ( they all makeup runtime environment ) are provided by the browser.

V8 is known to be a JavaScript engine because it takes JavaScript code and executes it while browsing in Chrome. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Why is LIBUV needed in Node JS?

**libuv** is a C library originally written for Node.js to abstract non-blocking I/O operations. It provides the following features:

* It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
* It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.
* It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming
* It also includes a thread pool for offloading work for some things that can\'t be done asynchronously at the operating system level.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How V8 compiles JavaScript code?

Compilation is the process of converting human-readable code to machine code. There are two ways to compile the code

* **Using an Interpreter**: The interpreter scans the code line by line and converts it into byte code.
* **Using a Compiler**: The Compiler scans the entire document and compiles it into highly optimized byte code.

The V8 engine uses both a compiler and an interpreter and follows **just-in-time (JIT)** compilation to speed up the execution. JIT compiling works by compiling small portions of code that are just about to be executed. This prevents long compilation time and the code being compiles is only that which is highly likely to run.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. NODE.JS EVENTS

<br/>

## Q. What is EventEmitter in Node.js?

The EventEmitter is a class that facilitates communication/interaction between objects in Node.js. The EventEmitter class can be used to create and handle custom events.

EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node\'s built-in modules inherit from EventEmitter including prominent frameworks like Express.js. An emitter object basically has two main features:

* Emitting name events.
* Registering and unregistering listener functions.

**Example:**

```js
/**
 * Callback Events with Parameters
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listener(code, msg) {
   console.log(`status ${code} and ${msg}`);
}

eventEmitter.on('status', listener); // Register listener
eventEmitter.emit('status', 200, 'ok');

// Output
status 200 and ok
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the EventEmitter works in Node.js?

* Event Emitter emits the data in an event called message
* A Listened is registered on the event message
* when the message event emits some data, the listener will get the data

<p align="center">
  <img src="assets/eventEmitter_works.png" alt="EventEmitter" width="400px" />
</p>

**Building Blocks:**

* **.emit()** - this method in event emitter is to emit an event in module
* **.on()** - this method is to listen to data on a registered event in node.js
* **.once()** - it listen to data on a registered event only once.
* **.addListener()** - it checks if the listener is registered for an event.
* **.removeListener()** - it removes the listener for an event.

<p align="center">
  <img src="assets/eventemiitter.png" alt="Building Blocks" width="400px" />
</p>

**Example 01:**

```js
/**
 * Callbacks Events
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listenerOne() {
   console.log('First Listener Executed');
}

function listenerTwo() {
   console.log('Second Listener Executed');
}

eventEmitter.on('listenerOne', listenerOne); // Register for listenerOne
eventEmitter.on('listenerOne', listenerTwo); // Register for listenerOne

// When the event "listenerOne" is emitted, both the above callbacks should be invoked.
eventEmitter.emit('listenerOne');

// Output
First Listener Executed
Second Listener Executed
```

**Example 02:**

```js
/**
 * Emit Events Once
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listenerOnce() {
   console.log('listenerOnce fired once');
}

eventEmitter.once('listenerOne', listenerOnce); // Register listenerOnce
eventEmitter.emit('listenerOne');

// Output
listenerOnce fired once
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the EventEmitter methods available in Node.js?

|EventEmitter Methods | Description         |
|---------------------|---------------------|
|.addListener(event, listener) |Adds a listener to the end of the listeners array for the specified event.|
|.on(event, listener) |Adds a listener to the end of the listeners array for the specified event. It can also be called as an alias of emitter.addListener()|
|.once(event, listener)|This listener is invoked only the next time the event is fired, after which it is removed.|
|.removeListener(event, listener)|Removes a listener from the listener array for the specified event.|
|.removeAllListeners([event])|Removes all listeners, or those of the specified event.|
|.setMaxListeners(n)  |By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.|
|.getMaxListeners()   |Returns the current maximum listener value for the emitter which is either set by emitter.setMaxListeners(n) or defaults to EventEmitter.defaultMaxListeners.|
|.listeners(event)    |Returns a copy of the array of listeners for the specified event.|
|.emit(event[, arg1][, arg2][, ...]) |Raise the specified events with the supplied arguments.|
|.listenerCount(type) |Returns the number of listeners listening to the type of event.|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How the Event Loop Works in Node.js?

The **event loop** allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by offloading operations to the system kernel whenever possible.

Node.js is a single-threaded application, but it can support **concurrency** via the concept of **event** and **callbacks**. Every API of Node.js is asynchronous and being single-threaded, they use **async function calls** to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

**Features of Event Loop:**

* Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
* The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
* The event loop allows us to use callbacks and promises.
* The event loop executes the tasks starting from the oldest first.

<p align="center">
  <img src="assets/nodejs-event-loop.png" alt="Event Loop" width="600px" />
</p>

**Example:**

```js
/**
 * Event loop in Node.js
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler as follows
const connectHandler = function connected() {
   console.log('connection succesful.');
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');
console.log("Program Ended.");

// Output
Connection succesful.
Data received succesfully.
Program Ended.
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How are event listeners created in Node.JS?

An array containing all eventListeners is maintained by Node. Each time **.on()** function is executed, a new event listener is added to that array. When the concerned event is emitted, each **eventListener** that is present in the array is called in a sequential or synchronous manner.

The event listeners are called in a synchronous manner to avoid logical errors, race conditions etc. The total number of listeners that can be registered for a particular event, is controlled by **.setMaxListeners(n)**. The default number of listeners is 10.

```js
emitter.setMaxlisteners(12);
```

As an event Listener once registered, exists throughout the life cycle of the program. It is important to detach an event Listener once its no longer needed to avoid memory leaks. Functions like **.removeListener()**, **.removeAllListeners()** enable the removal of listeners from the listeners Array.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between process.nextTick() and setImmediate()?

**1. process.nextTick():**

The process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed.

**2. setImmediate():**

The setImmediate() method is used to execute a function right after the current event loop finishes. It is callback function is placed in the check phase of the next event queue.

**Example:**

```js
/**
 * setImmediate() and process.nextTick()
 */
setImmediate(() => {
  console.log("1st Immediate");
});

setImmediate(() => {
  console.log("2nd Immediate");
});

process.nextTick(() => {
  console.log("1st Process");
});

process.nextTick(() => {
  console.log("2nd Process");
});

// First event queue ends here
console.log("Program Started");

// Output
Program Started
1st Process
2nd Process
1st Immediate
2nd Immediate
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is callback function in Node.js?

A callback is a function which is called when a task is completed, thus helps in preventing any kind of blocking and a callback function allows other code to run in the meantime.

Callback is called when task get completed and is asynchronous equivalent for a function. Using Callback concept, Node.js can process a large number of requests without waiting for any function to return the result which makes Node.js highly scalable.

**Example:**

```js
/**
 * Callback Function
 */
function message(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// Callback function
function callMe() {
  console.log("I am callback function");
}

// Passing function as an argument
message("Node.JS", callMe);
```

**Output:**

```js
Hi Node.JS
I am callback function
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the difference between Events and Callbacks?

**1. Events:**

Node.js **events** module which emits named events that can cause corresponding functions or callbacks to be called. Functions ( callbacks ) listen or subscribe to a particular event to occur and when that event triggers, all the callbacks subscribed to that event are fired one by one in order to which they were registered.

All objects that emit events are instances of the **EventEmitter** class. The event can be emitted or listen to an event with the help of EventEmitter

**Example:**

```js
/**
 * Events Module
 */
const event = require('events');  
const eventEmitter = new event.EventEmitter();  
  
// add listener function for Sum event  
eventEmitter.on('Sum', function(num1, num2) {  
    console.log('Total: ' + (num1 + num2));  
});  

// call event  
eventEmitter.emit('Sum', 10, 20);

// Output
Total: 30
```

**2. Callbacks:**

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**Example:**

```js
/**
 * Callbacks
 */
function sum(number) {
  console.log('Total: ' + number);
}

function calculator(num1, num2, callback) {
  let total = num1 + num2;
  callback(total);
}

calculator(10, 20, sum);

// Output
Total: 30
```

Callback functions are called when an asynchronous function returns its result, whereas event handling works on the **observer pattern**. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is an error-first callback?

The pattern used across all the asynchronous methods in Node.js is called *Error-first Callback*. Here is an example:

```js
fs.readFile( "file.json", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});
```

Any asynchronous method expects one of the arguments to be a callback. The full callback argument list depends on the caller method, but the first argument is always an error object or null. When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement. The event happens after the JavaScript engine leaves the try block.

In the preceding example, if any exception is thrown during the reading of the file, it lands on the callback function as the first and mandatory parameter.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is callback hell in Node.js?

The callback hell contains complex nested callbacks. Here, every callback takes an argument that is a result of the previous callbacks. In this way, the code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.

An asynchronous function is one where some external activity must complete before a result can be processed; it is "asynchronous" in the sense that there is an unpredictable amount of time before a result becomes available. Such functions require a callback function to handle errors and process the result.

**Example:**

```js
/**
 * Callback Hell
 */
firstFunction(function (a) {
  secondFunction(a, function (b) {
    thirdFunction(b, function (c) {
      // And so on…
    });
  });
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to avoid callback hell in Node.js?

**1. Managing callbacks using Async.js:**  

`Async` is a really powerful npm module for managing asynchronous nature of JavaScript. Along with Node.js, it also works for JavaScript written for browsers.

Async provides lots of powerful utilities to work with asynchronous processes under different scenarios.

```js
npm install --save async
```

**2. Managing callbacks hell using promises:**  

Promises are alternative to callbacks while dealing with asynchronous code. Promises return the value of the result or an error exception. The core of the promises is the `.then()` function, which waits for the promise object to be returned.

The `.then()` function takes two optional functions as arguments and depending on the state of the promise only one will ever be called. The first function is called when the promise if fulfilled (A successful result). The second function is called when the promise is rejected.

**Example:**

```js
/**
 * Promises
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});
```

**3. Using Async Await:**  

Async await makes asynchronous code look like it\'s synchronous. This has only been possible because of the reintroduction of promises into node.js. Async-Await only works with functions that return a promise.

**Example:**

```js
/**
 * Async Await
 */
const getrandomnumber = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 20));
        }, 1000);
    });
}

const addRandomNumber = async function(){
    const sum = await getrandomnumber() + await getrandomnumber();
    console.log(sum);
}

addRandomNumber();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is typically the first argument passed to a callback handler?

The first parameter of the callback is the **error** value. If the function hits an error, then they typically call the **callback** with the first parameter being an Error object.

**Example:**

```js
/**
 * Callback Handler
 */
const Division = (numerator, denominator, callback) => {
    if (denominator === 0) {
      callback(new Error('Divide by zero error!'));
    } else {
      callback(null, numerator / denominator);
    }
};

// Function Call
Division(5, 0, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`Result: ${result}`);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the timing features of Node.js?

The Timers module in Node.js contains functions that execute code after a set period of time. Timers do not need to be imported via require(), since all the methods are available globally to emulate the browser JavaScript API.

Some of the functions provided in this module are

**1. setTimeout():**

This function schedules code execution after the assigned amount of time ( in milliseconds ). Only after the timeout has occurred, the code will be executed. This method returns an ID that can be used in **clearTimeout()** method.

**Syntax:**

```js
setTimeout(callback, delay, args )
```

**Example:**

```js
function printMessage(arg) {
  console.log(`${arg}`);
}

setTimeout(printMessage, 1000, 'Display this Message after 1 seconds!');
```

**2. setImmediate():**

The setImmediate() method executes the code at the end of the current event loop cycle. The function passed in the setImmediate() argument is a function that will be executed in the next iteration of the event loop.

**Syntax:**

```js
setImmediate(callback, args)
```

**Example:**

```js
// Setting timeout for the function
setTimeout(function () {
    console.log('setTimeout() function running...');
}, 500);

// Running this function immediately before any other
setImmediate(function () {
   console.log('setImmediate() function running...');
});

// Directly printing the statement
console.log('Normal statement in the event loop');

// Output
// Normal statement in the event loop
// setImmediate() function running...
// setTimeout() function running...
```

**3. setInterval():**

The setInterval() method executes the code after the specified interval. The function is executed multiple times after the interval has passed. The function will keep on calling until the process is stopped externally or using code after specified time period. The clearInterval() method can be used to prevent the function from running.

**Syntax:**

```js
setInterval(callback, delay, args)
```

**Example:**

```js
setInterval(function() {
    console.log('Display this Message intervals of 1 seconds!');
}, 1000);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to implement a sleep function in Node.js?

One way to delay execution of a function in Node.js is to use async/await with promises to delay execution without callbacks function. Just put the code you want to delay in the callback. For example, below is how you can wait 1 second before executing some code.

**Example:**

```js
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function run() {
  await delay(1000);
  console.log("This printed after about 1 second");
}

run();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. NODE.JS FILE SYSTEM

<br/>

## Q. How Node.js read the content of a file?

The "normal" way in Node.js is probably to read in the content of a file in a non-blocking, asynchronous way. That is, to tell Node to read in the file, and then to get a callback when the file-reading has been finished. That would allow us to handle several requests in parallel.

Common use for the File System module:

* Read files
* Create files
* Update files
* Delete files
* Rename files  

**Example:** Read Files

```html
<!-- index.html -->
<html>
<body>
  <h1>File Header</h1>
  <p>File Paragraph.</p>
</body>
</html>
```

```js
/**
 * read_file.js
 */
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. NODE.JS STREAMS

<br/>

## Q. How many types of streams are present in node.js?

Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
There are four types of streams

* **Readable** − Stream which is used for read operation.
* **Writable** − Stream which is used for write operation.
* **Duplex** − Stream which can be used for both read and write operation.
* **Transform** − A type of duplex stream where the output is computed based on input.  

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.  

**Methods:**

* **data** − This event is fired when there is data is available to read.
* **end** − This event is fired when there is no more data to read.
* **error** − This event is fired when there is any error receiving or writing data.
* **finish** − This event is fired when all the data has been flushed to underlying system.

**1. Reading from a Stream:**

```js
const fs = require("fs");
let data = "";

// Create a readable stream
const readerStream = fs.createReadStream("file.txt");

// Set the encoding to be utf8.
readerStream.setEncoding("UTF8");

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});
```

**2. Writing to a Stream:**

```js
const fs = require("fs");
const data = "File writing to a stream example";

// Create a writable stream
const writerStream = fs.createWriteStream("file.txt");

// Write the data to stream with encoding to be utf8
writerStream.write(data, "UTF8");

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on("finish", function () {
  console.log("Write completed.");
});

writerStream.on("error", function (err) {
  console.log(err.stack);
});
```

**3. Piping the Streams:**

Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.

```js
const fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream('input.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
```

**4. Chaining the Streams:**

Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.  

```js
const fs = require("fs");
const zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to handle large data in Node.js?

The Node.js stream feature makes it possible to process large data continuously in smaller chunks without keeping it all in memory. One benefit of using streams is that it saves time, since you don\'t have to wait for all the data to load before you start processing. This also makes the process less memory-intensive.

Some of the use cases of Node.js streams include:

* Reading a file that\'s larger than the free memory space, because it\'s broken into smaller chunks and processed by streams. For example, a browser processes videos from streaming platforms like Netflix in small chunks, making it possible to watch videos immediately without having to download them all at once.

* Reading large log files and writing selected parts directly to another file without downloading the source file. For example, you can go through traffic records spanning multiple years to extract the busiest day in a given year and save that data to a new file.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 8. NODE.JS MULTITHREADING

<br/>

## Q. Is Node.js entirely based on a single-thread?

Yes, it is true that Node.js processes all requests on a single thread. But it is just a part of the theory behind Node.js design. In fact, more than the single thread mechanism, it makes use of events and callbacks to handle a large no. of requests asynchronously.

Moreover, Node.js has an optimized design which utilizes both JavaScript and C++ to guarantee maximum performance. JavaScript executes at the server-side by Google Chrome v8 engine. And the C++ lib UV library takes care of the non-sequential I/O via background workers.

To explain it practically, let\'s assume there are 100s of requests lined up in Node.js queue. As per design, the main thread of Node.js event loop will receive all of them and forwards to background workers for execution. Once the workers finish processing requests, the registered callbacks get notified on event loop thread to pass the result back to the user.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does Node.js handle child threads?

Node.js is a single threaded language which in background uses multiple threads to execute asynchronous code.
Node.js is non-blocking which means that all functions ( callbacks ) are delegated to the event loop and they are ( or can be ) executed by different threads. That is handled by Node.js run-time.

* Nodejs Primary application runs in an event loop, which is in a single thread.
* Background I/O is running in a thread pool that is only accessible to C/C++ or other compiled/native modules and mostly transparent to the JS.
* Node v11/12 now has experimental worker_threads, which is another option.
* Node.js does support forking multiple processes ( which are executed on different cores ).
* It is important to know that state is not shared between master and forked process.
* We can pass messages to forked process ( which is different script ) and to master process from forked process with function send.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?

Since Node.js is by default a single thread application, it will run on a single processor core and will not take full advantage of multiple core resources. However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

The cluster module helps to spawn new processes on the operating system. Each process works independently, so you cannot use shared state between child processes. Each process communicates with the main process by IPC and pass server handles back and forth.

Cluster supports two types of load distribution:

* The main process listens on a port, accepts new connection and assigns it to a child process in a round robin fashion.
* The main process assigns the port to a child process and child process itself listen the port.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the cluster module work in Node.js?

The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.

Node.js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.

<p align="center">
  <img src="assets/nodejs_cluster.png" alt="Load Balancer" width="400px" />
</p>

**Example:**

```js
/**
 * Cluster Module
 */
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log(`Master process is running...`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process started running`);
}
```

**Output:**

```js
Master process is running...
Worker process started running
Worker process started running
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain cluster methods supported by Node.js?

|Method         |Description            |
|---------------|-----------------------|
|fork()         |Creates a new worker, from a master|
|isMaster       |Returns true if the current process is master, otherwise false|
|isWorker       |Returns true if the current process is worker, otherwise false|
|id             |A unique id for a worker|
|process        |Returns the global Child Process|
|send()         |sends a message to a master or a worker|
|kill()         |Kills the current worker|
|isDead         |Returns true if the worker\'s process is dead, otherwise false|
|settings       |Returns an object containing the cluster\'s settings|
|worker         |Returns the current worker object|
|workers        |Returns all workers of a master|
|exitedAfterDisconnect |Returns true if a worker was exited after disconnect, or the kill method|
|isConnected    |Returns true if the worker is connected to its master, otherwise false|
|disconnect()   |Disconnects all workers|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to make use of all CPUs in Node.js?

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a **cluster** of Node.js processes to handle the load. The cluster module allows easy creation of child processes that all share server ports.

The cluster module supports two methods of distributing incoming connections.

* The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

* The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

**Example:**

```js
/**
 * Server Load Balancing in Node.js
 */
const cluster = require("cluster");
const express = require("express");
const os = require("os");

if (cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`);

  // Get the number of available cpu cores
  const nCPUs = os.cpus().length;
  // Fork worker processes for each available CPU core
  for (let i = 0; i < nCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an Express server
  const app = express();
  app.get("/", (req, res) => {
    res.send("Node is Running...");
  });

  app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000/`);
  });

  console.log(`Worker PID ${process.pid} started`);
}
```

Running Node.js will now share port 3000 between the workers:

**Output:**

```js
Master PID 13972 is running
Worker PID 5680 started
App listening at http://localhost:3000/
Worker PID 14796 started
...
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. If Node.js is single threaded then how it handles concurrency?

Node js despite being single-threaded is the asynchronous nature that makes it possible to handle concurrency and perform multiple I/O operations at the same time. Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations.

As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO (First In First Out) order. It executes a task only when there is no ongoing task in the call stack. The call stack works in LIFO(Last In First Out) order. The event loop continuously checks the call stack to check if there is any task that needs to be run. Now whenever the event loop finds any function, it adds it to the stack and runs in order.  

**Example:**

```js
/**
 * Concurrency
 */
function add(a, b) {
  return a + b;
}

function print(n) {
  console.log(`Two times the number ${n} is ` + add(n, n));
}

print(5);
```

Here, the function **print(5)** will be invoked and will push into the call stack. When the function is called, it starts consoling the statement inside it but before consoling the whole statement it encounters another function add(n,n) and suspends its current execution, and pushes the add function into the top of the call stack.

Now the function will return the addition **a+b** and then popped out from the stack and now the previously suspended function will start running and will log the output to console and then this function too will get pop from the stack and now the stack is empty. So this is how a call stack works.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to kill child processes that spawn their own child processes in Node.js?

If a child process in Node.js spawn their own child processes, kill() method will not kill the child process\'s own child processes. For example, if I start a process that starts it\'s own child processes via child_process module, killing that child process will not make my program to quit.

```js
const spawn = require('child_process').spawn;
const child = spawn('my-command');

child.kill();
```

The program above will not quit if `my-command` spins up some more processes.

**PID range hack:**

We can start child processes with {detached: true} option so those processes will not be attached to main process but they will go to a new group of processes. Then using process.kill(-pid) method on main process we can kill all processes that are in the same group of a child process with the same pid group. In my case, I only have one processes in this group.

```js
const spawn = require('child_process').spawn;
const child = spawn('my-command', {detached: true});

process.kill(-child.pid);
```

Please note - before pid. This converts a pid to a group of pids for process kill() method.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is load balancer and how it works?

A load balancer is a process that takes in HTTP requests and forwards these HTTP requests to one of a collection of servers. Load balancers are usually used for performance purposes: if a server needs to do a lot of work for each request, one server might not be enough, but 2 servers alternating handling incoming requests might.

**1. Using cluster module:**

NodeJS has a built-in module called Cluster Module to take the advantage of a multi-core system. Using this module you can launch NodeJS instances to each core of your system. Master process listening on a port to accept client requests and distribute across the worker using some intelligent fashion. So, using this module you can utilize the working ability of your system.

**2. Using PM2:**

PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without the downtime and to facilitate common system admin tasks.

```js
$ pm2 start app.js -i max --name "Balancer"
```

This command will run the app.js file on the cluster mode to the total no of core available on your server.

<p align="center">
  <img src="assets/pm2-load-balancer.png" alt="Load Balancing using PM2" width="500px" />
</p>

**3. Using Express module:**

The below code basically creates two Express Servers to handle the request

```js
const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();

// Parse the request body as JSON
app1.use(body.json());
app2.use(body.json());

const handler = serverNum => (req, res) => {
  console.log(`server ${serverNum}`, req.method, req.url, req.body);
  res.send(`Hello from server ${serverNum}!`);
};

// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));

app1.listen(3000);
app2.listen(3001);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is difference between `spawn()` and `fork()` methods in Node.js?

**1. spawn():**

In Node.js, spawn() launches a new process with the available set of commands. This doesn\'t generate a new V8 instance only a single copy of the node module is active on the processor. It is used when we want the child process to return a large amount of data back to the parent process.

When spawn is called, it creates a **streaming interface** between the parent and child process. Streaming Interface — one-time buffering of data in a binary format.

**Example:**

```js
/**
 * The spawn() method
 */
const { spawn } = require("child_process");
const child = spawn("dir", ["D:\\empty"], { shell: true });

child.stdout.on("data", (data) => {
  console.log(`stdout ${data}`);
});
```

Output

```js
stdout  Volume in drive D is Windows
 Volume Serial Number is 76EA-3749

stdout
 Directory of D:\
```

**2. fork():**

The **fork()** is a particular case of **spawn()** which generates a new V8 engines instance. Through this method, multiple workers run on a single node code base for multiple tasks. It is used to separate computation-intensive tasks from the main event loop.

When fork is called, it creates a **communication channel** between the parent and child process Communication Channel — messaging

**Example:**

```js
/**
 * The fork() method
 */
const { fork } = require("child_process");

const forked = fork("child.js");

forked.on("message", (msg) => {
  console.log("Message from child", msg);
});

forked.send({ message: "fork() method" });
```

```js
/**
 * child.js
 */
process.on("message", (msg) => {
  console.log("Message from parent:", msg);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);
```

Output:

```js
Message from parent: { message: 'fork() method' }
Message from child { counter: 0 }
Message from child { counter: 1 }
Message from child { counter: 2 }
...
...
Message from child { counter: n }
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is daemon process?

A daemon is a program that runs in background and has no controlling terminal. They are often used to provide background services. For example, a web-server or a database server can run as a daemon.

When a daemon process is initialized:

* It creates a child of itself and proceeds to shut down all standard descriptors (error, input, and output) from this particular copy.
* It closes the parent process when the user closes the session/terminal window.
* Leaves the child process running as a daemon.

**Daemonize Node.js process:**

* [Forever](https://github.com/foreversd/forever)
* [PM2](https://github.com/Unitech/pm2)
* [Nodemon](https://github.com/remy/nodemon/)
* [Supervisor](https://github.com/Supervisor/supervisor)
* [Docker](https://github.com/docker)

**Example:** Using an instance of Forever from Node.js

```js
const forever = require("forever");

const child = new forever.Forever("your-filename.js", {
  max: 3,
  silent: true,
  args: [],
});

child.on("exit", this.callback);
child.start();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. NODE.JS WEB MODULE

<br/>

## Q. How to use JSON Web Token (JWT) for authentication in Node.js?

JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

There are some advantages of using JWT for authorization:

* Purely stateless. No additional server or infra required to store session information.
* It can be easily shared among services.

**Syntax:**

```js
jwt.sign(payload, secretOrPrivateKey, [options, callback])
```

* **Header** - Consists of two parts: the type of token (i.e., JWT) and the signing algorithm (i.e., HS512)
* **Payload** - Contains the claims that provide information about a user who has been authenticated along with other information such as token expiration time.
* **Signature** - Final part of a token that wraps in the encoded header and payload, along with the algorithm and a secret

**Installation:**

```js
npm install jsonwebtoken bcryptjs --save
```

**Example**:

```js
/**
 * AuthController.js
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../user/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', function(req, res) {
  
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    let token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});
```

**config.js:**

```js
/**
 * config.js
 */
module.exports = {
  'secret': 'supersecret'
};
```

The `jwt.sign()` method takes a payload and the secret key defined in `config.js` as parameters. It creates a unique string of characters representing the payload. In our case, the payload is an object containing only the id of the user.

**Reference:**

* *[https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to build a microservices architecture with Node.js?

Microservices are a style of **Service Oriented Architecture (SOA)** where the app is structured on an assembly of interconnected services. With microservices, the application architecture is built with lightweight protocols. The services are finely seeded in the architecture. Microservices disintegrate the app into smaller services and enable improved modularity.

<p align="center">
  <img src="assets/monolithic-and-microservices-architecture.jpg" alt="Microservices" width="400px" />
</p>

There are few things worth emphasizing about the superiority of microservices, and distributed systems generally, over monolithic architecture:

* **Modularity** — responsibility for specific operations is assigned to separate pieces of the application
* **Uniformity** — microservices interfaces (API endpoints) consist of a base URI identifying a data object and standard HTTP methods (GET, POST, PUT, PATCH and DELETE) used to manipulate the object
* **Robustness** — component failures cause only the absence or reduction of a specific unit of functionality
* **Maintainability** — system components can be modified and deployed independently
* **Scalability** — instances of a service can be added or removed to respond to changes in demand.
* **Availability** — new features can be added to the system while maintaining 100% availability.
* **Testability** — new solutions can be tested directly in the production environment by implementing them for  restricted segments of users to see how they behave in real life.

**Example:** Creating Microservices with Node.js

**Step 01:** Creating a Server to Accept Requests

This file is creating our server and assigns routes to process all requests.

```js
//  server.js

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
```

**Step 02:** Defining the routes

The next step is to define the routes for the microservices and then assign each to a target in the controller. We have two endpoints. One endpoint called "about" that returns information about the application. And a "distance" endpoint that includes two path parameters, both Zip Codes of the Lego store. This endpoint returns the distance, in miles, between these two Zip Codes.

```js
const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/distance/:zipcode1/:zipcode2')
       .get(controller.getDistance);
};
```

**Step 03:** Adding Controller Logic

Within the controller file, we are going to create a controller object with two properties. Those properties are the functions to handle the requests we defined in the routes module.

```js
const properties = require('../package.json')
const distance = require('../service/distance');

const controllers = {
   about: function(req, res) {
       let aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getDistance: function(req, res) {
           distance.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
};

module.exports = controllers;
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How microservices communicate with each other?

Microservices are an architectural style and comprises of small modules/elements which are independent of each other. At times they are interdependent on other microservices or even a database. Breaking down applications into smaller elements brings scalability and efficiency to the structure.

The microservices are distributed and communicate with each other by inter-service communication on network level. Each microservice has its own instance and process. Therefore, services must interact using an inter-service communication protocols like HTTP, gRPC or message brokers AMQP protocol.

<p align="center">
  <img src="assets/microservices-communication.png" alt="Microservices Communication" width="500px" />
</p>

Client and services communicate with each other with many different types of communication. Mainly, those types of communications can be classified in two axes.

**1. Synchronous Communication:**

The Synchronous communication is using HTTP or gRPC protocol for returning sync response. The client sends a request and waits for a response from the service. So that means client code block their thread, until the response reach from the server.

**2. Asynchronous Communication:**

In Asynchronous communication, the client sends a request but it doesn\'t wait for a response from the service. The most popular protocol for this Asynchronous communications is AMQP (Advanced Message Queuing Protocol). So with using AMQP protocols, the client sends the message with using message broker systems like Kafka and RabbitMQ queue. The message producer usually does not wait for a response. This message consume from the subscriber systems in async way, and no one waiting for response suddenly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. NODE.JS MIDDLEWARE

<br/>

## Q. What are the middleware functions in Node.js?

Middleware functions are functions that have access to the **request object (req)**, the **response object (res)**, and the `next` function in the application\'s request-response cycle.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

The following figure shows the elements of a middleware function call:

<p align="center">
  <img src="assets/express-mw.png" alt="Middleware functions" width="800px" />
</p>

Middleware functions that return a Promise will call `next(value)` when they reject or throw an error. `next` will be called with either the rejected value or the thrown Error.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain the use of next in Node.js?

The **next** is a function in the Express router which executes the middleware succeeding the current middleware.

**Example:**

To load the middleware function, call `app.use()`, specifying the middleware function. For example, the following code loads the **myLogger** middleware function before the route to the root path (/).

```js
/**
 * myLogger
 */
const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/next-function-nq042s)**

*Note: The `next()` function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The `next()` function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Why to use Express.js?

Express.js is a Node.js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

**Features of Express.js:**

* **Fast Server-Side Development:** The features of node js help express saving a lot of time.
* **Middleware:** Middleware is a request handler that has access to the application\'s request-response cycle.
* **Routing:** It refers to how an application\'s endpoint\'s URLs respond to client requests.
* **Templating:** It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.
* **Debugging:** Express makes it easier as it identifies the exact part where bugs are.

The Express.js framework makes it very easy to develop an application which can be used to handle multiple types of requests like the GET, PUT, and POST and DELETE requests.

**Example:**

```js
/**
 * Simple server using Express.js
 */
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const server = app.listen(3000, function () {});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Why should you separate Express 'app' and 'server'?

Keeping the API declaration separated from the network related configuration (port, protocol, etc) allows testing the API in-process, without performing network calls, with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code. It also allows deploying the same API under flexible and different network conditions.

API declaration, should reside in app.js:

```js
/**
 * app.js
 */
const app = express();

app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

Server network declaration

```js
/**
 * server.js
 */
const app = require('../app');
const http = require('http');


// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


// Create HTTP server.
const server = http.createServer(app);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are some of the most popular packages of Node.js?

| Package  | Description                                      |
|----------|--------------------------------------------------|
|async     | Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript|
|axios     |Axios is a promise-based HTTP Client for node.js and the browser.|
|autocannon|AutoCannon is a tool for performance testing and a tool for benchmarking.|
|browserify|Browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single `<script>` tag|
|bower     |Bower is a package manager for the web It works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you\'re looking for|
|csv       |csv module has four sub modules which provides CSV generation, parsing, transformation and serialization for Node.js|
|debug     |Debug is a tiny node.js debugging utility modelled after node core\'s debugging technique|
|express   |Express is a fast, un-opinionated, minimalist web framework. It provides small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs|
|grunt     |is a JavaScript Task Runner that facilitates creating new projects and makes performing repetitive but necessary tasks such as linting, unit testing, concatenating and minifying files (among other things) trivial|
|http-server|is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it\'s simple and hackable enough to be used for testing, local development, and learning|
|inquirer  |A collection of common interactive command line user interfaces|
|jshint    |Static analysis tool to detect errors and potential problems in JavaScript code and to enforce your team\'s coding conventions|
|koa       |Koa is web app framework. It is an expressive HTTP middleware for node.js to make web applications and APIs more enjoyable to write|
|lodash    |The lodash library exported as a node module. Lodash is a modern JavaScript utility library delivering modularity, performance, & extras|
|less      |The less library exported as a node module|
|moment    |A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates|
|mongoose  |It is a MongoDB object modeling tool designed to work in an asynchronous environment|
|mongoDB   |The official MongoDB driver for Node.js. It provides a high-level API on top of mongodb-core that is meant for end users|
|nodemon   |It is a simple monitor script for use during development of a node.js app, It will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application|
|nodemailer|This module enables e-mail sending from a Node.js applications|
|passport  |A simple, unobtrusive authentication middleware for Node.js. Passport uses the strategies to authenticate requests. Strategies can range from verifying username and password credentials or authentication using OAuth or OpenID|
|socket.io |Its a node.js realtime framework server|
|sails     |Sails is a API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io)|
|underscore|Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects|
|validator |A nodejs module for a library of string validators and sanitizers|
|winston   |A multi-transport async logging library for Node.js|
|ws        |A simple to use, blazing fast and thoroughly tested websocket client, server and console for node.js|
|xml2js    |A Simple XML to JavaScript object converter|
|yo        |A CLI tool for running Yeoman generators|

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How can you make sure your dependencies are safe?

The only option is to automate the update / security audit of your dependencies. For that there are free and paid options:

1. npm outdated
2. Trace by RisingStack
3. NSP
4. GreenKeeper
5. Snyk
6. npm audit
7. npm audit fix

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the security mechanisms available in Node.js?

**1. Helmet module:**

[Helmet](https://www.npmjs.com/package/helmet) helps to secure your Express applications by setting various HTTP headers, like:

* X-Frame-Options to mitigates clickjacking attacks,
* Strict-Transport-Security to keep your users on HTTPS,
* X-XSS-Protection to prevent reflected XSS attacks,
* X-DNS-Prefetch-Control to disable browsers DNS prefetching.

```js
/**
 * Helmet
 */
const express = require('express')
const helmet = require('helmet')
const app = express()

app.use(helmet())
```

**2. JOI module:**

Validating user input is one of the most important things to do when it comes to the security of your application. Failing to do it correctly can open up your application and users to a wide range of attacks, including command injection, SQL injection or stored cross-site scripting.

To validate user input, one of the best libraries you can pick is joi. [Joi](https://www.npmjs.com/package/joi) is an object schema description language and validator for JavaScript objects.

```js
/**
 * Joi
 */
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token')

// Return result
const result = Joi.validate({
    username: 'abc',
    birthyear: 1994
}, schema)
// result.error === null -> valid
```

**3. Regular Expressions:**

Regular Expressions are a great way to manipulate texts and get the parts that you need from them. However, there is an attack vector called Regular Expression Denial of Service attack, which exposes the fact that most Regular Expression implementations may reach extreme situations for specially crafted input, that cause them to work extremely slowly.

The Regular Expressions that can do such a thing are commonly referred as Evil Regexes. These expressions contain:
*grouping with repetition,
*inside the repeated group:
    *repetition, or
    *alternation with overlapping  

Examples of Evil Regular Expressions patterns:

```js
(a+)+
([a-zA-Z]+)*
(a|aa)+
```

**4. Security.txt:**

Security.txt defines a standard to help organizations define the process for security researchers to securely disclose security vulnerabilities.

```js
const express = require('express')
const securityTxt = require('express-security.txt')

const app = express()

app.get('/security.txt', securityTxt({
  // your security address
  contact: 'email@example.com',
  // your pgp key
  encryption: 'encryption',
  // if you have a hall of fame for securty resourcers, include the link here
  acknowledgements: 'http://acknowledgements.example.com'
}))
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is npm in Node.js?

NPM stands for Node Package Manager. It provides following two main functionalities.

* It works as an Online repository for node.js packages/modules which are present at <nodejs.org>.
* It works as Command line utility to install packages, do version management and dependency management of Node.js packages.
NPM comes bundled along with Node.js installable. We can verify its version using the following command-

```js
npm --version
```

NPM helps to install any Node.js module using the following command.

```js
npm install <Module Name>
```

For example, following is the command to install a famous Node.js web framework module called express-

```js
npm install express
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Why npm shrinkwrap is useful?

NPM shrinkwrap lets you lock down the ver­sions of installed pack­ages and their descen­dant pack­ages. It helps you use same package versions on all environments (development, staging, production) and also improve download and installation speed.

After installing packages using npm install or npm install `<package-name>` and updating your **node_modules** folder, you should run

```js
npm shrinkwrap
```

It should create new **npm-shrinkwrap.json** file with information about all packages you use. Next time, when someone calls **npm install**, it will install packages from **npm-shrinkwrap.json** and you will have the same environment on all machines.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to handle file upload in Node.js?

File can be uploaded to the server using Multer module. Multer is a Node.js middleware which is used for handling multipart/form-data, which is mostly used library for uploading files.

**1. Installing the dependencies:**

```js
npm install express body-parser multer --save
```

**2. server.js:**

```js
/**
 * File Upload in Node.js
 */
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();

// for text/number data transfer between clientg and server
app.use(bodyParser());

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage }).single("userPhoto");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// POST: upload for single file upload
app.post("/api/photo", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
```

**3. index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Multer-File-Upload</title>
</head>
<body>
    <h1>MULTER File Upload | Single File Upload</h1> 

    <form id = "uploadForm"
         enctype = "multipart/form-data"
         action = "/api/photo"
         method = "post"
    >
      <input type="file" name="userPhoto" />
      <input type="submit" value="Upload Image" name="submit">
    </form>
</body>
</html>
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain the terms body-parser, cookie-parser, morgan, nodemon, pm2, serve-favicon, cors, dotenv, fs-extra, moment in Express.js?

**1. body-parser:**

`body-parser` extract the entire body portion of an incoming request stream and exposes it on `req.body`. The body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

**Example:**

```js
npm install body-parser
```

```js
/**
 * body-parser
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post("/login", urlencodedParser, function (req, res) {
  res.send("welcome, " + req.body.username);
});

// POST /api/users gets JSON bodies
app.post("/api/users", jsonParser, function (req, res) {
  // create user in req.body
});
```

**2. cookie-parser:**

A cookie is a piece of data that is sent to the client-side with a request and is stored on the client-side itself by the Web Browser the user is currently using.

The `cookie-parser` middleware\'s cookieParser function takes a `secret` string or array of strings as the first argument and an `options` object as the second argument.

**Installation:**

```js
npm install cookie-parser
```

**Example:**

```js
/**
 * cookie-parser
 */
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(3000)
```

**3. morgan:**

HTTP request logger middleware for node.js.

**Installation:**

```js
npm install morgan
```

**Example:**

```js
/**
 * Writing logs to a file
 */
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const app = express()

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
  res.send('hello, world!')
})
```

**4. nodemon:**

Nodemon is a utility that will monitor for any changes in source and automatically restart your server.

**Installation:**

```js
npm install -g nodemon
```

**Example:**

```js
{
  // ...
  "scripts": {
    "start": "nodemon server.js"
  },
  // ...
}
```

**5. pm2:**

**P**(rocess) **M**(anager) **2** (pm2) is a production process manager for Node.js applications with a built-in load balancer. It allows to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

**Installation:**

```js
npm install pm2 -g
```

**Start an application:**

```js
pm2 start app.js
```

**Reference:**

* *[https://pm2.keymetrics.io/docs/usage/quick-start/](https://pm2.keymetrics.io/docs/usage/quick-start/)*

**6. serve-favicon:**

Node.js middleware for serving a favicon. It create new middleware to serve a favicon from the given path to a favicon file. **path** may also be a Buffer of the icon to serve.

**Installation:**

```js
npm install serve-favicon
```

**Example:**

```js
/**
 * serve-favicon
 */
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Add your routes here, etc.

app.listen(3000)
```

**7. cors:**

**C**ross-**O**rigin **R**esource **S**haring (CORS) headers allow apps running in the browser to make requests to servers on different domains (also known as origins). CORS headers are set on the server side - the HTTP server is responsible for indicating that a given HTTP request can be cross-origin.

**Installation:**

```js
npm install cors
```

**Example:**

```js
/**
 * Enable CORS for a Single Route
 */
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

**8. dotenv:**

When a NodeJs application runs, it injects a global variable called `process.env` which contains information about the state of environment in which the application is running. The `dotenv` loads environment variables stored in the `.env` file into `process.env`.

**Installation:**

```js
npm install dotenv
```

**Usage:**

```js
// .env

DB_HOST=localhost
DB_USER=admin
DB_PASS=root
```

```js
/**
 * config.js
 */
const db = require('db')

db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

**9. fs-extra:**

`fs-extra` contains methods that aren\'t included in the vanilla Node.js fs package. Such as recursive `mkdir`, `copy`, and `remove`. It also uses graceful-fs to prevent `EMFILE` errors.

**Installation:**

```js
npm install fs-extra
```

**Usage:**

```js
/**
 * fs-extra
 */
const fs = require('fs-extra')

// Async with callbacks:
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})
```

**10. moment:**

A JavaScript date library for parsing, validating, manipulating, and formatting dates.

**Installation:**

```js
npm install moment --save
```

**Usage:**

* Format Dates

```js
const moment = require('moment');

moment().format('MMMM Do YYYY, h:mm:ss a'); // October 24th 2022, 3:15:22 pm
moment().format('dddd');                    // Saturday
moment().format("MMM Do YY");               // Oct 24th 22
```

* Relative Time

```js
const moment = require('moment');

moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
moment().startOf('day').fromNow();        // 15 hours ago
```

* Calendar Time

```js
const moment = require('moment');

moment().subtract(10, 'days').calendar(); // 10/14/2022
moment().subtract(6, 'days').calendar();  // Last Sunday at 3:18 PM
moment().subtract(3, 'days').calendar();  // Last Wednesday at 3:18 PM
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 11. NODE.JS RESTFUL API

<br/>

## Q. Explain RESTful Web Services in Node.js?

REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol.
It is an architectural style as well as an approach for communications purposes that is often used in various web services development. A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol.

**HTTP methods:**

* `GET` − Provides read-only access to a resource.
* `PUT` − Updates an existing resource or creates a new resource.
* `DELETE` − Removes a resource.
* `POST` − Creates a new resource.
* `PATCH`− Update/modify a resource

**Example:** users.json

```json
{
   "user1" : {
      "id": 1,
      "name" : "Ehsan Philip",
      "age" : 24
   },

   "user2" : {
      "id": 2,
      "name" : "Karim Jimenez",
      "age" : 22
   },

   "user3" : {
      "id": 3,
      "name" : "Giacomo Weir",
      "age" : 18
   }
}
```

**List Users** ( `GET` method)

Let\'s implement our first RESTful API listUsers using the following code in a server.js file −

```js
const express = require('express');
const app = express();
const fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
});
```

**Add User** ( `POST` method )

Following API will show you how to add new user in the list. 

```js
const express = require('express');
const app = express();
const fs = require("fs");

const user = {
   "user4" : {
      "id": 4,
      "name" : "Spencer Amos",
      "age" : 28
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
})
```

**Delete User:**

```js
const express = require('express');
const app = express();
const fs = require("fs");

const id = 2;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
})
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between req.params and req.query?

The **req.params** are a part of a path in URL and they\'re also known as URL variables. for example, if you have the route **/books/:id**, then the **id** property will be available as **req.params.id**. req.params default value is an empty object {}.

A **req.query** is a part of a URL that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form. A query is the last part of URL

**Example 01:** req.params

```js
/**
 * req.params
 */

// GET  http://localhost:3000/employees/10

app.get('/employees/:id', (req, res, next) => {
   console.log(req.params.id); // 10
})
```

**Example 02:** req.query

```js
/**
 * req.query
 */

// GET  http://localhost:3000/employees?page=20

app.get('/employees', (req, res, next) => {
  console.log(req.query.page) // 20
})
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to make post request in Node.js?

Following code snippet can be used to make a Post Request in Node.js.

```js
/**
 * POST Request
 */
const request = require("request");

request.post("http://localhost:3000/action",  { form: { key: "value" } },
  function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  }
);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are Promises in Node.js?

It allows to associate handlers to an asynchronous action\'s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

Promises in node.js promised to do some work and then had separate callbacks that would be executed for success and failure as well as handling timeouts. Another way to think of promises in node.js was that they were emitters that could emit only two events: success and error.The cool thing about promises is you can combine them into dependency chains (do Promise C only when Promise A and Promise B complete).

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.
Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).  

**Example:**

```js
/**
 * Promise
 */
function getSum(num1, num2) {
  const myPromise = new Promise((resolve, reject) => {
    if (!isNaN(num1) && !isNaN(num2)) {
      resolve(num1 + num2);
    } else {
      reject(new Error("Not a valid number"));
    }
  });

  return myPromise;
}

console.log(getSum(10, 20)); // Promise { 30 }
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How can you secure your HTTP cookies against XSS attacks?

**1.** When the web server sets cookies, it can provide some additional attributes to make sure the cookies won\'t be accessible by using malicious JavaScript. One such attribute is HttpOnly.

```js
Set-Cookie: [name]=[value]; HttpOnly
```

HttpOnly makes sure the cookies will be submitted only to the domain they originated from.

**2.** The "Secure" attribute can make sure the cookies are sent over secured channel only.

```js
Set-Cookie: [name]=[value]; Secure
```

**3.** The web server can use X-XSS-Protection response header to make sure pages do not load when they detect reflected cross-site scripting (XSS) attacks.

```js
X-XSS-Protection: 1; mode=block
```

**4.** The web server can use HTTP Content-Security-Policy response header to control what resources a user agent is allowed to load for a certain page. It can help to prevent various types of attacks like Cross Site Scripting (XSS) and data injection attacks.

```js
Content-Security-Policy: default-src 'self' *.http://sometrustedwebsite.com
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to make an HTTP POST request using axios in Node.js?

```js
/**
 * POST Request using Axios
 */
const express = require("express");
const app = express();
const axios = require("axios");

app.post("/user", async (req, res) => {
  try {
    const payload = { name: "Aashita Iyer", email: "aashita.iyer@email.com" };
    const response = await axios.post("http://httpbin.org/post", payload);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(3000, function () {
  console.log(`App listening at http://localhost:3000/`);
});
```

**Output:**

```js
{
  args: {},
  data: '{"name":"Aashita Iyer","email":"aashita.iyer@email.com"}',
  files: {},
  form: {},
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Length': '56',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'axios/1.1.3',
    'X-Amzn-Trace-Id': 'Root=1-635cd3d3-1f13ea981467e6371ce3a740'
  },
  json: { email: 'aashita.iyer@email.com', name: 'Aashita Iyer' },
  origin: 'xx.xx.xx.xx',
  url: 'http://httpbin.org/post'
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is asynchronous programming in Node.js?

Asynchronous programming is a form of parallel programming that allows a unit of work to run separately from the primary application thread. When the work is complete, it notifies the main thread (as well as whether the work was completed or failed). There are numerous benefits to using it, such as improved application performance and enhanced responsiveness.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between Asynchronous and Non-blocking?

**1. Asynchronous:**

The architecture of asynchronous explains that the message sent will not give the reply on immediate basis just like we send the mail but do not get the reply on an immediate basis. It does not have any dependency or order. Hence improving the system efficiency and performance. The server stores the information and when the action is done it will be notified.

**2. Non-Blocking:**

Nonblocking immediately responses with whatever data available. Moreover, it does not block any execution and keeps on running as per the requests. If an answer could not be retrieved then in those cases API returns immediately with an error. Nonblocking is mostly used with I/O(input/output). Node.js is itself based on nonblocking I/O model. There are few ways of communication that a nonblocking I/O has completed. The callback function is to be called when the operation is completed. Nonblocking call uses the help of javascript which provides a callback function.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How node.js prevents blocking code?

**Blocking vs Non-blocking:**

**Blocking** is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a **blocking** operation is occurring.

Synchronous methods in the Node.js standard library that use **libuv** are the most commonly used blocking operations. Native modules may also have blocking methods. Blocking methods execute `synchronously` and non-blocking methods execute `asynchronously`.

**Example:**

```js
// Blocking
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

// Non-blocking
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Name the types of API functions in Node.js?

There are two types of API functions in Node.js:

* Asynchronous, Non-blocking functions
* Synchronous, Blocking functions

**1. Blocking functions:**

In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. Blocking functions execute synchronously.

**Example:**

```js
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
// moreWork(); will run after console.log
```

The second line of code blocks the execution of additional JavaScript until the entire file is read. moreWork () will only be called after Console.log

**2. Non-blocking functions:**

In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. Non-blocking functions execute asynchronously.

**Example:**

```js
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// moreWork(); will run before console.log
```

Since `fs.readFile()` is non-blocking, moreWork() does not have to wait for the file read to complete before being called. This allows for higher throughput.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is difference between put and patch?

PUT and PATCH are HTTP verbs and they both relate to updating a resource. The main difference between PUT and PATCH requests are in the way the server processes the enclosed entity to modify the resource identified by the Request-URI.

In a PUT request, the enclosed entity is considered to be a modified version of the resource stored on the origin server, and the client is requesting that the stored version be replaced.

With PATCH, however, the enclosed entity contains a set of instructions describing how a resource currently residing on the origin server should be modified to produce a new version.

Also, another difference is that when you want to update a resource with PUT request, you have to send the full payload as the request whereas with PATCH, you only send the parameters which you want to update.

The most commonly used HTTP verbs POST, GET, PUT, DELETE are similar to CRUD (Create, Read, Update and Delete) operations in database. We specify these HTTP verbs in the capital case. So, the below is the comparison between them.

* `POST` - create
* `GET`  - read  
* `PUT`  - update
* `DELETE` - delete

**PATCH**: Submits a partial modification to a resource. If you only need to update one field for the resource, you may want to use the PATCH method.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. List types of Http requests supported by Node.js?

The HTTP core module is a key module to Node.js networking.

```js
const http = require('http')
```

**http.METHODS**

```js
require('http').METHODS
[ 'ACL',
  'BIND',
  'CHECKOUT',
  'CONNECT',
  'COPY',
  'DELETE',
  'GET',
  'HEAD',
  'LINK',
  'LOCK',
  'M-SEARCH',
  'MERGE',
  'MKACTIVITY',
  'MKCALENDAR',
  'MKCOL',
  'MOVE',
  'NOTIFY',
  'OPTIONS',
  'PATCH',
  'POST',
  'PROPFIND',
  'PROPPATCH',
  'PURGE',
  'PUT',
  'REBIND',
  'REPORT',
  'SEARCH',
  'SUBSCRIBE',
  'TRACE',
  'UNBIND',
  'UNLINK',
  'UNLOCK',
  'UNSUBSCRIBE' ]
  ```

**http.STATUS_CODES**

  ```js
  require('http').STATUS_CODES
{ '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '208': 'Already Reported',
  '226': 'IM Used',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': 'I\'m a teapot',
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '508': 'Loop Detected',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required' }
  ```

**Making HTTP Requests**

```js
const request = require('request');

request('https://nodejs.org/', function(err, res, body) {
    console.log(body);
});
```

The first argument to request can either be a URL string, or an object of options. Here are some of the more common options you\'ll encounter in your applications:

* **url**: The destination URL of the HTTP request
* **method**: The HTTP method to be used (GET, POST, DELETE, etc)
* **headers**: An object of HTTP headers (key-value) to be set in the request
* **form**: An object containing key-value form data

```js
const request = require('request');

const options = {
    url: 'https://nodejs.org/file.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});
```

Using the options object, this request uses the GET method to retrieve JSON data directly from Reddit, which is returned as a string in the body field. From here, you can use `JSON.parse` and use the data as a normal JavaScript object.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is difference between promises and async-await in Node.js?

**1. Promises:**

A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, we can defer the execution of a code block until an async request is completed. This way, other operations can keep running without interruption.

**States of Promises:**

* `Pending`: Initial State, before the Promise succeeds or fails.
* `Resolved`: Completed Promise
* `Rejected`: Failed Promise, throw an error

**Example:**

```js
function logFetch(url) {
  return fetch(url)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error('fetch failed', err);
    });
}
```

**2. Async-Await:**

`Await` is basically syntactic sugar for **Promises**. It makes asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

Putting the keyword `async` before a function tells the function to return a Promise. If the code returns something that is not a `Promise`, then JavaScript automatically wraps it into a resolved promise with that value. The `await` keyword simply makes JavaScript wait until that `Promise` settles and then returns its result.

**Example:**

```js
async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(response);
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Mention the steps by which you can async in Node.js?

ES 2017 introduced Asynchronous functions. Async functions are essentially a cleaner way to work with asynchronous code in JavaScript. 

**1. Async/Await:**

* The newest way to write asynchronous code in JavaScript.
* It is non blocking (just like promises and callbacks).
* Async/Await was created to simplify the process of working with and writing chained promises.
* Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.  

Syntax

```js
// Normal Function
function add(x,y){
  return x + y;
}
// Async Function
async function add(x,y){
  return x + y;
}
```

**2. Await:**

Async functions can make use of the await expression. This will pause the async function and wait for the Promise to resolve prior to moving on.  

**Example:**

```js
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to use promise in Node.js?

A promise is an object that represents the return value or the thrown exception that the function may eventually provide. A promise can also be used as a proxy for a remote object to overcome latency.

Promise is relatively an easy implementation for asynchronous operation. The promise object returned from the function represents an operation which is not completed yet, but it guarantees to the caller of the operation that the operation will be completed in future.

Promise has the following states:

* **Pending** - asynchronous operation is not yet completed.
* **Fulfilled** - asynchronous operation is completed successfully.
* **Rejected** - asynchronous operation is terminated with an error.
* **Settled** - asynchronous operation is either fulfilled or rejected.
* **Callback** - function is executed if the promise is executed with value.
* **Errback** - function is executed if the promise is rejected.

**Moving to Promises from Callback:**

On the first pass, promises can mitigate the **Pyramid of Doom**: the situation where code marches to the right faster than it marches forward.

```js
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});
```

With a promise library, it can flatten the pyramid.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("successful");
  }, 100);
});

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to perform get request using axios in nodejs?

```js
/**
 * Get Request using Axios
 */
const express = require("express");
const app = express();
const axios = require("axios");

app.get("/async", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(3000, function () {
  console.log(`App listening at http://localhost:3000/`);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 12. NODE.JS ROUTING

<br/>

## Q. How does routing work in Node.js?

Routing defines the way in which the client requests are handled by the application endpoints. We define routing using methods of the Express app object that correspond to HTTP methods; for example, `app.get()` to handle `GET` requests and `app.post` to handle `POST` requests, `app.all()` to handle all HTTP methods and `app.use()` to specify middleware as the callback function.

These routing methods "listens" for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

*Syntax*:

```js
app.METHOD(PATH, HANDLER)
```

Where:

* app is an instance of express.
* METHOD is an `HTTP request method`.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

**a) Route methods:**

```js
// GET method route
app.get('/', function (req, res) {
  res.send('GET request')
})

// POST method route
app.post('/login', function (req, res) {
  res.send('POST request')
})

// ALL method route
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
```

**b) Route paths:**

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

The characters `?`, `+`, `*`, and `()` are subsets of their regular expression counterparts. The hyphen `(-)` and the dot `(.)` are interpreted literally by string-based paths.

**Example:**

```js
// This route path will match requests to /about.
app.get('/about', function (req, res) {
  res.send('about')
})


// This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})


// This route path will match butterfly and dragonfly
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
```

**c) Route parameters:**

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

**Example:**

```js
app.get('/users/:userId', function (req, res) {
  res.send(req.params)
})
```

**Response methods:**

| Method            | Description                   |
|-------------------|-------------------------------|
|`res.download()`   |Prompt a file to be downloaded.|
|`res.end()`        |End the response process.|
|`res.json()`       |Send a JSON response.|
|`res.jsonp()`      |Send a JSON response with JSONP support.|
|`res.redirect()`   |Redirect a request.|
|`res.render()`     |Render a view template.|
|`res.send()`       |Send a response of various types.|
|`res.sendFile()`   |Send a file as an octet stream.|
|`res.sendStatus()` |Set the response status code and send its string representation as the response body.|

**d) Router method:**

```js
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 13. NODE.JS CACHING

<br/>

## Q. How to access cache data in Node.js?

Caching is a technique used in web development to handle performance bottlenecks related to how data is managed, stored, and retrieved. A cache layer or server acts as a secondary storage layer, usually faster and highly performant to temporarily store a subset of data. It is expected that data stored in a cache does not change often. Cache can be stored using various techniques like in-memory cache, file cache or a separate cache database.

**Installation:**

```js
npm install express node-cache axios
```

**Node-cache has following major functions:**

* **.set(key, val, [ ttl ]):** Used to set some value corresponding to a particular key in the cache. This same key must be used to retrieve this value.
* **.get(key):** Used to get value set to specified key. It returns undefined, if the key is not already present.
* **has(key):** Used to check if the cache already has some value set for specified key. Returns true if present otherwise false.

**Implement in-memory cache with following approach:**

* On API request, check if the cache has key already set using has(key) function
* If the cache has the key, retrieve the cached value by get(key) function and use it instead of performing operation again. (This saves time)
* If the cache doesn\'t have a key, perform the operations required, and before sending the response, set the value for that key so that further requests can be responded to directly through cached data.

**Example:**

```js
/**
 * In-Memory Cache 
 */
const express = require("express");
const NodeCache = require("node-cache");
const axios = require("axios");

const app = express();
const cache = new NodeCache({ stdTTL: 15 });

/**
 * GET Cached Data
 */
const verifyCache = (req, res, next) => {
  try {
    const { id } = req.params;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
    return next();
  } catch (err) {
    throw new Error(err);
  }
};

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

/**
 * GET ToDo Items
 */
app.get("/todos/:id", verifyCache, async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    cache.set(id, data);
    return res.status(200).json(data);
  } catch ({ response }) {
    return res.sendStatus(response.status);
  }
});

app.listen(3000, function () {
  console.log(`App listening at http://localhost:3000/`);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to implement caching using Redis in Node.js?

Redis is an open-source (BSD licensed), in-memory data structure store used as a database, cache, and message broker. Redis also supports disk-persistent data storage.

Its key-value data storage system is another plus because it makes storage and retrieval much simpler. Using Redis, we can store and retrieve data in the cache using the SET and GET methods, respectively.

**Installation:**

```js
npm install -save redis
```

**Example:**

```js
const express = require("express");
const axios = require("axios");
const redis = require("redis");
const app = express();

const client = redis.createClient(6379);

client.on("error", (error) => {
  console.error(error);
});

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

const cache = (req, res, next) => {
  try {
    const { id } = req.params;
    client.get(id, (error, result) => {
      if (error) throw error;
      if (result !== null) {
        return res.json(JSON.parse(result));
      } else {
        return next();
      }
    });
  } catch (err) {
    throw new Error(err);
  }
};

app.get("/todos/:id", cache, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    client.set(id, JSON.stringify(data), "ex", 15);
    return res.status(200).json(data);
  } catch ({ response }) {
    return res.sendStatus(response.status);
  }
});

app.listen(3000, function () {
  console.log(`App listening at http://localhost:3000/`);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to implement Memcached in Node.js?

**Memcached** is a general-purpose distributed memory caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD licence. Memcached runs on Unix-like operating systems (at least LINUX and OS X) and on Microsoft windows.

We can store data to memcached server in key pair format. So whenever any request come from the app can be matched with memcached server without any query from mysql/Nosql server. This increases the performance of the application.

**Installation:**

```js
npm install memcached
```

**Setting up the client:**

The constructor of the memcached client take 2 different arguments server locations and options. Syntax:

```js
const Memcached = require('memcached');
const memcached = new Memcached(Server locations, options);
```

**Example:**

```js
/**
 * Memcached
 */
const Memcached = require('memcached');
// all global configurations should be applied to the .config object of the Client.
Memcached.config.poolSize = 25;

const memcached = new Memcached('localhost:11211', { retries:10, retry:10000, remove:true, failOverServers:['192.168.0.103:11211']});
```

<br/>

**Reference:**

* *[https://www.npmjs.com/package/memcached](https://www.npmjs.com/package/memcached)*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 14. NODE.JS ERROR HANDLING

<br/>

## Q. What is the preferred method of resolving unhandled exceptions in Node.js?

Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

```js
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
```

Process is a global object that provides information about the current Node.js process. Process is a listener function that is always listening to events.

Few events are :

1. Exit
1. disconnect
1. unhandledException
1. rejectionHandled

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is Error Handling in Node.js?

An error is any problem given out by the program due to a number of factors such as logic, syntax, timeout, etc. An error in Node.js is any instance of the Error object. Common examples include built-in error classes, such as ReferenceError, RangeError, TypeError, URIError, EvalError, and SyntaxError.

User-defined errors can also be created by extending the base Error object, a built-in error class, or another custom error. In general, Node.js errors are divided into two distinct categories: operational errors and programmer errors.

**1. Operational Errors:**

Operational errors represent runtime problems. These errors are expected in the Node.js runtime and should be dealt with in a proper way. Here\'s a list of common operational errors:

* failed to connect to server
* failed to resolve hostname
* invalid user input
* request timeout
* server returned a 500 response
* socket hang-up
* system is out of memory

**2. Programmer Errors:**

Programmer errors are what we call bugs. They represent issues in the code itself. Here\'s a common one for Node.js, when you try reading a property of an undefined object. It\'s a classic case of programmer error. Here are a few more:

* called an asynchronous function without a callback
* did not resolve a promise
* did not catch a rejected promise
* passed a string where an object was expected
* passed an object where a string was expected
* passed incorrect parameters in a function

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain Error Handling approaches in Node.js?

**1. Using try-catch block:**

Try-catch declaration is basically used to handle runtime errors in node.js. If the code in the try block throws an exception, the code in the catch block will be executed. It can be extended using finally clause. The finally clause is statements that are executed after the try statement completes.

**Example:**

```js
function square(num) {
  if (typeof num !== "number") {
    throw new TypeError(`Expected number but got: ${typeof num}`);
  }

  return num * num;
}

try {
  square("10");
} catch (err) {
  console.log(err.message); // Expected number but got: string
}
```

**2. Using promises:**

Promise in Node.js is a contemporary way to handle errors, and it is usually preferred compared to callbacks. In the function, we will return a promise, which is a wrapper to our primary logic. We pass two arguments while defining the Promise object:

* resolve — used to resolve promises and provide results
* reject — used to report/throw errors

**Example:**

```js
function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject(new TypeError(`Expected number but got: ${typeof num}`));
      }

      const result = num * num;
      resolve(result);
    }, 100);
  });
}

square("10")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
```

Output:

```js
TypeError: Expected number but got: string
    at Timeout._onTimeout (C:\node\index.js:5:16)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
```

**3. Error-first callbacks:**

Node.js uses an error-first callback convention in most of its asynchronous methods to ensure that errors are checked properly before the results of an operation are used. This callback function is usually the last argument to the function that initiates an asynchronous operation, and it is called once when an error occurs or a result is available from the operation.

**Example:**

```js
const fs = require('fs');

fs.readFile('/path/to/file.txt', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  // Log the file contents if no error
  console.log(result);
});
```

Output

```js
[Error: ENOENT: no such file or directory, open 'D:\path\to\file.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\path\\to\\file.txt'
}
```

**4. Using the async/await approach:**

Async/await is just syntactic sugar that is meant to augment promises. It provides a synchronous structure to asynchronous code.
The return value of an async function is a Promise. The await waits for the promise to be resolved or rejected.

```js
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const read = async () => {
  try {
    const result = await readFile('/path/to/file.txt');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

read();
```

Output:

```js
[Error: ENOENT: no such file or directory, open 'D:\path\to\file.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\path\\to\\file.txt'
}
```

**5. Use Middleware:**

It is usually a good idea to build a centralized error-handling component in order to avoid possible code duplications when handling errors. The error-handling component is in charge of making the caught errors understandable by, for example, sending notifications to system admins (if necessary), transferring events to a monitoring service like Sentry.io, and logging them.

It is a good decision to employ a customizable logger like winston or morgan. Here is a customized winston logger:

**Example:**

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
```

```js
const express = require("express");
const logger = require("./logger");
const app = express();

app.get("/event", (req, res, next) => {
  try {
    throw new Error("Not User!");
  } catch (error) {
    logger.error("Events Error: Unauthenticated user");
    res.status(500).send("Error!");
  }
});

app.listen(3000, () => {
  logger.info("Server Listening On Port 3000");
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to solve "Process out of Memory Exception" in Node.js?

Process out of Memory Exception is an exception that occurs when your node.js program gets out of memory. This happens when the default memory allocated to our program gets exceeded by our program while execution.

This exception can be solved by increasing the default memory allocated to our program to the required memory by using the following command.

**Syntax:**

```js
node --max-old-space-size=<NEW_SIZE_IN_MB> index.js
```

**Example:**

```js
/**
 * OutOfMemory Exception
 */
let items = [];

for (let i = 0; i < 999999999; i++) {
  items.push(i);
}

console.log(items);
```

Output:

```js
<--- Last few GCs --->

[11652:000001DA4373BE50]      581 ms: Scavenge 765.9 (799.0) -> 765.9 (799.0) MB, 29.6 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure    
[11652:000001DA4373BE50]      844 ms: Scavenge 1148.4 (1181.6) -> 1148.4 (1181.6) MB, 44.7 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure

[11652:000001DA4373BE50]     1239 ms: Scavenge 1722.2 (1755.4) -> 1722.2 (1755.4) MB, 67.5 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure


<--- JS stacktrace --->

FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
 1: 00007FF784AA052F napi_wrap+109311
 2: 00007FF784A45256 v8::internal::OrderedHashTable<v8::internal::OrderedHashSet,1>::NumberOfElementsOffset+33302
 3: 00007FF784A46026 node::OnFatalError+294
 4: 00007FF78531163E v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF7852F64BD v8::SharedArrayBuffer::Externalize+781
 6: 00007FF7851A094C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1516
 7: 00007FF7851C547F v8::internal::Factory::NewUninitializedFixedArray+111
 8: 00007FF78508B3C0 v8::Object::GetIsolate+8128
 9: 00007FF784F151F7 v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=+169671
10: 00007FF785399FED v8::internal::SetupIsolateDelegate::SetupHeap+463949
11: 000003EC8D443246
```

The default memory allocated to a node.js program is 512MB on 32-bit systems and 1024MB on 64-bit systems. In the below example, we have increased the memory space requirements to 2048MB or 2GB. Use the following command to run the JS file(index.js).

**Example:**

```js
node --max-old-space-size=2048 index.js
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the types of memory leaks in node.js?

A memory leak is a condition that occurs when a program doesn\'t release the memory it allocates. For instance, the system assigns memory locations to store values for the variables that we declare inside our program.

High-level programming languages such as JavaScript utilize automatic memory management, known as garbage collection. Garbage collection allocates the memory to a variable once we declare it and reclaims the memory once it is no longer needed. Unfortunately, even though JavaScript uses a garbage collector to release the memory, sometimes determining whether to free the memory or not is undecidable.

The common causes of Memory Leaks in Node.JS are:

**1. Global variables:**

This is one of the most common causes of leaks in Node. Due to the nature of JavaScript as a language, it is very easy to add to global variables and resources. If these are not cleaned over time, they keep adding up and eventually crash the application.

**Example:**

```js
const http = require("http");

const requestLogs = []; // causing the memory leak
const server = http.createServer((req, res) => {
    requestLogs.push({ url: req.url, array: new Array(10000).join("*")
    res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");
```

**2. Closures:**

Closures memorize their surrounding context. When a closure holds a reference to a large object in heap, it keeps the object in memory as long as the closure is in use.

This implies easily ending up in situations where a closure holding such a reference can be improperly used leading to a memory leak.

**3. Timers & Events:**

The use of setTimeout, setInterval, Observers, and event listeners can cause memory leaks when heavy object references are kept in their callbacks without proper handling.

**4. Multiple references:**

If you reference the same object from multiple objects, it can lead to a memory leak if one of the references is garbage collected while the other one is left dangling.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to prevent memory leaks in Node.js?

Tools to help debug memory leaks:

**1. Node-heapdump:**

The node-heapdump module is good for post-mortem debugging. It generates heap dumps on your SIGUSR2. To help catch bugs easily in a development environment, add node-heapdump as a dependency to your project like so:

```js
const heapdump = require("heapdump");

heapdump.writeSnapshot(function (err, filename) {
  console.log("Sample dump written to", filename);
});
```

**2. Clinic.js:**

Clinic.js is a handy toolset to diagnose and pinpoint performance bottlenecks in your Node applications. The Clinic.js HeapProfiler uses flame graphs to highlight memory allocations. You can use it with tools such as AutoCannon to simulate HTTP load when profiling.

**3. The process.memoryUsage method:**

The process.memoryUsage method provides a simple way of monitoring memory usage in your Node applications.

The method returns an object with the following properties:

* **rss:**, or resident set size, refers to the amount of space occupied in the main memory for the process, which includes code segment, heap, and stack. If your RSS is going up, there is a likelihood your application is leaking memory
* **heapTotal:**, the total amount of memory available for JavaScript objects
* **heapUsed:**, the total amount of memory occupied by JavaScript objects
* **external:**, the amount of memory consumed by off-heap data (buffers) used by Node; this is where objects, strings, and closures are stored
* **arrayBuffers:**, the amount of memory allocation for ArrayBuffers and SharedArrayBuffers (the external memory size also includes this memory value)

**Example:**

```js
console.log(process.memoryUsage());
```

Output:

```js
{
  rss: 4935680,
  heapTotal:1826816,
  heapUsed:650472,
  external: 49879,
  arrayBuffers: 17310,
}
```

**4. Node Inspector:**

Node Inspector is a debugger interface for Node applications. Run Node with the --inspect flag to use it, and it starts listening for a debugging client. It is one of the simplest ways of capturing heap snapshots with Chrome DevTools.

**5. Chrome DevTools:**

Chrome offers a range of tools to help debug your memory and performance issues, including allocation timelines, sampling heap profiler, and heap snapshots etc.

## Q. How Garbage collection works in Node.JS?

The V8 uses a scheme similar to the Java Virtual Machine and divides the memory into segments. The thing that wraps the scheme concept is known as Resident Set, which refers to the portion of memory occupied by a process that is held in the RAM.

* **Stack**: Stores static data, method and function frames, primitive values, and pointers to stored objects. The stack is managed by the operating system.

* **Heap**: Stores objects. Because everything in JavaScript is an object this means all dynamic data like arrays, closures, etc. The heap is the biggest block of memory and it\'s where Garbage Collection (GC) happens.

* **Code Segment**: the actual code is being executed.

<p align="center">
  <img src="assets/memory-scheme.png" alt="Memory Segments" width="200px"/>
</p>

Garbage collection frees up memory in the Heap used by objects that are no longer referenced from the Stack, either directly or indirectly. The goal is to create free space for creating new objects. Garbage collection is generational. Objects in the Heap are grouped by age and cleared at different stages.

**Mark-and-sweep algorithm:**

In JavaScript, the root is the global object. The garbage collector start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 15. NODE.JS LOGGING

<br/>

## Q. How to debug an application in Node.js?

**1. node-inspector:**

```js
npm install -g node-inspector
```

Run

```js
node-debug app.js
```

**2. Debugging:**

* Debugger
* Node Inspector
* Visual Studio Code
* Cloud9
* Brackets

**3. Profiling:**

```js
1. node --prof ./app.js
2. node --prof-process ./the-generated-log-file
```

**4. Heapdumps:**

* node-heapdump with Chrome Developer Tools

**5. Tracing:**

* Interactive Stack Traces with TraceGL

**6. Logging:**

Libraries that output debugging information

* Caterpillar
* Tracer
* scribbles

Libraries that enhance stack trace information  

* Longjohn

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 16. NODE.JS INTERNATIONALIZATION

<br/>

#### Q. How to use locale (i18n) in Node.js?

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 17. NODE.JS TESTING

<br/>

## Q. What is a stub?

Stubbing and verification for node.js tests. Enables you to validate and override behaviour of nested pieces of code such as methods, require() and npm modules or even instances of classes. This library is inspired on node-gently, MockJS and mock-require.  

**Features of Stub:**  

* Produces simple, lightweight Objects capable of extending down their tree
* Compatible with Nodejs
* Easily extendable directly or through an ExtensionManager
* Comes with predefined, usable extensions

Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

A use-case can be a file read, when you do not want to read an actual file:

```js
const fs = require('fs');

const readFileStub = sinon.stub(fs, 'readFile', function (path, cb) {  
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;  
readFileStub.restore();
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a test pyramid?

The "Test Pyramid" is a metaphor that tells us to group software tests into buckets of different granularity. It also gives an idea of how many tests we should have in each of these groups. It shows which kinds of tests you should be looking for in the different levels of the pyramid and gives practical examples on how these can be implemented.

<p align="center">
  <img src="assets/testPyramid.png" alt="Test Pyramid" />
</p>

Mike Cohn\'s original test pyramid consists of three layers that your test suite should consist of (bottom to top):

1. Unit Tests
1. Service Tests
1. User Interface Tests

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to use Joi module for schema validation in Node.js?

Joi module is a popular module for data validation. This module validates the data based on schemas. There are various functions like optional(), required(), min(), max(), etc which make it easy to use and a user-friendly module for validating the data.

**Example:**

```js
const Joi = require("joi");

// User-defined function to validate the user

function validateUser(user) {

  const JoiSchema = Joi.object({

    username: Joi.string().min(5).max(30).required(),

    email: Joi.string().email().min(5).max(50).optional(),

    date_of_birth: Joi.date().optional(),

    account_status: Joi.string()
      .valid("activated")
      .valid("unactivated")
      .optional(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(user);
}

const user = {
  username: "Deepak Lucky",
  email: "deepak.lucky@gmail.com",
  date_of_birth: "2000-07-07",
  account_status: "activated",
};

let response = validateUser(user);

if (response.error) {
  console.log(response.error.details);
} else {
  console.log("Validated Data");
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/schema-validation-using-joi-s2nhzs)**

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 18. NODE.JS MISCELLANEOUS

<br/>

## Q. How to improve Node.js performance?

**1. Asynchronous Functions:**

Using asynchronous functions in an application that heavily uses I/O operations will improve it. This is because the CPU will be able to handle multiple requests simultaneously due to non-blocking I/O, while one of these requests is making an Input/Output operation.

**Example:**

```js
var fs = require('fs');

// Performing a blocking I/O
var file = fs.readFileSync('/etc/file.txt');
console.log(file);

// Performing a non-blocking I/O
fs.readFile('/etc/file.txt', function(err, file) {
    if (err) return err;
    console.log(file);
});
```

**2. Query Optimization:**

Basic tips to improve your database performance/optimization overview

* **Indexing** - Indexing is an approach to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed.

* **Avoid SELECT** -  Use the SELECT statement to query only the data you need and avoid extra fetching loads to your database.

```sql
-- query1
SELECT * FROM Customers

-- query2 (optimized)
SELECT FirstName, LastName, Address, City, State, Zip FROM Customers
```

* **Use LIMIT** - LIMIT will return only the specified number of records.

```sql
SELECT FirstName, LastName, Address, City, State, Zip FROM Customers LIMIT 100
```

* **Wildcard (%)** - Use wildcard (%) character appropriately

```sql
-- SELECT customers whose first names start with "Avi"

-- query1
SELECT FirstName from Customers where FirstName like '%avi%'

-- query2 (optimized)
SELECT FirstName from Customers where FirstName like 'avi%'
```

**3. Caching:**

Caching is one of the common ways of improving the Node Js performance. A cache is a memory buffer where frequently accessed data is temporarily stored to be accessed quicker. Cached data is then retrieved without having to access the origin. Caching will improve your app response time and even reduce some costs such as bandwidth and data volumes.

* **Redis cache** is entirely asynchronous with optimal performance to handle cached data requests in a single thread.

* **Memcached** stores data across different nodes. It uses a hashing schema that provides a hash table functionality. These ensure that adding, or removing a server node does not significantly change the mapping of the keys to server nodes.

* **Node-cache** works almost like Memcached with the set, get, and delete methods. It has a timeout that deletes data from the cache when the timeout expires.

* **Nginx** will help maintain load balance. Nginx will help cache static files, that will drastically offload the work of the application server. It offers low memory usage and high concurrency.

**4. Load Balancing:**

It\'s a typical challenge to create performant applications that can handle a huge number of incoming connections. Load balancing is the term for this method. The cluster module to allow load balancing and distribute incoming connections across all workers in an environment\'s numerous CPU cores using a **round-robin** technique.

Using the PM2 process manager to keep applications alive indefinitely is another option. PM2 includes a cluster feature that allows you to run numerous processes over all cores without having to worry about changing the code to use the native cluster module.

**5. Real-time Monitoring:**

Gauging the current level of performance of an application may require running different kinds of tests, such as the following:

* **Load testing:** refers to the practice of simulating the expected usage of a system and measuring its response as the workload increases.

* **Stress testing:** designed to measure how a system performs beyond the limits of normal working conditions. Its goal is to determine how much the system can handle before it fails and how it attempts to recover from a failure.

* **Spike testing:** helps to test the behavior of an application when it receives a drastic increase or decrease in load.

* **Scalability testing:** used to find the point at which the application stops scaling and identify the reasons behind it.

* **Volume testing:** determines if a system can cope with large amounts of data.

* **Endurance testing:** helps evaluate the behavior of a software application under sustained load for a long period, to catch problems such as memory leaks.

**6. Use HTTP/2:**

The HTTP/2 in a Node.js application make web browsing faster and easier while reducing bandwidth usage. HTTP/2 is aimed at increasing performance and addressing concerns with HTTP/1.x.

HTTP/2 has the following features:

* **Header Compression** - This disables unnecessary headers and compels all HTTP headers to be sent compressed.
* **Multiplexing** - This allows multiple requests to simultaneously retrieve resources and response messages over a single TCP connection.

**7. Stateless Authentication:**

Stateless authentication on the client-side with the help of JSON Web Token ( **JWT** ) provides great speed to the application. In this Stateless Authentication procedure, a web token is created whenever the user login into the website. It contains all the required user information, which is sent back to the respective user for authenticating all API requests.

**8. Module bundlers and task runners:**

Module bundlers are build tools for processing groups of modules and their dependencies into a file or group of files. This especially includes images, JavaScript, and CSS files. The process that makes this possible involves module bundlers (e.g., webpack, Parcel, Rollup) and task runners (e.g., Gulp, Grunt, etc.).

This allows for complex transforms, such as shortening multicharacter variable names or using a shorter syntax that\'s equivalent to the original code and combining several JavaScript files into one to reduce the number of network requests.

**9. Script Tracing and Logging:**

Logging helps track your application activities and traffic. When an app is running, it is possible to get fatal errors (even though your app was running properly after production testing).

Commonly used methods for logging in Node.js are

* **Winston** -  is a multi-transport async logger, which is simple, universal, and extremely versatile. It makes logging more flexible and extensible. It is the most popular logger based on NPM stats. Winston has different transports with different default levels that indicate message priority. These levels include ( error, warn, info, http, verbose, debug, silly )

* **Morgan** - Morgan is an HTTP request logger middleware for Node.js applications. Morgan gives insight on how your app is being used and alerts you on potential errors and issues that could be threats to your application.

**Example:**

```js
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
 
const app = express()
 
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})
```

**10. Gzip Compression:**

Gzip compresses HTTP requests and responses. Gzip compresses responses before sending them to the browser, thus, the browser takes a shorter time to fetch them. Gzip also compresses the request to the remote server, which significantly increases web performance.

**Example:**

```js
const compression = require("compression");
const express = require("express");
const app = express();

// compress all responses
app.use(compression());
// ...
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is crypto in Node.js?

The Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL\'s hash HMAC, cipher, decipher, sign and verify functions.

* **Hash**: A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some arbitrary block of source data.
* **HMAC**: HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash.

* Encryption Example using Hash and HMAC

```js
const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to Node.js')  
                   .digest('hex');  
console.log(hash);  
```

* Encryption example using Cipher

```js
const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');  

const encrypted = cipher.update('Hello Node.js', 'utf8', 'hex');  
encrypted += cipher.final('hex');  

console.log(encrypted);
```

* Decryption example using Decipher

```js
const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  

const encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';  
const decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  

console.log(decrypted);  
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to execute an external program from within Node.js?

```js
const { exec } = require('child_process');

exec('"/path/to/test file/test.sh" arg1 arg2');

exec('echo "The \\$HOME variable is $HOME"');
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is REPL?

REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and command prompt. Node comes with the REPL environment when it is installed. System interacts with the user through outputs of commands/expressions used. It is useful in writing and debugging the codes. The work of REPL can be understood from its full form:

* **Read**: It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
* **Eval**: The parsed JavaScript data structure is evaluated for the results.
* **Print**: The result is printed after the evaluation.
* **Loop**: Loops the input command. To come out of NODE REPL, press ctrl+c twice

Simple Expression

```js
$ node
> 10 + 20
30
> 10 + ( 20 * 30 ) - 40
570
>
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the runtime environment mean in Node.js?

The Node.js runtime is the software stack responsible for installing your web service\'s code and its dependencies and running your service.

The Node.js runtime for App Engine in the standard environment is declared in the `app.yaml` file:

```js
runtime: nodejs10
```

The runtime environment is literally just the environment your application is running in. This can be used to describe both the hardware and the software that is running your application. How much RAM, what version of node, what operating system, how much CPU cores, can all be referenced when talking about a runtime environment.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain usage of NODE_ENV?

NODE_ENV is an environment variable made popular by the express web server framework. When a node application is run, it can check the value of the environment variable and do different things based on the value.

For example, when we work on a project and there are production and development environments. We don\'t need to use caching in the development env. So we set

 ```js
 NODE_ENV=development
 ```

and use the code below

```js
if (process.env.NODE_ENV === 'development')
    useCaching = false;
```

Upon that, if the project runs on production it will use caching.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How assert works in Node.js?

The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.

This module was built to be used internally by Node.js.

```js
// Sample usage

const assert = require('assert');
assert(50 > 70, "50 is less than 70.");
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the use of DNS module in Node.js?

DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup. No need for memorising IP addresses – DNS servers provide a nifty solution of converting domain or subdomain names to IP addresses. This module provides an asynchronous network wrapper and can be imported using the following syntax.

```js
const dns = require('dns');
```

**Example:** `dns.lookup()` function  

```js
const dns = require('dns');  
dns.lookup('www.google.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
```

**Example:** `resolve4()` and `reverse()` functions

```js
const dns = require('dns');  
dns.resolve4('www.google.com', (err, addresses) => {  
  if (err) throw err;  
  console.log(`addresses: ${JSON.stringify(addresses)}`);  
  addresses.forEach((a) => {  
    dns.reverse(a, (err, hostnames) => {  
      if (err) {  
        throw err;  
      }  
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);  
    });  
  });  
});
```

**Example:** Print the localhost name using `lookupService()` function

```js
const dns = require('dns');  
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
  console.log(hostname, service);  
    // Prints: localhost  
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is JIT and how is it related to Node.js?
 
Node.js has depended on the V8 JavaScript engine to provide code execution in the language. The V8 is a JavaScript engine built at the google development center, in Germany. It is open source and written in C++. It is used for both client side (Google Chrome) and server side (node.js) JavaScript applications. A central piece of the V8 engine that allows it to execute JavaScript at high speed is the JIT (Just In Time) compiler. This is a dynamic compiler that can optimize code during runtime. When V8 was first built the JIT Compiler was dubbed FullCodegen. Then, the V8 team implemented Crankshaft, which included many performance optimizations that FullCodegen did not implement.

The `V8` was first designed to increase the performance of the JavaScript execution inside web browsers. In order to obtain speed, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. It compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler like a lot of modern JavaScript engines such as SpiderMonkey or Rhino (Mozilla) are doing. The main difference with V8 is that it doesn\'t produce bytecode or any intermediate code.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to generate and verify checksum of the given string in Nodejs

The **checksum** (aka **hash sum**) calculation is a one-way process of mapping an extensive data set of variable length (e.g., message, file), to a smaller data set of a fixed length (hash). The length depends on a hashing algorithm.

For the checksum generation, we can use node `crypto()` module. The module uses `createHash(algorithm)` to create a checksum (hash) generator. The algorithm is dependent on the available algorithms supported by the version of OpenSSL on the platform.

**Example:**

```js
const crypto = require('crypto');

// To get a list of all available hash algorithms
crypto.getHashes() // [ 'md5', 'sha1', 'sha3-256', ... ]

  
// Create hash of SHA1 type
const key = "MY_SECRET_KEY";


// 'digest' is the output of hash function containing  
// only hexadecimal digits
hashPwd = crypto.createHash('sha1').update(key).digest('hex');
  
console.log(hashPwd); //ef5225a03e4f9cc953ab3c4dd41f5c4db7dc2e5b
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to gracefully shutdown Node.js Server?

The graceful shutdown of our application indicates when all of the resources it used and all of the traffic and/or data processing what it handled are closed and released properly. It means that no database connection remains open and no ongoing request fails because we stop our application.

Possible scenarios for a graceful web server shutdown:

* Handle process kill signal
* Stop new requests from client
* Close all data process
* Exit from process

**Example:**

```js
function shutdown() {
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    closeMyResources(function onResourcesClosed(err) {
      // error handling
      process.exit();
    });
  });
}

process.on("SIGTERM", function onSigterm() {
  console.info("Got SIGTERM. Graceful shutdown start",  new Date().toISOString());
  // start graceul shutdown here
  shutdown();
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What kind of web application should never be built by using Node.js?

Node.js development has many benefits, but it won\'t provide the best performance for some application\'s needs or processes. Here are the points for which developers or businesses must avoid Node.js:

**1. A CPU-Heavy Application:**

Node.js uses an event-based, non-blocking I/O architecture and only has one CPU – all of that intensive CPU processing would block incoming requests. As a result of the high-end number crunching, the thread might get stuck.

**2. A Relational Database-Backed Server-Side App:**

You can also develop a standard web application on the server using Node.js and express.js. However, the responsiveness of Node.js will be hampered if these web applications consume a lot of CPU power. Because Node.js Relational DB tool is still in beta, it\'s best to use other environments to conduct relational operations.

**3. Developing simple CRUD application:**

You can use Node.js for such applications, but the performance and power for which Node.js is known would remain useless. Hence, it is strongly recommended to go for other frameworks or environments for developing simple HTML application instead of Node.js.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the types of applications you can build with Node.js?

Node.js is a JavaScript runtime environment built upon event-driven programming that enables non-blocking I/O (Input/Output) capable of serving multiple concurrent events in a single thread. Non-blocking I/O makes Node.js very fast, lightweight, scalable, and efficient in handling data-heavy and I/O-heavy workloads characteristic of several types of web applications.

Types of applications you can build with Node.js

* IoT (Internet of Things)
* Real-Time Chat Application
* Single-Page Application
* Social Media Platform
* Streaming App
* Online Payment Processor
* Remote Collaboration Tool
* CRM Tool
* Advanced Fintech App
* Content Management System
* E-Learning Platform
* E-Commerce Platform
* Ridesharing App
* Project Management Tools
* Location-Based App
* Online Publishing Platforms
* ERP Tool
* Websites With Server-Side Rendering
* FastCGI Servers
* Command Line Tools
* API Servers
* Desktop Apps
* Backend for Mobile Apps
* Server Management Services
* Notification Centre
* Custom DNS Server
* Static Site Generator
* Game Servers, Game Clients

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the use cases for the Node.js "vm" core module?

The "VM" module enables compiling and running code within V8 Virtual Machine contexts. JavaScript code can be compiled and run immediately or compiled, saved, and run later. It provides a way of executing JavaScript on a virtual machine.

A common use case is to run the code in a different V8 Context. This means invoked code has a different global object than the invoking code.

**Syntax:**

```js
const vm = require('vm');
```

**VM Methods:**

|Method            |Description                            |
|------------------|---------------------------------------|
|createContext()   |Prepares a virtual machine, or sandbox, where you can execute scripts|
|isContext()       |Returns true if the specified sandbox has been created by the createContext() method|
|runInContext()    |Executes JavaScript code in the specified context, and returns the result|
|runInDebug()      |Executes JavaScript inside the debug context|
|runInNewContext() |Executes JavaScript code in a new context, and returns the result|
|runInThisContext()|Executes JavaScript code in the global context, and returns the result|

**Example:**

```js
const vm = require("vm");

const x = 10;
const context = { x: 20 };

vm.createContext(context); // Contextify the object.

const code = "x += 10";
// Initially, x has the value 20 because that is the value of "context.x"
vm.runInContext(code, context);

console.log(context.x); // 30
console.log(x); // 10
```

*Note: The vm module is not a security mechanism. Do not use it to run untrusted code.*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

# Timing Function Execution in Node.js

You can check the runtime of a function in Node.js by using the `console.time()` and `console.timeEnd()` functions. Here's an example with an explanation:

    ```javascript
    function myFunction() {
      console.log("Function started");
      
      // Start the timer
      console.time("myFunction");
    
      // Simulate some time-consuming task
      for (let i = 0; i < 1000000000; i++) {
        // Do some work
      }
    
      // End the timer
      console.timeEnd("myFunction");
    
      console.log("Function ended");
    }
    
    myFunction();


## In this example:

- We use `console.log` to print a message indicating the start of the function.
- We start a timer named "myFunction" using `console.time("myFunction")`.
- We simulate a time-consuming task by running a loop.
- After the loop is finished, we end the timer using `console.timeEnd("myFunction")`.
- Finally, we use `console.log` to print a message indicating the end of the function.


- Function started
- myFunction: 5431.709ms
- Function ended

The time in milliseconds (ms) represents the runtime of the function `myFunction`. You can use this approach to measure the runtime of specific parts of your code to identify performance bottlenecks or optimize your code.
<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>


#### Q. What is Distributed Denial of Service (DDoS) attacks and how to secure NodeJS REST API from it?
#### Q. What are SOLID principles?
#### Q. How to develop Node.js app using SOLID principles?

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
