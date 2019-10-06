## Node.js Interview Questions and Answers

> Click :star2: if you like the project. Pull Request are highly appreciated.

|Sl.No|Node.js Questions|
|------|-----------------|
|01. |[What does the runtime environment mean in Node.js?](#q-what-does-the-runtime-environment-mean-in-nodejs)|
|02. |[What is Node.js?](#q-what-is-nodejs)|
|03. |[What is Node.js Process Model?](#q-what-is-nodejs-process-model)|
|04. |[What are the data types in Node.js?](#q-what-are-the-data-types-in-nodejs)|
|05. |[How to create a simple server in Node.js that returns Hello World?](#q-how-to-create-a-simple-server-in-nodejs-that-returns-hello-world)|
|06. |[How do Node.js works?](#q-how-do-nodejs-works)|
|07. |[What is an error-first callback?](#q-what-is-an-error-first-callback)|
|08. |[What is callback hell in Node.js?](#q-what-is-callback-hell-in-nodejs)|
|09. |[What are Promises?](#q-what-are-promises)|
|10. |[What tools can be used to assure consistent style? Why is it important?](#q-what-tools-can-be-used-to-assure-consistent-style-why-is-it-important)|
|11. |[When should you npm and when yarn?](#q-when-should-you-npm-and-when-yarn)|
|12. |[What is a stub? Name a use case!](#q-what-is-a-stub-name-a-use-case)|
|13. |[What is a test pyramid? How can you implement it when talking about HTTP APIs?](#q-what-is-a-test-pyramid-how-can-you-implement-it-when-talking-about-http-apis)|
|14. |[How can you secure your HTTP cookies against XSS attacks?](#q-how-can-you-secure-your-http-cookies-against-xss-attacks)|
|15. |[How can you make sure your dependencies are safe?](#q-how-can-you-make-sure-your-dependencies-are-safe)|
|16. |[What is Event loop in Node.js? And How does it work?](#q-what-is-event-loop-in-nodejs-and-how-does-it-work)|
|17. |[What is REPL? What purpose it is used for?](#q-what-is-repl-what-purpose-it-is-used-for)|
|18. |[What is the difference between Asynchronous and Non-blocking?](#q-what-is-the-difference-between-asynchronous-and-non-blocking)|
|19. |[How to debug an application in Node.js?](#q-how-to-debug-an-application-in-nodejs)|
|20. |[What are some of the most popular modules of Node.js?](#q-what-are-some-of-the-most-popular-modules-of-nodejs)|
|21. |[What is EventEmitter in Node.js?](#q-what-is-eventemitter-in-nodejs)|
|22. |[How many types of streams are present in node.js?](#q-how-many-types-of-streams-are-present-in-nodejs)|
|23. |[What is crypto in Node.js? How do you cipher the secured information in Node.js?](#q-what-is-crypto-in-nodejs-how-do-you-cipher-the-secured-information-in-nodejs)|
|24. |[What is the use of DNS module in Node.js?](#q-what-is-the-use-of-dns-module-in-nodejs)|
|25. |[What are the security mechanisms available in Node.js?](#q-what-are-the-security-mechanisms-available-in-nodejs)|
|26. |[Name the types of API functions in Node.js.](#q-name-the-types-of-api-functions-in-nodejs)
|27. |[How does Node.js handle child threads?](#q-how-does-nodejs-handle-child-threads)|
|28. |[What is the preferred method of resolving unhandled exceptions in Node.js?](#q-what-is-the-preferred-method-of-resolving-unhandled-exceptions-in-nodejs)|
|29. |[How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?](#q-how-does-nodejs-support-multi-processor-platforms-and-does-it-fully-utilize-all-processor-resources)|
|30. |[What is typically the first argument passed to a Node.js callback handler?](#q-what-is-typically-the-first-argument-passed-to-a-nodejs-callback-handler)|
|31. |[How Node.js read the content of a file?](#q-how-nodejs-read-the-content-of-a-file)|
|32. |[What is JIT and how is it related to Node.js?](#q-what-is-jit-and-how-is-it-related-to-nodejs)|
|33. |[What is difference between put and patch?](#q-what-is-difference-between-put-and-patch)|
|34. |[List types of Http requests supported by Node.js.](#q-list-types-of-http-requests-supported-by-nodejs)
|35. |[Why to use Express.js?](#q-why-to-use-expressjs)|
|36. |[Write the steps for setting up an Express JS application.](#q-write-the-steps-for-setting-up-an-express-js-application)
|37. |[Since node is a single threaded process, how to make use of all CPUs?](#q-since-node-is-a-single-threaded-process-how-to-make-use-of-all-cpus)|
|38. |[What does emitter do and what is dispatcher?](#q-what-does-emitter-do-and-what-is-dispatcher)|
|39. |[How to stop master process without suspending all of its child processes?](#q-how-to-stop-master-process-without-suspending-all-of-its-child-processes)|
|40. |[What do you understand by Reactor Pattern in Node.js](#q-what-do-you-understand-by-reactor-pattern-in-nodejs)
|41. |[What are the key features of node.js?](#q-what-are-the-key-features-of-nodejs)|
|42. |[What are globals in node.js?](#q-what-are-globals-in-nodejs)|
|43. |[What is chaining process in node.js?](#q-what-is-chaining-process-in-nodejs)|
|44. |[What is a control flow function? what are the steps does it execute?](#q-what-is-a-control-flow-function-what-are-the-steps-does-it-execute)|
|45. |[What is npm in node.js?](#q-what-is-npm-in-nodejs)|
|46. |[When to use node.js and when not to use it?](#q-when-to-use-nodejs-and-when-not-to-use-it)|
|47. |[Explain how does node.js work?](#q-explain-how-does-nodejs-work)|
|48. |[Is Node.js entirely based on a single-thread?](#q-is-nodejs-entirely-based-on-a-single-thread)|
|49. |[How to make post request in node.js?](#q-how-to-make-post-request-in-nodejs)|
|50. |[Can you create http server in nodejs, explain the code used for it?](#q-can-you-create-http-server-in-nodejs-explain-the-code-used-for-it)|
|51. |[How to load html in node.js?](#q-how-to-load-html-in-nodejs)|
|52. |[How can you listen on port 80 with Node?](#q-how-can-you-listen-on-port-80-with-node)|
|53. |[What is an event loop in Node.js ?](#q-what-is-an-event-loop-in-nodejs)||
|54. |[What is the difference between operational and programmer errors?](#q-what-is-the-difference-between-operational-and-programmer-errors)|
|55. |[Why npm shrinkwrap is useful?](#q-why-npm-shrinkwrap-is-useful)|
|56. |[What is your favourite HTTP framework and why?](#q-what-is-your-favourite-http-framework-and-why)|
|57. |[What does event-driven programming mean?](#q-what-does-event-driven-programming-mean)|
|58. |[What are the Challenges with Node.js ?](#q-what-are-the-challenges-with-nodejs)||
|59. |[What is the difference between Node.js vs Ajax?](#q-what-is-the-difference-between-nodejs-vs-ajax)|
|60. |[How Node.js overcomes the problem of blocking of I/O operations?](#q-how-nodejs-overcomes-the-problem-of-blocking-of-i-o-operations)|
|61. |[Mention the steps by which you can async in Node.js?](#q-mention-the-steps-by-which-you-can-async-in-nodejs)|
|62. |[What are the timing features of Node.js?](#q-what-are-the-timing-features-of-nodejs)|
|63. |[What is LTS releases of Node.js why should you care?](#q-what-is-lts-releases-of-nodejs-why-should-you-care)|
|64. |[Why should you separate Express 'app' and 'server'?](#q-why-should-you-separate-express-app-and-server)||
|65. |[What is the difference between process.nextTick() and setImmediate() ?](#q-what-is-the-difference-between-processnexttick-and-setimmediate)|
|66. |[Differentiate between JavaScript and Node.js.](#q-differentiate-between-javascript-and-nodejs)|



#### Q. What does the runtime environment mean in Node.js?
The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

The Node.js runtime for App Engine in the standard environment is declared in the `app.yaml` file:
```javascript
runtime: nodejs10
```

The runtime environment is literally just the environment your application is running in. This can be used to describe both the hardware and the software that is running your application. How much RAM, what version of node, what operating system, how much CPU cores, can all be referenced when talking about a runtime environment.

#### Q. What is Node.js?
Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript. 


#### Q. What is Node.js Process Model?
Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.

#### Q. What are the data types in Node.js?
**Primitive Types**  
* String 
* Number 
* Boolean 
* Undefined 
* Null 
* RegExp 


* **Buffer**: Node.js includes an additional data type called Buffer (not available in browser's JavaScript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.

#### Q. How to create a simple server in Node.js that returns Hello World?
**Step 01**: Create a project directory
```
cmd> mkdir myapp
cmd> cd myapp
```
**Step 02**: Initialize project and link it to npm
```
npm init
```
This creates a `package.json` file in your myapp folder. The file contains references for all npm packages you have downloaded to your project. The command will prompt you to enter a number of things.
You can enter your way through all of them EXCEPT this one:
```
entry point: (index.js) 
```
Rename this to:
```
app.js
```
**Step 03**: Install Express in the myapp directory
```
npm install express --save
```
**Step 04**: app.js
```
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```
**Step 05**: Run the app
```
node app.js
``` 
#### Q. How do Node.js works?
Node is completely event-driven. Basically the server consists of one thread processing one event after another.

A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.

So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js

Node JS Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

The main heart of Node JS Processing model is “Event Loop”.   
* **Single Threaded Event Loop Model Processing Steps:**  
* Clients Send request to Web Server.
* Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
* Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them. 
* Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
* Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
* If yes, then pick up one Client Request from Event Queue
    * Starts process that Client Request
    * If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
    * If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        * Checks Threads availability from Internal Thread Pool
        * Picks up one Thread and assign this Client Request to that thread.
        * That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        * Event Loop in turn, sends that Response to the respective Client.

#### Q. What is an error-first callback?
The pattern used across all the asynchronous methods in Node.js is called *Error-first Callback*. Here is an example:
```javascript
fs.readFile( "file.json", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});
```
Any asynchronous method expects one of the arguments to be a callback. The full callback argument list depends on the caller method, but the first argument is always an error object or null. When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement. The event happens after the JavaScript engine leaves the try block. 

In the preceding example, if any exception is thrown during the reading of the file, it lands on the callback function as the first and mandatory parameter.

#### Q. What is callback hell in Node.js?
`Callback hell` is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other.

An asynchronous function is one where some external activity must complete before a result can be processed; it is “asynchronous” in the sense that there is an unpredictable amount of time before a result becomes available. Such functions require a callback function to handle errors and process the result.
```javascript
getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){ 
            getMoreData(c, function(d){ 
	            getMoreData(d, function(e){ 
		            ...
		        });
	        });
        });
    });
});
```
* **Techniques for avoiding callback hell**  
There are multiple techniques for dealing with callback hell. In this tutorial, we will have a look at the below two in particular.

1. Using Async.js
1. Using Promises
1. Using Async-Await
* **Managing callbacks using Async.js**  
`Async` is a really powerful npm module for managing asynchronous nature of JavaScript. Along with Node.js, it also works for JavaScript written for browsers.

Async provides lots of powerful utilities to work with asynchronous processes under different scenarios.
```
npm install --save async
```
* **ASYNC WATERFALL**  
```javascript
var async = require('async');
async.waterfall([
    function(callback) {
        //doSomething
        callback(null, paramx); //paramx will be availaible as the first parameter to the next function
        /**
            The 1st parameter passed in callback.
            @null or @undefined or @false control moves to the next function
            in the array
            if @true or @string the control is immedeatly moved
            to the final callback fucntion
            rest of the functions in the array
            would not be executed
        */
    },
    function(arg1, callback) {
        //doSomething else
      // arg1 now equals paramx
        callback(null, result);
    },
    function(arg1, callback) {
        //do More
        // arg1 now equals 'result'
        callback(null, 'done');
    },
    function(arg1, callback) {
        //even more
        // arg1 now equals 'done'
        callback(null, 'done');
    }
], function (err, result) {
    //final callback function
    //finally do something when all function are done.
    // result now equals 'done'
});
```
* **ASYNC SERIES**  
```javascript
var async = require('async');
async.series([
    function(callback){
        // do some stuff ...
        callback(null, 'one');
        /**
            The 1st parameter passed in callback.
            @null or @undefined or @false control moves to the next function
            in the array
            if @true or @string the control is immedeatly moved
            to the final callback fucntion with the value of err same as
            passed over here and
            rest of the functions in the array
            would not be executed
        */
    },
    function(callback){
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results){
    // results is now equal to ['one', 'two']
});
```
* **Managing callbacks hell using promises**  
Promises are alternative to callbacks while dealing with asynchronous code. Promises return the value of the result or an error exception. The core of the promises is the `.then()` function, which waits for the promise object to be returned. The `.then()` function takes two optional functions as arguments and depending on the state of the promise only one will ever be called. The first function is called when the promise if fulfilled (A successful result). The second function is called when the promise is rejected.

```javascript
var outputPromise = getInputPromise().then(function (input) {
    //handle success
}, function (error) {
    //handle error
});
```
* **Using Async Await**  
Async await makes asynchronous code look like it’s synchronous. This has only been possible because of the reintroduction of promises into node.js. Async-Await only works with functions that return a promise.
```javascript
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
#### Q. What are Promises in Node.js?
It allows to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

Promises in node.js promised to do some work and then had separate callbacks that would be executed for success and failure as well as handling timeouts. Another way to think of promises in node.js was that they were emitters that could emit only two events: success and error.The cool thing about promises is you can combine them into dependency chains (do Promise C only when Promise A and Promise B complete).

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.
Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).  

**Creating a Promise**
```javascript
var myPromise = new Promise(function(resolve, reject){
   ....
})
```
#### Q. What tools can be used to assure consistent style?
* ESLint
* Standard

#### Q. When should you npm and when yarn?
* **npm**  
It is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry. Users can access the registry via the client and browse the many packages available through the npm website. Both npm and its registry are managed by npm, Inc.
```
node -v
npm -v
```

* **Yarn**  
Yarn was developed by Facebook in attempt to resolve some of npm’s shortcomings. Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. Think of Yarn as a new installer that still relies upon the same npm structure. The registry itself hasn’t changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn’t require you to make any changes to your workflow.
```
npm install yarn --global
```

**Comparing Yarn vs npm**    
* Fast: Yarn caches every package it downloads so it never needs to again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.
* Reliable: Using a detailed, but concise, lockfile format, and a deterministic algorithm for installs, Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any other system.
* Secure: Yarn uses checksums to verify the integrity of every installed package before its code is executed.
* Offline Mode: If you've installed a package before, you can install it again without any internet connection.
* Deterministic: The same dependencies will be installed the same exact way across every machine regardless of install order.
* Network Performance: Yarn efficiently queues up requests and avoids request waterfalls in order to maximize network utilization.
* Multiple Registries: Install any package from either npm or Bower and keep your package workflow the same.
* Network Resilience: A single request failing won't cause an install to fail. Requests are retried upon failure.
* Flat Mode: Resolve mismatching versions of dependencies to a single version to avoid creating duplicates.

#### Q. What is a stub? Name a use case!
Stubbing and verification for node.js tests. Enables you to validate and override behaviour of nested pieces of code such as methods, require() and npm modules or even instances of classes. This library is inspired on node-gently, MockJS and mock-require.  

**Features of Stub:**  

* Produces simple, lightweight Objects capable of extending down their tree
* Compatible with Nodejs
* Easily extendable directly or through an ExtensionManager
* Comes with predefined, usable extensions

Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

A use-case can be a file read, when you do not want to read an actual file:
```javascript
var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function (path, cb) {  
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;  
readFileStub.restore();
```

#### Q. What is a test pyramid? How can you implement it when talking about HTTP APIs?
The "Test Pyramid" is a metaphor that tells us to group software tests into buckets of different granularity. It also gives an idea of how many tests we should have in each of these groups. It shows which kinds of tests you should be looking for in the different levels of the pyramid and gives practical examples on how these can be implemented.

![alt text](https://github.com/learning-zone/NodeJS/blob/master/assets/testPyramid.png "Test Pyramid")


Mike Cohn's original test pyramid consists of three layers that your test suite should consist of (bottom to top):

1. Unit Tests
1. Service Tests
1. User Interface Tests

#### Q. How can you secure your HTTP cookies against XSS attacks?

1. When the web server sets cookies, it can provide some additional attributes to make sure the cookies won't be accessible by using malicious JavaScript. One such attribute is HttpOnly.

Example :
```javascript
Set-Cookie: [name]=[value]; HttpOnly
```

HttpOnly makes sure the cookies will be submitted only to the domain they originated from.

2. The "Secure" attribute can make sure the cookies are sent over secured channel only.

Example :
```javascript
Set-Cookie: [name]=[value]; Secure
```
3. The web server can use X-XSS-Protection response header to make sure pages do not load when they detect reflected cross-site scripting (XSS) attacks.

Example :
```javascript
X-XSS-Protection: 1; mode=block
```
4. The web server can use HTTP Content-Security-Policy response header to control what resources a user agent is allowed to load for a certain page. It can help to prevent various types of attacks like Cross Site Scripting (XSS) and data injection attacks.

Example :
```javascript
Content-Security-Policy: default-src 'self' *.http://sometrustedwebsite.com
```
#### Q. How can you make sure your dependencies are safe?
The only option is to automate the update / security audit of your dependencies. For that there are free and paid options:

1. npm outdated
2. Trace by RisingStack
3. NSP
4. GreenKeeper
5. Snyk
6. npm audit
7. npm audit fix

#### Q. What is Event loop in Node.js? And How does it work?
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Node.js is a single-threaded application, but it can support concurrency via the concept of `event` and `callbacks`. Every API of Node.js is asynchronous and being single-threaded, they use `async function calls` to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

**Event-Driven Programming**  
In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows
```javascript
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```
Example
```javascript
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
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
```

#### Q. What is REPL? What purpose it is used for?
REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and command prompt. Node comes with the REPL environment when it is installed. System interacts with the user through outputs of commands/expressions used. It is useful in writing and debugging the codes. The work of REPL can be understood from its full form:

* **Read**: It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
* **Eval**: The parsed JavaScript data structure is evaluated for the results.
* **Print**: The result is printed after the evaluation.
* **Loop**: Loops the input command. To come out of NODE REPL, press ctrl+c twice

Simple Expression
```javascript
$ node
> 10 + 20
30
> 10 + ( 20 * 30 ) - 40
570
>
```

#### Q. What is the difference between Asynchronous and Non-blocking?
* **Asynchronous**: The architecture of asynchronous explains that the message sent will not give the reply on immediate basis just like we send the mail but do not get the reply on an immediate basis. It does not have any dependency or order. Hence improving the system efficiency and performance. The server stores the information and when the action is done it will be notified.

* **Non-Blocking**: Nonblocking immediately responses with whatever data available. Moreover, it does not block any execution and keeps on running as per the requests. If an answer could not be retrieved than in those cases API returns immediately with an error. Nonblocking is mostly used with I/O(input/output). Node.js is itself based on nonblocking I/O model. There are few ways of communication that a nonblocking I/O has completed. The callback function is to be called when the operation is completed. Nonblocking call uses the help of javascript which provides a callback function.

* **Asynchronous VS Non-Blocking**  

1) Asynchronous does not respond immediately, While Nonblocking responds immediately if the data is available and if not that simply returns an error.
2) Asynchronous improves the efficiency by doing the task fast as the response might come later, meanwhile, can do complete other tasks. Nonblocking does not block any execution and if the data is available it retrieves the information quickly.
3) Asynchronous is the opposite of synchronous while nonblocking I/O is the opposite of blocking. They both are fairly similar but they are also different as asynchronous is used with a broader range of operations while nonblocking is mostly used with I/O.

#### Q. How to debug an application in Node.js?
* **node-inspector**
```
npm install -g node-inspector
```
Run
```
node-debug app.js
```

* **Debugging**
    * Debugger
    * Node Inspector
    * Visual Studio Code
    * Cloud9
    * Brackets

* **Profiling**
```
1. node --prof ./app.js
2. node --prof-process ./the-generated-log-file
```
* **Heapdumps**
    * node-heapdump with Chrome Developer Tools

* **Tracing**
    * Interactive Stack Traces with TraceGL

* **Logging**  
Libraries that output debugging information
    * Caterpillar
    * Tracer
    * scribbles

Libraries that enhance stack trace information  
* Longjohn

#### Q. What are some of the most popular modules of Node.js?
* **Async**: Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.
* **Browserify**: Browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.
* **Bower**: Bower is a package manager for the web. It works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for.
* **Backbone**: Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.
* **Csv**: csv module has four sub modules which provides CSV generation, parsing, transformation and serialization for Node.js.
* **Debug**: Debug is a tiny node.js debugging utility modelled after node core's debugging technique.
* **Express**: Express is a fast, un-opinionated, minimalist web framework. It provides small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.
* **Forever**: A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever).
* **Grunt**: is a JavaScript Task Runner that facilitates creating new projects and makes performing repetitive but necessary tasks such as linting, unit testing, concatenating and minifying files (among other things) trivial.
* **Gulp**: is a streaming build system that helps you automate painful or time-consuming tasks in your development workflow.
* **Hapi**: is a streaming build system that helps you automate painful or time-consuming tasks in your development workflow.
* **Http-server**: is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
* **Inquirer**: A collection of common interactive command line user interfaces.
* **Jquery**: jQuery is a fast, small, and feature-rich JavaScript library.
* **Jshint**: Static analysis tool to detect errors and potential problems in JavaScript code and to enforce your team's coding conventions.
* **Koa**: Koa is web app framework. It is an expressive HTTP middleware for node.js to make web applications and APIs more enjoyable to write.
* **Lodash**: The lodash library exported as a node module. Lodash is a modern JavaScript utility library delivering modularity, performance, & extras.
* **Less**: The less library exported as a node module.
* **Moment**: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
* **Mongoose**: It is a MongoDB object modeling tool designed to work in an asynchronous environment.
* **MongoDB**: The official MongoDB driver for Node.js. It provides a high-level API on top of mongodb-core that is meant for end users.
* **Npm**: is package manager for javascript.
* **Nodemon**: It is a simple monitor script for use during development of a node.js app, It will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
* **Nodemailer**: This module enables e-mail sending from a Node.js applications.
* **Optimist**: is a node.js library for option parsing with an argv hash.
* **Phantomjs**: An NPM installer for PhantomJS, headless webkit with JS API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.
* **Passport**: A simple, unobtrusive authentication middleware for Node.js. Passport uses the strategies to authenticate requests. Strategies can range from verifying username and password credentials or authentication using OAuth or OpenID.
* **Q**: Q is a library for promises. A promise is an object that represents the return value or the thrown exception that the function may eventually provide.
* **Request**: Request is Simplified HTTP request client make it possible to make http calls. It supports HTTPS and follows redirects by default.
* **Socket.io**: Its a node.js realtime framework server.
* **Sails**: Sails : API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io)
* **Through**: It enables simplified stream construction. It is easy way to create a stream that is both readable and writable.
* **Underscore**: Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.
* **Validator**: A nodejs module for a library of string validators and sanitizers.
* **Winston**: A multi-transport async logging library for Node.js
* **Ws**: A simple to use, blazing fast and thoroughly tested websocket client, server and console for node.js
* **Xml2js**: A Simple XML to JavaScript object converter.
* **Yo**: A CLI tool for running Yeoman generators
* **Zmq**: Bindings for node.js and io.js to ZeroMQ .It is a high-performance asynchronous messaging library, aimed at use in distributed or concurrent applications.

#### Q. What is EventEmitter in Node.js?
All objects that emit events are members of EventEmitter class. These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. All values returned by the called listeners are ignored and will be discarded.
Example
```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
```
Now run the main.js 
```
$ node main.js
```
Output
```
2 Listner(s) listening to connection event
listner1 executed.
listner2 executed.
Listner1 will not listen now.
listner2 executed.
1 Listner(s) listening to connection event
Program Ended.
```

#### Q. How many types of streams are present in node.js?
Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
There are four types of streams 
* **Readable** − Stream which is used for read operation.
* **Writable** − Stream which is used for write operation.
* **Duplex** − Stream which can be used for both read and write operation.
* **Transform** − A type of duplex stream where the output is computed based on input.  

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.  

For example
* **data** − This event is fired when there is data is available to read.
* **end** − This event is fired when there is no more data to read.
* **error** − This event is fired when there is any error receiving or writing data.
* **finish** − This event is fired when all the data has been flushed to underlying system.
* **Reading from a Stream**  
```javascript
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

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
```
* **Writing to a Stream**   
```javascript
var fs = require("fs");
var data = 'Simply Easy Learning';

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

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
```
* **Piping the Streams**  
Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.

```javascript
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
```
* **Chaining the Streams** 
Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.  
```javascript
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");
```

#### Q. What is crypto in Node.js? How do you cipher the secured information in Node.js?
#### Q. What is the use of DNS module in Node.js?
#### Q. What are the security mechanisms available in Node.js?
#### Q. Name the types of API functions in Node.js.
#### Q. How does Node.js handle child threads?
#### Q. What is the preferred method of resolving unhandled exceptions in Node.js?
#### Q. How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?
#### Q. What is typically the first argument passed to a Node.js callback handler?
#### Q. How Node.js read the content of a file?
#### Q. What is JIT and how is it related to Node.js? 
#### Q. What is difference between put and patch?
#### Q. List types of Http requests supported by Node.js.
#### Q. Why to use Express.js?
#### Q. Write the steps for setting up an Express JS application.
#### Q. Since node is a single threaded process, how to make use of all CPUs?
#### Q. What does emitter do and what is dispatcher?
#### Q. How to stop master process without suspending all of its child processes?
#### Q. What do you understand by Reactor Pattern in Node.js
#### Q. What are the key features of Node.js?
* **Asynchronous event driven IO helps concurrent request handling** – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests.
* **Fast in Code execution** – Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster.
* **Single Threaded but Highly Scalable** – Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests.
* **Node.js library uses JavaScript** – This is another important aspect of Node.js from the developer’s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript.
* **There is an Active and vibrant community for the Node.js framework** – The active community always keeps the framework updated with the latest trends in the web development.
* **No Buffering** – Node.js applications never buffer any data. They simply output the data in chunks.

#### Q. What are globals in Node.js?
There are three keywords in Node.js which constitute as Globals. These are Global, Process, and Buffer.

* **Global**  
The Global keyword represents the global namespace object. It acts as a container for all other <global> objects. If we type `console.log(global)`, it will print out all of them.

An important point to note about the global objects is that not all of them are in the global scope, some of them fall in the module scope. So, it’s wise to declare them without using the var keyword or add them to Global object.

Variables declared using the var keyword become local to the module whereas those declared without it get subscribed to the global object.

* **Process**  
It is also one of the global objects but includes additional functionality to turn a synchronous function into an async callback. There is no boundation to access it from anywhere in the code. It is the instance of the EventEmitter class. And each node application object is an instance of the Process object.

It primarily gives back the information about the application or the environment.
```javascript
<process.execPath> – to get the execution path of the Node app.
<process.Version> – to get the Node version currently running.
<process.platform> – to get the server platform.
```
Some of the other useful Process methods are as follows.
```javascript
<process.memoryUsage> – To know the memory used by Node application.
<process.NextTick> – To attach a callback function that will get called during the next loop. It can cause a delay in executing a function.
```

* **Buffer**  
The Buffer is a class in Node.js to handle binary data. It is similar to a list of integers but stores as a raw memory outside the V8 heap.

We can convert JavaScript string objects into Buffers. But it requires mentioning the encoding type explicitly.
```javascript
<ascii> – Specifies 7-bit ASCII data.
<utf8> – Represents multibyte encoded Unicode char set.
<utf16le> – Indicates 2 or 4 bytes, little endian encoded Unicode chars.
<base64> – Used for Base64 string encoding.
<hex> – Encodes each byte as two hexadecimal chars.
```
Here is the syntax to use the Buffer class.
```javascript
var buffer = new Buffer(string, [encoding]);
```
The above command will allocate a new buffer holding the string with <utf8> as the default encoding. However, if you like to write a <string> to an existing buffer object, then use the following line of code.
```javascript
buffer.write(string)
```
This class also offers other methods like <readInt8> and <writeUInt8> that allows read/write from various types of data to the buffer.
#### Q. What is chaining process in Node.js?
It’s an approach to connect the output of one stream to the input of another stream, thus creating a chain of multiple stream operations.

#### Q. What is a control flow function? what are the steps does it execute?
It is a generic piece of code which runs in between several asynchronous function calls is known as control flow function.

It executes the following steps.

* Control the order of execution.
* Collect data.
* Limit concurrency.
* Call the next step in the program.

#### Q. What is npm in Node.js?
NPM stands for Node Package Manager. It provides following two main functionalities.

* It works as an Online repository for node.js packages/modules which are present at <nodejs.org>.
* It works as Command line utility to install packages, do version management and dependency management of Node.js packages.
NPM comes bundled along with Node.js installable. We can verify its version using the following command-
```javascript
$ npm --version
```
NPM helps to install any Node.js module using the following command.
```javascript
$ npm install <Module Name>
```
For example, following is the command to install a famous Node.js web framework module called express-
```javascript
$ npm install express
```
#### Q. When to use Node.js and when not to use it?
* **When Should We Use Node.js?**
It’s ideal to use Node.js for developing streaming or event-based real-time applications that require less CPU usage such as.

* Chat applications.
* Game servers.
Node.js is good for fast and high-performance servers, that face the need to handle thousands of user requests simultaneously.

* Good For A Collaborative Environment.
It is suitable for environments where multiple people work together. For example, they post their documents, modify them by doing check-out and check-in of these documents.

Node.js supports such situations by creating an event loop for every change made to the document. The “Event loop” feature of Node.js enables it to handle multiple events simultaneously without getting blocked.

* Advertisement Servers.
Here again, we have servers that handle thousands of request for downloading advertisements from a central host. And Node.js is an ideal solution to handle such tasks.

* Streaming Servers.
Another ideal scenario to use Node.js is for multimedia streaming servers where clients fire request’s towards the server to download different multimedia contents from it.

To summarize, it’s good to use Node.js, when you need high levels of concurrency but less amount of dedicated CPU time.

Last but not the least, since Node.js uses JavaScript internally, so it fits best for building client-side applications that also use JavaScript.

* When To Not Use Node.Js?
However, we can use Node.js for a variety of applications. But it is a single threaded framework, so we should not use it for cases where the application requires long processing time. If the server is doing some calculation, it won’t be able to process any other requests. Hence, Node.js is best when processing needs less dedicated CPU time.

#### Q. Explain how does Node.js work?
A Node.js application creates a single thread on its invocation. Whenever Node.js receives a request, it first completes its processing before moving on to the next request.

Node.js works asynchronously by using the event loop and callback functions, to handle multiple requests coming in parallel. An Event Loop is a functionality which handles and processes all your external events and just converts them to a callback function. It invokes all the event handlers at a proper time. Thus, lots of work is done on the back-end, while processing a single request, so that the new incoming request doesn’t have to wait if the processing is not complete.

While processing a request, Node.js attaches a callback function to it and moves it to the back-end. Now, whenever its response is ready, an event is called which triggers the associated callback function to send this response.

#### Q. Is Node.js entirely based on a single-thread?
Yes, it’s true that Node.js processes all requests on a single thread. But it’s just a part of the theory behind Node.js design. In fact, more than the single thread mechanism, it makes use of events and callbacks to handle a large no. of requests asynchronously.

Moreover, Node.js has an optimized design which utilizes both JavaScript and C++ to guarantee maximum performance. JavaScript executes at the server-side by Google Chrome v8 engine. And the C++ lib UV library takes care of the non-sequential I/O via background workers.

To explain it practically, let’s assume there are 100s of requests lined up in Node.js queue. As per design, the main thread of Node.js event loop will receive all of them and forwards to background workers for execution. Once the workers finish processing requests, the registered callbacks get notified on event loop thread to pass the result back to the user.

#### Q. How to make post request in Node.js?
Following code snippet can be used to make a Post Request in Node.js.
```javascript
var request = require('request');
    request.post('http://www.example.com/action', { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    });
```
#### Q. Can you create http server in Node.js, explain the code used for it?
Yes, we can create HTTP Server in Node.js. We can use the <http-server> command to do so.

Following is the sample code.
```javascript
var http = require('http');
var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome Viewers\n');
}
var server = http.createServer(requestListener);
server.listen(4200); // The port where you want to start with.
```

#### Q. How to load html in Node.js?
To load HTML in Node.js we have to change the “Content-type” in the HTML code from text/plain to text/html.
Let’s see an example where we have created a static file in web server.
```javascript
fs.readFile(filename, "binary", function(err, file) {
    if(err) { 
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
    }

response.writeHead(200);
response.write(file, "binary");
response.end();
});
```
Now we will modify this code to load an HTML page instead of plain text.
```javascript
fs.readFile(filename, "binary", function(err, file) {
    if(err) { 
        response.writeHead(500, {"Content-Type": "text/html"});
        response.write(err + "\n");
        response.end();
        return;
    }

response.writeHead(200, {"Content-Type": "text/html"});
response.write(file);
response.end();
});
```
#### Q. How can you listen on port 80 with Node?
Instead of running on port 80 we can redirect port 80 to your application's port (>1024) using
```
iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000
```
#### Q. What is an event loop in Node.js?
#### Q. What is the difference between operational and programmer errors?
#### Q. Why npm shrinkwrap is useful?
#### Q. What is your favourite HTTP framework and why?
#### Q. What does event-driven programming mean?
#### Q. What are the Challenges with Node.js?
#### Q. What is the difference between Node.js vs Ajax?
#### Q. How Node.js overcomes the problem of blocking of I/O operations?
#### Q. Mention the steps by which you can async in Node.js?
#### Q. What are the timing features of Node.js?
#### Q. What is LTS releases of Node.js why should you care?
#### Q. Why should you separate Express 'app' and 'server'?
#### Q. What is the difference between process.nextTick() and setImmediate() ?
#### Q. Differentiate between JavaScript and Node.js.