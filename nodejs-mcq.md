# Node.js Scenario-Based MCQ

> Scenario-based multiple choice questions covering core Node.js topics.

<br/>

## Table of Contents

* [Introduction](#-1-introduction)
* [Event Loop](#-2-event-loop)
* [Modules](#-3-modules)
* [File System](#-4-file-system)
* [HTTP & HTTPS](#-5-http--https)
* [Streams & Buffers](#-6-streams--buffers)
* [Events & EventEmitter](#-7-events--eventemitter)
* [Child Processes](#-8-child-processes)
* [npm & Package Management](#-9-npm--package-management)
* [Async Programming](#-10-async-programming)
* [Error Handling](#-11-error-handling)
* [Express & Middleware](#-12-express--middleware)
* [REST APIs](#-13-rest-apis)
* [Clustering & Worker Threads](#-14-clustering--worker-threads)
* [Environment & Configuration](#-15-environment--configuration)
* [Security](#-16-security)
* [Testing](#-17-testing)
* [Debugging & Profiling](#-18-debugging--profiling)
* [Databases & ORMs](#-19-databases--orms)
* [Performance & Optimization](#-20-performance--optimization)

<br/>

## # 1. Introduction

### Q. A developer wants to run a JavaScript file called `server.js` from the command line using Node.js. Which command should they use?

- A) `node run server.js`
- B) `node server.js`
- C) `nodejs start server.js`
- D) `npm server.js`

**Answer: B) `node server.js`**

> Node.js executes a script file by passing the filename directly to the `node` command. `npm run` is used for executing scripts defined in `package.json`, not for running arbitrary files.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A junior developer asks why Node.js is described as "non-blocking." Which statement best explains this?

- A) Node.js runs multiple threads simultaneously to handle requests
- B) Node.js uses an event-driven model where I/O operations do not block the main thread
- C) Node.js skips slow operations and moves to faster ones automatically
- D) Node.js uses a separate process for each incoming request

**Answer: B) Node.js uses an event-driven model where I/O operations do not block the main thread**

> Node.js is single-threaded but uses an event loop with asynchronous I/O (via libuv) so that while waiting for disk or network operations, the thread is free to process other events. This is what "non-blocking" means in the Node.js context.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A team is debating whether to use Node.js for a CPU-intensive image processing service. What is the most accurate concern?

- A) Node.js cannot import C++ libraries
- B) Node.js does not support async/await for computation
- C) Long-running CPU tasks block the event loop, making Node.js a poor fit for CPU-heavy workloads
- D) Node.js only supports network operations, not file I/O

**Answer: C) Long-running CPU tasks block the event loop, making Node.js a poor fit for CPU-heavy workloads**

> Because Node.js is single-threaded, a CPU-bound operation (like image compression) occupies the thread the entire time, preventing the event loop from processing any other requests. Worker Threads or separate processes are recommended in such cases.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What is the output of the following code?

```js
console.log(typeof process);
```

- A) `"function"`
- B) `"undefined"`
- C) `"object"`
- D) `"process"`

**Answer: C) `"object"`**

> `process` is a global object in Node.js (an instance of `EventEmitter`) that provides information about, and control over, the current Node.js process. It is not available in browser JavaScript.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 2. Event Loop

### Q. A developer writes the following code. What is the output order?

```js
console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

console.log('end');
```

- A) `start`, `end`, `timeout`, `promise`
- B) `start`, `end`, `promise`, `timeout`
- C) `start`, `promise`, `timeout`, `end`
- D) `start`, `timeout`, `promise`, `end`

**Answer: B) `start`, `end`, `promise`, `timeout`**

> Synchronous code runs first (`start`, `end`). Then the microtask queue (Promises) is drained before the macrotask queue (setTimeout). So `promise` logs before `timeout` even though the timeout delay is 0.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. Which of the following queues has the **highest** priority in the Node.js event loop?

- A) `setTimeout` callbacks
- B) `setImmediate` callbacks
- C) `process.nextTick` callbacks
- D) I/O callbacks

**Answer: C) `process.nextTick` callbacks**

> `process.nextTick` callbacks are processed at the end of the current operation, before the event loop continues to the next phase — even before Promise microtasks. It has the highest priority of all asynchronous callbacks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer needs to schedule a callback to run after all I/O events in the current loop iteration but before `setTimeout`. Which function should they use?

- A) `process.nextTick()`
- B) `setTimeout(fn, 0)`
- C) `setImmediate()`
- D) `Promise.resolve().then()`

**Answer: C) `setImmediate()`**

> `setImmediate()` executes in the **check** phase of the event loop, which runs after I/O callbacks and before `setTimeout`/`setInterval` callbacks (when called within an I/O cycle). It is designed precisely for this use case.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer accidentally calls `process.nextTick()` recursively inside its own callback. What happens?

```js
function recursive() {
  process.nextTick(recursive);
}
recursive();
```

- A) Node.js ignores repeated `nextTick` calls
- B) The call stack overflows and throws a `RangeError`
- C) The event loop starves — I/O callbacks never execute
- D) The function runs once then stops automatically

**Answer: C) The event loop starves — I/O callbacks never execute**

> `process.nextTick` callbacks are all drained before the event loop moves to the next phase. Recursively scheduling `nextTick` keeps the nextTick queue permanently non-empty, preventing I/O and other callbacks from ever running (I/O starvation).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 3. Modules

### Q. A developer uses CommonJS and wants to expose two functions from a module. Which approach correctly exports them?

```js
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
```

- A) `export { add, subtract };`
- B) `module.exports = { add, subtract };`
- C) `exports = { add, subtract };`
- D) `module.export = { add, subtract };`

**Answer: B) `module.exports = { add, subtract };`**

> In CommonJS, `module.exports` is the actual exported object. Reassigning `exports` directly (`exports = {}`) breaks the reference to `module.exports`. The correct approach is to assign properties to `module.exports`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A project uses ES Modules (`"type": "module"` in `package.json`). A developer tries to use `require()`. What happens?

- A) `require()` works because it is a global function
- B) Node.js automatically converts `require()` to `import`
- C) A `ReferenceError` is thrown because `require` is not defined in ES Modules
- D) `require()` works only for built-in Node.js modules

**Answer: C) A `ReferenceError` is thrown because `require` is not defined in ES Modules**

> `require` is a CommonJS construct and is not available in ES Module scope. When a file is treated as an ES Module, using `require()` throws `ReferenceError: require is not defined`. You must use `import` instead.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants to import only the `readFile` function from Node.js\'s built-in `fs` module using ES Module syntax. Which is correct?

- A) `import fs from 'fs'; const { readFile } = fs;`
- B) `import { readFile } from 'fs/promises';`
- C) `const { readFile } = require('node:fs');`
- D) `import readFile from 'fs';`

**Answer: B) `import { readFile } from 'fs/promises';`**

> Named exports from Node.js built-in modules can be imported directly with ES Module destructuring syntax. `fs/promises` exposes all `fs` functions as promise-based named exports, making `{ readFile }` import valid and idiomatic.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What does Node.js do when it cannot find a required module in `node_modules`?

- A) It throws a `TypeError`
- B) It looks in parent directories up to the file system root for a `node_modules` folder
- C) It falls back to the global npm cache
- D) It imports the browser version of the module automatically

**Answer: B) It looks in parent directories up to the file system root for a `node_modules` folder**

> Node.js module resolution traverses up the directory tree, checking each `node_modules` folder until it finds the module or reaches the root. If not found anywhere, it throws `Error: Cannot find module`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 4. File System

### Q. A developer wants to read a large log file without loading the entire content into memory. Which approach is best?

- A) `fs.readFileSync(path, 'utf8')`
- B) `fs.readFile(path, callback)`
- C) `fs.createReadStream(path)`
- D) `fs.open(path, 'r', callback)`

**Answer: C) `fs.createReadStream(path)`**

> `createReadStream` reads the file as a stream, emitting chunks of data instead of loading everything into memory. This is ideal for large files. Both sync and async `readFile` variants load the entire file into memory before the callback/return.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer writes the following code. What is the issue?

```js
const fs = require('fs');

fs.readFile('./data.json', (err, data) => {
  console.log(data.toString());
});

fs.writeFileSync('./data.json', '{"key":"value"}');
```

- A) `readFile` cannot read JSON files
- B) The write may complete before the read, overwriting data being read
- C) `writeFileSync` is not a valid `fs` method
- D) `toString()` is not valid on Buffer objects

**Answer: B) The write may complete before the read, overwriting data being read**

> `readFile` is asynchronous while `writeFileSync` is synchronous. The synchronous write can execute and modify the file before the async read finishes, leading to a race condition. I/O operations on the same file should be properly sequenced.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer needs to watch a file for changes and log a message whenever it is modified. Which method should they use?

- A) `fs.readFile()` in a loop
- B) `fs.watch()`
- C) `fs.stat()` in a `setInterval`
- D) `fs.open()` with the `'w'` flag

**Answer: B) `fs.watch()`**

> `fs.watch()` uses the OS kernel\'s file-watching mechanisms to efficiently detect changes. Polling with `setInterval` and `fs.stat()` is resource-intensive and imprecise; `fs.readFile` in a loop is not designed for file watching at all.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What does the `'a'` flag mean when passed to `fs.writeFile()`?

- A) Asynchronous write mode
- B) Append to the file instead of overwriting it
- C) Allocate disk space before writing
- D) Write only if the file already exists

**Answer: B) Append to the file instead of overwriting it**

> The `'a'` flag opens the file for appending. If the file does not exist, it is created. Using `'w'` (the default for `writeFile`) truncates the file before writing. Use `'a'` when you want to add to existing content.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 5. HTTP & HTTPS

### Q. A developer creates a basic HTTP server. What does the following code print when a browser visits `http://localhost:3000`?

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000);
```

- A) Nothing — the server doesn\'t log anything
- B) `Hello World` in the terminal
- C) `Hello World` in the browser
- D) A `200 OK` string in the terminal

**Answer: C) `Hello World` in the browser**

> The `res.end('Hello World')` sends the string as the HTTP response body to the client (the browser). Nothing is logged to the terminal because there is no `console.log` in the code.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer builds a REST API and forgets to call `res.end()`. What happens?

- A) Node.js automatically ends the response after 30 seconds
- B) The client hangs waiting for the response to complete
- C) The server throws an `Error: write after end` exception
- D) Node.js sends an empty `200 OK` response automatically

**Answer: B) The client hangs waiting for the response to complete**

> The HTTP response is only sent to the client when the response is ended (via `res.end()` or by writing the last chunk with the `end` flag). Without it, the connection stays open and the client waits indefinitely until a timeout.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. An API server needs to handle CORS. A developer adds the following header. What does it do?

```js
res.setHeader('Access-Control-Allow-Origin', '*');
```

- A) Restricts access to requests from the same origin only
- B) Allows any origin to make cross-origin requests to this server
- C) Enables HTTPS for all requests
- D) Prevents caching of the response

**Answer: B) Allows any origin to make cross-origin requests to this server**

> The `Access-Control-Allow-Origin: *` header tells browsers that any website may send cross-origin requests to this server. While convenient for public APIs, this should be restricted to known origins in production for security.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses `http.get()` to consume an external API but only receives partial data. What is the most likely cause?

- A) `http.get()` only supports HTTPS endpoints
- B) The response body arrives in chunks and the developer didn\'t accumulate them before parsing
- C) The external API returned a `206 Partial Content` status
- D) `http.get()` is limited to 1KB of response data

**Answer: B) The response body arrives in chunks and the developer didn\'t accumulate them before parsing**

> HTTP responses are streams in Node.js. Data arrives in multiple `'data'` events. You must listen for all chunks, concatenate them, then parse in the `'end'` event. Parsing on the first `'data'` event gives incomplete data.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 6. Streams & Buffers

### Q. A developer pipes a readable stream to a writable stream. What does `pipe()` do automatically?

```js
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');
readable.pipe(writable);
```

- A) Converts the file from text to binary
- B) Manages backpressure, pausing the readable when the writable cannot keep up
- C) Compresses the data during transfer
- D) Reads the entire file into memory before writing

**Answer: B) Manages backpressure, pausing the readable when the writable cannot keep up**

> `pipe()` handles backpressure automatically: it pauses the readable stream when the writable stream\'s buffer is full, and resumes when the buffer drains. This prevents out-of-memory errors when reading faster than writing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer needs to create a transform stream that converts all incoming text to uppercase. Which class should they extend?

- A) `stream.Readable`
- B) `stream.Writable`
- C) `stream.Transform`
- D) `stream.Duplex`

**Answer: C) `stream.Transform`**

> A `Transform` stream is both readable and writable; it receives input, processes it, and outputs transformed data. `Readable` only produces data, `Writable` only consumes it, and `Duplex` is bidirectional without a defined transform relationship.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What does the following code produce?

```js
const buf = Buffer.from('Node.js', 'utf8');
console.log(buf.toString('hex'));
```

- A) `Node.js` unchanged
- B) A base64-encoded string
- C) A hexadecimal representation of the UTF-8 encoded string
- D) A binary representation of the string

**Answer: C) A hexadecimal representation of the UTF-8 encoded string**

> `Buffer.from('Node.js', 'utf8')` creates a buffer from the string using UTF-8 encoding. Calling `.toString('hex')` converts those bytes to a hex string (e.g., `4e6f64652e6a73`). Buffers are Node.js\'s way of handling raw binary data.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer processes a large CSV upload using streams. They notice memory usage is low and throughput is high. Which stream mode is responsible for this behavior?

- A) Paused mode with manual `read()` calls
- B) Flowing mode activated by attaching a `'data'` event listener
- C) Buffered mode where all chunks are stored before processing
- D) Synchronous mode where the file is processed line by line

**Answer: B) Flowing mode activated by attaching a `'data'` event listener**

> Attaching a `'data'` event listener switches a Readable stream to **flowing mode**, where data is emitted as soon as it arrives. This keeps memory low because chunks are processed and discarded rather than accumulated.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 7. Events & EventEmitter

### Q. A developer emits an event before any listener is registered. What happens?

```js
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.emit('data', 42);
emitter.on('data', (val) => console.log(val));
```

- A) `42` is logged after the listener is registered
- B) Node.js queues the event and replays it when a listener is added
- C) The event is lost because no listener existed at the time of emission
- D) An error is thrown for emitting without a listener

**Answer: C) The event is lost because no listener existed at the time of emission**

> `EventEmitter` does not buffer events. If `emit()` is called before any listener is attached for that event, the event is silently discarded (except for the special `'error'` event, which throws if unhandled).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer registers 15 listeners on a single event. Node.js prints a warning. Why?

- A) EventEmitter has a hard limit of 10 listeners per event by default
- B) Node.js warns when more than 15 listeners are registered to prevent circular references
- C) 15 is the global maximum; any more throws an error
- D) The `'maxListeners'` warning means memory has been exhausted

**Answer: A) EventEmitter has a hard limit of 10 listeners per event by default**

> Node.js warns when more than 10 listeners are added for a single event on an `EventEmitter` instance — this is a heuristic to detect potential memory leaks (e.g., listeners added in a loop). The limit can be changed with `emitter.setMaxListeners(n)`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants a listener to fire only the first time an event is emitted and then remove itself. Which method should they use?

- A) `emitter.on('event', handler)`
- B) `emitter.addListener('event', handler)`
- C) `emitter.once('event', handler)`
- D) `emitter.prependListener('event', handler)`

**Answer: C) `emitter.once('event', handler)`**

> `emitter.once()` registers a one-time listener that is automatically removed after its first invocation. This is useful for events like `'connect'` or `'open'` that should only trigger setup logic once.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. An unhandled `'error'` event is emitted on an `EventEmitter`. What is the default behavior?

- A) The error is silently swallowed
- B) The error is printed to `stderr` and the process exits with a non-zero code
- C) Node.js restarts the process automatically
- D) The error is converted to a rejected Promise

**Answer: B) The error is printed to `stderr` and the process exits with a non-zero code**

> The `'error'` event is special in Node.js. If emitted without a registered `'error'` listener, Node.js treats it as an uncaught exception — it prints the error stack trace to `stderr` and terminates the process.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 8. Child Processes

### Q. A developer needs to run a shell command from Node.js and capture its stdout. Which method is most appropriate?

- A) `child_process.fork()`
- B) `child_process.exec()`
- C) `child_process.spawn()` with no options
- D) `process.exec()`

**Answer: B) `child_process.exec()`**

> `exec()` runs a command in a shell and buffers the entire stdout/stderr output, delivering it to a callback. It is convenient for commands with small output. `spawn()` is better for large or streaming output. `fork()` is specifically for spawning Node.js processes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer spawns a child process using `fork()` to offload a CPU-intensive task. How do the parent and child processes communicate?

- A) Shared memory via `Buffer`
- B) Through a built-in IPC channel using `process.send()` and `process.on('message')`
- C) Via HTTP on a loopback port
- D) Through a shared file on disk

**Answer: B) Through a built-in IPC channel using `process.send()` and `process.on('message')`**

> `child_process.fork()` creates a separate Node.js process and establishes an IPC (Inter-Process Communication) channel. The parent uses `child.send(msg)` and `child.on('message', ...)`, while the child uses `process.send(msg)` and `process.on('message', ...)`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What is the key difference between `exec()` and `spawn()` when running child processes?

- A) `exec()` returns a stream; `spawn()` returns a callback
- B) `exec()` buffers all output in memory; `spawn()` streams output incrementally
- C) `spawn()` runs in a shell; `exec()` does not
- D) `exec()` supports only built-in shell commands

**Answer: B) `exec()` buffers all output in memory; `spawn()` streams output incrementally**

> `exec()` collects all stdout/stderr into a buffer and delivers it when the process ends — unsuitable for large output. `spawn()` returns a child process object with `stdout` and `stderr` streams, enabling real-time data processing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 9. npm & Package Management

### Q. A developer installs a package with `npm install lodash`. Where is the package recorded?

- A) Only in `node_modules/`
- B) In `package.json` under `"dependencies"` and in `package-lock.json`
- C) In `package.json` under `"devDependencies"` only
- D) Only in `package-lock.json`

**Answer: B) In `package.json` under `"dependencies"` and in `package-lock.json`**

> Since npm v5+, `npm install <package>` automatically adds the package to `"dependencies"` in `package.json` and records the exact resolved version tree in `package-lock.json`. Use `--save-dev` to add to `"devDependencies"` instead.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A team wants to ensure every developer installs the exact same dependency versions. Which file must be committed to source control?

- A) `node_modules/`
- B) `.npmrc`
- C) `package-lock.json`
- D) `npm-debug.log`

**Answer: C) `package-lock.json`**

> `package-lock.json` records the exact resolved version of every dependency and sub-dependency. Committing it ensures deterministic installs across all environments. `node_modules/` should be in `.gitignore`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer runs `npm ci` instead of `npm install` in a CI pipeline. What is the key difference?

- A) `npm ci` skips installing devDependencies
- B) `npm ci` installs from `package-lock.json` exactly and deletes `node_modules` first
- C) `npm ci` is faster because it uses a global cache only
- D) `npm ci` does not update `package-lock.json` if versions differ

**Answer: B) `npm ci` installs from `package-lock.json` exactly and deletes `node_modules` first**

> `npm ci` is designed for automated environments. It removes the existing `node_modules` folder and installs dependencies exactly as specified in `package-lock.json`. If `package.json` and `package-lock.json` are out of sync, it fails — ensuring reproducibility.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants to run a script called `"test"` defined in `package.json` without specifying the full path to Node. Which command should they use?

- A) `node run test`
- B) `npm test` or `npm run test`
- C) `npx test`
- D) `./node_modules/.bin/test`

**Answer: B) `npm test` or `npm run test`**

> `npm run <script>` executes any script defined in `package.json`\'s `"scripts"` field. For the special scripts `test`, `start`, and `stop`, npm provides shorthand commands (`npm test`, `npm start`, `npm stop`) without the `run` keyword.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 10. Async Programming

### Q. What is the issue with the following code?

```js
function fetchData(callback) {
  const data = db.query('SELECT * FROM users');
  callback(null, data);
}
```

- A) The callback signature is wrong — error should be the second argument
- B) `db.query` is synchronous here; if it is actually async, the callback is called before data is available
- C) `callback` cannot accept `null` as the first argument
- D) `fetchData` should return a Promise instead

**Answer: B) `db.query` is synchronous here; if it is actually async, the callback is called before data is available**

> If `db.query` is asynchronous (as most database calls are), the `data` variable would be a pending operation rather than the result. The callback should be passed into `db.query` so it is called when the data is actually ready.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer chains multiple `.then()` calls but forgets to return the Promise in one of them. What happens?

```js
fetchUser()
  .then(user => {
    fetchProfile(user.id); // forgot to return
  })
  .then(profile => {
    console.log(profile); // what is profile?
  });
```

- A) The chain waits for `fetchProfile` to resolve before continuing
- B) An error is thrown because the Promise was not returned
- C) `profile` is `undefined` because the previous `.then` returned nothing
- D) The chain skips the second `.then` entirely

**Answer: C) `profile` is `undefined` because the previous `.then` returned nothing**

> When a `.then()` handler does not explicitly return a value, the Promise resolves with `undefined`. The next `.then()` receives `undefined` as its argument. Always `return` Promises inside `.then()` to maintain proper chaining.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses `Promise.all()` with three API calls. One of them rejects. What happens?

```js
Promise.all([api1(), api2(), api3()])
  .then(results => console.log(results))
  .catch(err => console.error(err));
```

- A) The other two results are still returned along with the error
- B) `Promise.all` ignores rejected promises and continues
- C) The `.catch` is called immediately with the first rejection; other promises continue but their results are discarded
- D) Node.js retries the failed API call automatically

**Answer: C) The `.catch` is called immediately with the first rejection; other promises continue but their results are discarded**

> `Promise.all` rejects as soon as **any** of the input Promises rejects (fail-fast behavior). The remaining Promises continue to run but their results are not passed to `.then`. Use `Promise.allSettled()` to wait for all Promises regardless of outcome.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer writes the following `async` function. What does it return?

```js
async function greet() {
  return 'Hello';
}

console.log(greet());
```

- A) `'Hello'`
- B) `Promise { 'Hello' }`
- C) `undefined`
- D) `Promise { pending }`

**Answer: B) `Promise { 'Hello' }`**

> An `async` function always returns a Promise. If a non-Promise value is returned, it is wrapped in a resolved Promise. `console.log(greet())` logs `Promise { 'Hello' }`. To get `'Hello'`, you must `await greet()` or use `.then()`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 11. Error Handling

### Q. A developer uses `async/await` but does not handle errors. What happens when the awaited Promise rejects?

```js
async function loadData() {
  const data = await fetchFromDB(); // rejects
  return data;
}
loadData();
```

- A) The error is silently swallowed
- B) An `UnhandledPromiseRejectionWarning` is printed; in Node.js 15+, the process crashes
- C) Node.js automatically retries the operation
- D) The function returns `null` on rejection

**Answer: B) An `UnhandledPromiseRejectionWarning` is printed; in Node.js 15+, the process crashes**

> When a rejected Promise is not caught (no `try/catch` around `await` and no `.catch()` on the returned Promise), it becomes an unhandled rejection. From Node.js v15 onward, unhandled rejections crash the process by default. Always wrap `await` calls in `try/catch`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer defines a custom error class for validation errors. Which is the correct approach?

- A) `function ValidationError(msg) { this.message = msg; }`
- B) `class ValidationError extends Error { constructor(msg) { super(msg); this.name = 'ValidationError'; } }`
- C) `const ValidationError = new Error('validation');`
- D) `class ValidationError { constructor(msg) { this.message = msg; } }`

**Answer: B) `class ValidationError extends Error { constructor(msg) { super(msg); this.name = 'ValidationError'; } }`**

> Extending the built-in `Error` class ensures the custom error has a proper `stack` trace, `message`, and `name`. Calling `super(msg)` initializes the `message` property. Setting `this.name` gives a descriptive type for `instanceof` checks and logging.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer catches an error in an Express route but does not pass it to `next()`. What is the consequence?

```js
app.get('/data', async (req, res) => {
  try {
    const result = await getData();
    res.json(result);
  } catch (err) {
    console.error(err);
    // forgot: next(err)
  }
});
```

- A) Express automatically sends a `500` response
- B) The request hangs — the client never receives a response
- C) The error middleware is called with the error
- D) Express retries the route handler once

**Answer: B) The request hangs — the client never receives a response**

> If the catch block only logs the error but neither sends a response (`res.json`, `res.status().send()`) nor calls `next(err)`, the request remains open. The client waits indefinitely until a connection timeout.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses `process.on('uncaughtException', ...)`. What is the recommended action inside this handler?

- A) Restart the server and continue processing requests
- B) Log the error and exit the process gracefully after cleanup
- C) Ignore the error and continue normally
- D) Emit a custom event and resume execution

**Answer: B) Log the error and exit the process gracefully after cleanup**

> After an `uncaughtException`, the application is in an unknown, potentially corrupt state. The Node.js documentation strongly recommends performing only minimal cleanup (e.g., logging, flushing buffers) and then exiting. Continuing normal operation risks unpredictable behavior. Use a process manager like PM2 to restart automatically.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 12. Express & Middleware

### Q. A developer adds middleware with `app.use()` after the route definitions. What happens when that route is matched?

```js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('Hi'));

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});
```

- A) The middleware runs before the route handler
- B) The middleware runs after the route handler sends the response
- C) The middleware never runs for `/hello` requests
- D) Express throws a routing conflict error

**Answer: C) The middleware never runs for `/hello` requests**

> Express processes middleware and routes in the order they are defined. Since the `/hello` route handler sends a response and does not call `next()`, the request–response cycle ends there. The middleware added after the route never executes for that path.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer registers an Express error-handling middleware. What is the required function signature?

- A) `(req, res) => {}`
- B) `(req, res, next) => {}`
- C) `(err, req, res, next) => {}`
- D) `(err, res) => {}`

**Answer: C) `(err, req, res, next) => {}`**

> Express identifies error-handling middleware by its four-parameter signature: `(err, req, res, next)`. If you define middleware with fewer parameters, Express treats it as a regular middleware, not an error handler. All four parameters must be declared even if `next` is unused.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants to parse JSON request bodies in Express. Which middleware should they add?

- A) `app.use(express.text())`
- B) `app.use(express.urlencoded())`
- C) `app.use(express.json())`
- D) `app.use(express.raw())`

**Answer: C) `app.use(express.json())`**

> `express.json()` is the built-in middleware (available since Express 4.16) that parses incoming requests with JSON payloads and makes the parsed data available on `req.body`. Without it, `req.body` is `undefined` for JSON requests.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses `Router` to organize routes by feature. What is the correct way to mount a router at `/api/users`?

```js
// userRouter.js
const router = require('express').Router();
router.get('/', getAllUsers);
module.exports = router;
```

- A) `app.route('/api/users', userRouter)`
- B) `app.use('/api/users', userRouter)`
- C) `app.get('/api/users', userRouter)`
- D) `app.mount('/api/users', userRouter)`

**Answer: B) `app.use('/api/users', userRouter)`**

> `app.use(path, router)` mounts the router at the given path prefix. The router\'s `GET /` route then handles `GET /api/users`. Using `app.get()` would only match that single GET method and would not delegate all HTTP methods to the router.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 13. REST APIs

### Q. A REST API returns a `201 Created` status. What does this indicate?

- A) The request was received but not yet processed
- B) The request succeeded and a new resource was created
- C) The resource already existed and was updated
- D) The client must follow a redirect to see the new resource

**Answer: B) The request succeeded and a new resource was created**

> HTTP `201 Created` indicates that the server successfully fulfilled the request and created a new resource. It is typically returned in response to `POST` or `PUT` requests. The response may include a `Location` header pointing to the new resource.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer exposes route `DELETE /api/users/:id`. A client sends a request without an authentication token. Which HTTP status code should the server return?

- A) `400 Bad Request`
- B) `401 Unauthorized`
- C) `403 Forbidden`
- D) `404 Not Found`

**Answer: B) `401 Unauthorized`**

> `401 Unauthorized` means the request requires authentication and the client has not provided valid credentials. `403 Forbidden` is returned when the client is authenticated but lacks permission. `400` is for malformed requests; `404` when the resource is not found.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A REST API developer needs to update only the `email` field of a user without replacing the entire resource. Which HTTP method is appropriate?

- A) `PUT`
- B) `POST`
- C) `PATCH`
- D) `UPDATE`

**Answer: C) `PATCH`**

> `PATCH` applies a partial modification to a resource. `PUT` replaces the entire resource with the request payload. `POST` creates a new resource. `UPDATE` is not a standard HTTP method.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants their API to return paginated results. Which query string format follows REST best practices?

- A) `/api/products/page/2/limit/10`
- B) `/api/products?page=2&limit=10`
- C) `/api/products#page=2`
- D) `/api/products/2/10`

**Answer: B) `/api/products?page=2&limit=10`**

> Query parameters are the standard REST convention for filtering, sorting, and pagination — they do not alter the resource identity. Path segments (like option A or D) are used to identify specific resources, not to control representation. Fragment identifiers (`#`) are client-side only.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 14. Clustering & Worker Threads

### Q. A single Node.js process on an 8-core machine handles HTTP requests but only uses one core. What is the recommended solution?

- A) Run 8 separate npm scripts pointing to the same file
- B) Use the `cluster` module to fork a worker per CPU core
- C) Set `NODE_THREADS=8` environment variable
- D) Use `setImmediate` to distribute work across ticks

**Answer: B) Use the `cluster` module to fork a worker per CPU core**

> The `cluster` module allows a Node.js application to create child processes (workers) that share the same server port. The master process distributes incoming connections across workers, making use of multiple CPU cores for I/O-bound workloads.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants to run a computationally expensive JSON parsing task without blocking the event loop. Which is the best approach?

- A) Run it inside a `setImmediate` callback
- B) Run it inside a `Promise`
- C) Offload it to a `Worker Thread`
- D) Run it in a `process.nextTick` callback

**Answer: C) Offload it to a `Worker Thread`**

> `Worker Threads` (from the `worker_threads` module) run JavaScript in a separate thread with its own V8 instance. CPU-intensive tasks can be moved there without blocking the main thread\'s event loop. `setImmediate`, `Promise`, and `nextTick` all still run on the main thread.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. In a clustered Node.js application, a worker process crashes. What should the master process do?

- A) Exit itself because the cluster is no longer balanced
- B) Listen for the `'exit'` event and fork a new worker to replace it
- C) Restart all workers simultaneously to ensure consistency
- D) Log the crash and wait for a manual restart

**Answer: B) Listen for the `'exit'` event and fork a new worker to replace it**

> The master process should listen for the `'exit'` event on each worker and call `cluster.fork()` to spawn a replacement. This keeps the application running even if individual workers crash, providing fault tolerance.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 15. Environment & Configuration

### Q. A developer stores a database password in the source code. Why is this a security problem?

- A) Environment variables are faster to access than string literals
- B) Hard-coded secrets can be exposed if the repository is shared or made public
- C) Node.js cannot read string literals at runtime
- D) Passwords must be stored in binary format

**Answer: B) Hard-coded secrets can be exposed if the repository is shared or made public**

> Hard-coded credentials in source code are a critical security risk (OWASP A02: Cryptographic Failures). They are visible to anyone with repository access, remain in Git history even after removal, and cannot be rotated without a code change. Secrets should be stored in environment variables or a secrets manager.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses the `dotenv` package. What does the following accomplish?

```js
require('dotenv').config();
console.log(process.env.DB_HOST);
```

- A) Creates a `.env` file with `DB_HOST` if it does not exist
- B) Loads variables from a `.env` file into `process.env`
- C) Encrypts the `.env` file before reading it
- D) Exports `process.env` to a `.env` file

**Answer: B) Loads variables from a `.env` file into `process.env`**

> `dotenv.config()` reads a `.env` file from the project root and parses each `KEY=VALUE` line into `process.env`. This allows environment-specific configuration without modifying source code. The `.env` file itself should be in `.gitignore`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. What is `NODE_ENV` typically used for in a Node.js application?

- A) Specifying the Node.js version to use
- B) Setting the number of worker threads
- C) Indicating the runtime environment (development, test, production) to toggle behavior
- D) Defining the port number for the HTTP server

**Answer: C) Indicating the runtime environment (development, test, production) to toggle behavior**

> `NODE_ENV` is a convention used by frameworks and libraries (Express, React, etc.) to alter their behavior. For example, Express enables verbose error messages in development and suppresses them in production. Setting `NODE_ENV=production` often enables performance optimizations.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 16. Security

### Q. A developer accepts user input and passes it directly to a shell command. What vulnerability does this introduce?

```js
const { exec } = require('child_process');
app.get('/ping', (req, res) => {
  exec(`ping ${req.query.host}`, (err, stdout) => res.send(stdout));
});
```

- A) Path Traversal
- B) Command Injection
- C) SQL Injection
- D) XML External Entity (XXE) Injection

**Answer: B) Command Injection**

> Passing unsanitized user input into a shell command allows an attacker to inject arbitrary commands (e.g., `host=google.com; rm -rf /`). Use `execFile()` with argument arrays instead of `exec()` with string interpolation, or validate and whitelist input strictly.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer builds an Express API and wants to protect against common security vulnerabilities. Which package provides a set of HTTP security headers?

- A) `cors`
- B) `passport`
- C) `helmet`
- D) `morgan`

**Answer: C) `helmet`**

> `helmet` is a middleware that sets various HTTP security headers (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`). Adding `app.use(helmet())` is a quick win that mitigates many common web vulnerabilities.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. An attacker sends thousands of requests to an API endpoint to overload the server. Which middleware helps mitigate this?

- A) `express.json()`
- B) `express-rate-limit`
- C) `compression`
- D) `helmet`

**Answer: B) `express-rate-limit`**

> `express-rate-limit` limits the number of requests a client can make in a given time window. Exceeding the limit returns a `429 Too Many Requests` response. This mitigates brute-force attacks and basic denial-of-service attempts.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer stores user passwords in the database as plain text. A breach exposes the database. What is the risk and the correct solution?

- A) No risk — passwords are only text; use a stronger database
- B) All passwords are immediately compromised; passwords should be hashed with `bcrypt` before storage
- C) Encrypt passwords with AES; store the encryption key in the same database
- D) Use base64 encoding to obscure passwords

**Answer: B) All passwords are immediately compromised; passwords should be hashed with `bcrypt` before storage**

> Plain-text passwords expose all user accounts on breach. `bcrypt` applies a slow, salted hashing algorithm that is computationally expensive to reverse. AES encryption is reversible (and sharing the key is insecure). Base64 is encoding, not encryption — trivially reversible.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 17. Testing

### Q. A developer wants to test a function that makes an HTTP call to an external API without hitting the real endpoint. What technique should they use?

- A) Run the tests in production environment only
- B) Mock the HTTP module or use a library like `nock` to intercept requests
- C) Increase the test timeout so the real API has more time to respond
- D) Skip testing functions that make network calls

**Answer: B) Mock the HTTP module or use a library like `nock` to intercept requests**

> Mocking isolates the unit under test from external dependencies. `nock` intercepts Node.js HTTP/HTTPS requests and returns predefined responses, making tests fast, deterministic, and free from network issues or rate limits.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses Jest and writes the following test. What does `toBe` check?

```js
test('sum', () => {
  expect(1 + 1).toBe(2);
});
```

- A) Deep equality of objects
- B) Strict equality (`===`) of primitive values
- C) Type coercion equality (`==`)
- D) Whether the value is truthy

**Answer: B) Strict equality (`===`) of primitive values**

> `toBe` uses `Object.is()` under the hood, which behaves like strict equality (`===`). For comparing objects and arrays by value, use `toEqual`, which performs deep equality. `toBe` will fail for two different objects even if their contents are identical.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer writes integration tests for Express routes. Which library lets them send HTTP requests to the app without starting a real server?

- A) `axios`
- B) `supertest`
- C) `chai`
- D) `sinon`

**Answer: B) `supertest`**

> `supertest` wraps an Express app and sends HTTP requests directly to it in-process without binding to a port. It returns a fluent API for asserting status codes, headers, and body content — ideal for route-level integration tests.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer\'s test suite passes locally but fails in CI because a `setTimeout` delay is too slow. What is the best fix?

- A) Increase the CI machine\'s CPU
- B) Replace `setTimeout` with `process.nextTick` in the source code
- C) Use Jest\'s fake timers (`jest.useFakeTimers()`) to control time in tests
- D) Add a 5-second `sleep` before each test assertion

**Answer: C) Use Jest\'s fake timers (`jest.useFakeTimers()`) to control time in tests**

> Jest\'s fake timers replace global timer functions with mocks. You control time with `jest.advanceTimersByTime(ms)`, making time-dependent tests both fast and deterministic. Relying on real timers makes tests flaky and slow.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 18. Debugging & Profiling

### Q. A developer wants to debug a running Node.js application using Chrome DevTools. Which flag must they start Node.js with?

- A) `--debug`
- B) `--inspect`
- C) `--trace`
- D) `--devtools`

**Answer: B) `--inspect`**

> Starting Node.js with `--inspect` (or `--inspect-brk` to break on the first line) enables the V8 inspector protocol on `ws://127.0.0.1:9229`. Chrome DevTools at `chrome://inspect` can then connect to set breakpoints, inspect variables, and profile CPU/memory.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A Node.js server\'s memory usage grows continuously over several hours and eventually crashes. What is the most likely cause?

- A) The server is processing too many requests
- B) A memory leak — objects are being retained in memory and never garbage collected
- C) Node.js has a hard memory limit of 512 MB
- D) The `Buffer` pool is exhausted

**Answer: B) A memory leak — objects are being retained in memory and never garbage collected**

> Continuous memory growth is the classic symptom of a memory leak. Common causes include event listeners that are never removed, closures holding large references, or caches that grow without bounds. Tools like Chrome DevTools heap snapshots or `clinic.js` help identify the leak.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses `console.time('op')` and `console.timeEnd('op')`. What do these do?

- A) Log timestamps in ISO format
- B) Measure and log the elapsed time between the two calls with the given label
- C) Create a performance entry in the browser\'s performance timeline
- D) Start and stop CPU profiling

**Answer: B) Measure and log the elapsed time between the two calls with the given label**

> `console.time(label)` starts a timer with the given label. `console.timeEnd(label)` stops it and prints the elapsed milliseconds to the console. It is a quick way to measure the duration of synchronous code or async operations.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 19. Databases & ORMs

### Q. A developer uses Mongoose with MongoDB. They define a schema but query the database before the connection is established. What happens?

- A) Mongoose throws an immediate connection error
- B) Mongoose buffers the operation and executes it once the connection is established
- C) The query returns `null` silently
- D) Mongoose opens a second connection automatically

**Answer: B) Mongoose buffers the operation and executes it once the connection is established**

> Mongoose has a built-in command buffering mechanism. Queries issued before the connection is open are queued and replayed once `mongoose.connect()` resolves. This allows developers to define models and queries before connecting without errors.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer uses a raw SQL query with user input. What is the vulnerability and fix?

```js
const query = `SELECT * FROM users WHERE name = '${req.body.name}'`;
db.query(query);
```

- A) XSS — sanitize the input with `encodeURIComponent`
- B) SQL Injection — use parameterized queries or prepared statements instead
- C) CSRF — add a CSRF token to the request body
- D) NoSQL Injection — switch to MongoDB

**Answer: B) SQL Injection — use parameterized queries or prepared statements instead**

> String interpolation of user input into SQL queries allows attackers to manipulate the query structure (e.g., `'; DROP TABLE users; --`). Parameterized queries (e.g., `db.query('SELECT * FROM users WHERE name = ?', [req.body.name])`) treat input as data, not SQL code.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer fetches a large list of users from a database and returns all fields including passwords and tokens to the API response. What is the issue?

- A) Fetching all fields is slower than fetching specific fields
- B) Sensitive fields are unintentionally exposed to clients — over-fetching is a security and performance problem
- C) The database cannot serialize all fields to JSON
- D) Express automatically strips sensitive fields from responses

**Answer: B) Sensitive fields are unintentionally exposed to clients — over-fetching is a security and performance problem**

> Always use field projection (SELECT only required columns / Mongoose `.select('-password -token')`) to exclude sensitive data. Sending raw database records to clients risks leaking credentials and PII, and increases payload size unnecessarily.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer runs a database query inside a loop, resulting in N+1 queries. Which approach resolves this?

```js
const orders = await Order.find();
for (const order of orders) {
  order.user = await User.findById(order.userId); // N queries
}
```

- A) Use `Promise.race()` to run queries concurrently
- B) Use database-level joins or Mongoose\'s `.populate()` to fetch related data in fewer queries
- C) Add an index on `userId` to speed up individual queries
- D) Cache every `User` query result in a global variable

**Answer: B) Use database-level joins or Mongoose\'s `.populate()` to fetch related data in fewer queries**

> The N+1 problem executes one extra query per record. Mongoose `.populate('userId')` resolves references in a single additional query. SQL ORMs provide `JOIN` or eager loading (`include`). Indexing helps query speed but does not reduce query count.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 20. Performance & Optimization

### Q. A developer notices their Express API has slow response times under load. They profile the app and find JSON serialization of large objects is the bottleneck. What is a practical optimization?

- A) Switch from `res.json()` to `res.send()` with a string
- B) Enable HTTP/2 on the server
- C) Use `JSON.stringify` with a replacer to exclude unused fields, or use a faster serialization library like `fast-json-stringify`
- D) Move the serialization to the client side

**Answer: C) Use `JSON.stringify` with a replacer to exclude unused fields, or use a faster serialization library like `fast-json-stringify`**

> `fast-json-stringify` uses a compiled schema to serialize JSON significantly faster than the built-in `JSON.stringify`. Excluding unnecessary fields also reduces payload size, lowering bandwidth and parse time on the client.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A Node.js API serves the same expensive database query result to hundreds of requests per second. Which strategy best reduces database load?

- A) Increase the database connection pool size
- B) Cache query results in memory (e.g., with Redis) and serve cached responses for repeated requests
- C) Use `setImmediate` to delay database queries
- D) Add more indexes to the database table

**Answer: B) Cache query results in memory (e.g., with Redis) and serve cached responses for repeated requests**

> Caching frequent, expensive queries with a TTL in Redis dramatically reduces database hits and response times. The database only receives a query when the cache misses or expires. Connection pool sizing and indexing help but do not eliminate repeated identical queries.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer enables `compression` middleware in Express. What does it do?

```js
const compression = require('compression');
app.use(compression());
```

- A) Compresses JavaScript source files at build time
- B) Gzip/Brotli compresses HTTP response bodies, reducing their size for clients that support it
- C) Minifies HTML responses before sending
- D) Compresses database query results before storing them

**Answer: B) Gzip/Brotli compresses HTTP response bodies, reducing their size for clients that support it**

> The `compression` middleware uses `zlib` to gzip (or deflate) response bodies when the client sends `Accept-Encoding: gzip`. This reduces the bytes transferred over the network, speeding up page loads and API responses — especially for large JSON payloads.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A developer wants to avoid restarting Node.js manually every time they change a source file during development. Which tool is most commonly used?

- A) `pm2`
- B) `nodemon`
- C) `forever`
- D) `npx`

**Answer: B) `nodemon`**

> `nodemon` watches source files for changes and automatically restarts the Node.js process. It is the de facto development tool for this use case. `pm2` and `forever` are production process managers. `npx` is for executing npm packages without installing them globally.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q. A production Node.js application crashes and no one is notified. Which tool helps keep the process alive and provides monitoring?

- A) `nodemon`
- B) `webpack`
- C) `pm2`
- D) `dotenv`

**Answer: C) `pm2`**

> `pm2` is a production process manager for Node.js. It automatically restarts crashed processes, supports clustering, provides real-time monitoring (`pm2 monit`), log management, and startup scripts. `nodemon` is for development only.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
