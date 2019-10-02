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
fs.readFile( "foo.txt", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});
```

#### Q. What is callback hell in Node.js?
#### Q. What are Promises?
#### Q. What tools can be used to assure consistent style? Why is it important?
#### Q. When should you npm and when yarn?
#### Q. What is a stub? Name a use case!
#### Q. What is a test pyramid? How can you implement it when talking about HTTP APIs?
#### Q. How can you secure your HTTP cookies against XSS attacks?
#### Q. How can you make sure your dependencies are safe?
#### Q. What is Event loop in Node.js? And How does it work?
#### Q. What is REPL? What purpose it is used for?
#### Q. What is the difference between Asynchronous and Non-blocking?
#### Q. How to debug an application in Node.js?
#### Q. What are some of the most popular modules of Node.js?
#### Q. What is EventEmitter in Node.js?
#### Q. How many types of streams are present in node.js?
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