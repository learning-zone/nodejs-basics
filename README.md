## Node.js Interview Questions and Answers

|Sl.No|Node.js Questions |
|------|-----------------|
|01. |[What does the runtime environment mean in Node.js?](#q-what-does-the-runtime-environment-mean-in-nodejs)|
|02. |[What is Node.js?](#q-what-is-nodejs)|
|03. |[What is Node.js Process Model?](#q-what-is-nodejs-process-model)|
|04. |[What are the data types in node js](#q-what-are-the-data-types-in-nodejs)|

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
#### Q. How do Node.js works?
#### Q. What is an error-first callback?
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
#### Q. What are the key features of node.js?
#### Q. What are globals in node.js?
#### Q. What is chaining process in node.js?
#### Q. What is a control flow function? what are the steps does it execute?
#### Q. What is npm in node.js?
#### Q. When to use node.js and when not to use it?
#### Q. Explain how does node.js work?
#### Q. Is Node.js entirely based on a single-thread?
#### Q. How to make post request in node.js?
#### Q. Can you create http server in nodejs, explain the code used for it?
#### Q. How to load html in node.js?
#### Q. How can you listen on port 80 with Node?
#### Q. What is an event loop in Node.js ?
#### Q. What is the difference between operational and programmer errors?
#### Q. Why npm shrinkwrap is useful?
#### Q. What is your favourite HTTP framework and why?
#### Q. What does event-driven programming mean?
#### Q. What are the Challenges with Node.js ?
#### Q. What is the difference between Node.js vs Ajax?
#### Q. How Node.js overcomes the problem of blocking of I/O operations?
#### Q. Mention the steps by which you can async in Node.js?
#### Q. What are the timing features of Node.js?
#### Q. What is LTS releases of Node.js why should you care?
#### Q. Why should you separate Express 'app' and 'server'?
#### Q. What is the difference between process.nextTick() and setImmediate() ?
#### Q. Differentiate between JavaScript and Node.js.