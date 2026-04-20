# Node.js Coding Practice

<br/>

## Q. What will happen when that code will be executed?

```js
// Modern Node.js (v14.18+): use 'node:' prefix for built-in modules
const { EventEmitter } = require("node:events");

const eventObj = new EventEmitter();

eventObj.on("event1", function () {
  console.log("Event1 fired!");
  process.nextTick(function () {
    eventObj.emit("event2");
  });
});

eventObj.on("event2", function () {
  console.log("Event2 fired!");
  process.nextTick(function () {
    eventObj.emit("event3");
  });
});

eventObj.on("event3", function () {
  console.log("Event3 fired!");
  process.nextTick(function () {
    eventObj.emit("event1");
  });
});

eventObj.emit("event1");
```

<details><summary><b>Answer</b></summary>

```js
Event1 fired!
Event2 fired!
Event3 fired!
// ... repeats indefinitely
Event1 fired!
Event2 fired!
Event3 fired!
```

The code creates an **infinite loop**. Each event handler schedules the next `emit()` via `process.nextTick()`, which queues the callback before any I/O events in the current event loop iteration. Because the callbacks are deferred rather than called recursively, there is no stack overflow — the process simply runs forever until killed.

**Node.js 14.18+ recommendation:** Use the `node:` URL scheme for built-in modules to avoid conflicts with third-party packages of the same name:

```js
const { EventEmitter } = require("node:events"); // CommonJS
// or
import { EventEmitter } from "node:events";       // ES Module
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Rewrite the code sample without try/catch block

```js
async function getData(req, res) {
  try {
    const a = await functionA();
    const b = await functionB();
    res.send("some result");
  } catch (error) {
    res.send(error.stack);
  }
}
```

<details><summary><b>Answer</b></summary>

```js
// Option 1: Early-return pattern
async function getData(req, res) {
  const a = await functionA().catch((error) => res.send(error.stack));
  if (!a) return;
  const b = await functionB().catch((error) => res.send(error.stack));
  if (!b) return;
  res.send("some result");
}

// Option 2: Error-first tuple pattern (Node.js 16+ style with Error.cause support)
async function getData(req, res) {
  const [errorA, a] = await functionA()
    .then((value) => [null, value])
    .catch((error) => [error, null]);

  const [errorB, b] = await functionB()
    .then((value) => [null, value])
    .catch((error) => [error, null]);

  if (errorA || errorB) {
    return res.send((errorA ?? errorB).stack);
  }
  res.send("some result");
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Consider following code snippet

```js
{
  console.time("loop");
  for (var i = 0; i < 1000000; i += 1) {
    // Do nothing
  }
  console.timeEnd("loop");
}
```

The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js Explain why this is so, even though both use the v8 JavaScript Engine.

<details><summary><b>Answer</b></summary>

Within a web browser such as Chrome, declaring the variable `i` outside of any function\'s scope makes it global and therefore binds it as a property of the `window` object. As a result, running this code in a web browser requires repeatedly resolving the property `i` within the heavily populated `window` namespace in each iteration of the `for` loop.

In Node.js, however, declaring any variable outside of any function\'s scope binds it only to the module\'s own scope (not the `window` object) which therefore makes it much easier and faster to resolve.

**Note (Node.js 22+):** Modern Node.js ships with V8 12+, which includes the **Maglev** mid-tier JIT compiler and an improved **TurboFan** pipeline. These optimizations have significantly narrowed the property-resolution performance gap between browser and Node.js globals. Additionally, `console.time()` / `console.timeEnd()` in Node.js 22 internally uses high-resolution `performance.now()` timestamps, so measurements are more precise than in earlier versions.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Rewrite promise-based Node.js applications to Async/Await

```js
function asyncTask() {
  return functionA()
    .then((valueA) => functionB(valueA))
    .then((valueB) => functionC(valueB))
    .then((valueC) => functionD(valueC))
    .catch((err) => logger.error(err));
}
```

<details><summary><b>Answer</b></summary>

```js
// Standard async/await with try/catch replacement
async function asyncTask() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  } catch (err) {
    logger.error(err);
  }
}

// Node.js 18+ alternative: propagate error cause for better stack traces
async function asyncTask() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  } catch (err) {
    throw new Error("asyncTask failed", { cause: err }); // Error.cause (Node.js 16.9+)
  }
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the output of the following code? Explain the order of execution.

```js
console.log("1 - start");

setTimeout(() => console.log("2 - setTimeout"), 0);

setImmediate(() => console.log("3 - setImmediate"));

Promise.resolve().then(() => console.log("4 - Promise.then"));

process.nextTick(() => console.log("5 - nextTick"));

console.log("6 - end");
```

<details><summary><b>Answer</b></summary>

```
1 - start
6 - end
5 - nextTick
4 - Promise.then
3 - setImmediate
2 - setTimeout
```

**Explanation — Node.js event loop phase priority:**

1. **Synchronous code** runs first (lines 1 and 6).
2. **`process.nextTick()`** callbacks drain completely before any microtask or I/O phase.
3. **Microtask queue** (`Promise.then`, `queueMicrotask`) runs after all `nextTick` callbacks.
4. **`setImmediate()`** runs in the *check* phase of the current event loop iteration.
5. **`setTimeout(delay: 0)`** runs in the *timers* phase of the **next** event loop iteration (minimum ~1 ms delay applies).

> **Note (Node.js 11+):** Microtasks (Promises, `queueMicrotask`) and `process.nextTick` callbacks are now drained between each individual timer callback and between each individual `setImmediate` callback — not only between phases.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Read a file asynchronously and print its contents using the modern `fs.promises` API

<details><summary><b>Answer</b></summary>

```js
// Node.js 10+ — fs.promises; prefer 'node:' prefix (Node.js 14.18+)
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url)); // ES module equivalent of __dirname

async function printFile(filename) {
  try {
    const content = await readFile(join(__dirname, filename), "utf8");
    console.log(content);
  } catch (err) {
    // Error.cause available since Node.js 16.9+
    throw new Error(`Failed to read "${filename}"`, { cause: err });
  }
}

printFile("data.txt");
```

**CommonJS version:**

```js
const { readFile } = require("node:fs/promises");
const { join } = require("node:path");

async function printFile(filename) {
  const content = await readFile(join(__dirname, filename), "utf8");
  console.log(content);
}

printFile("data.txt").catch(console.error);
```

> `fs.promises` was promoted to stable in **Node.js 10**. Avoid the callback-based `fs.readFile` in new code; use `fs.promises` or the `node:fs/promises` named import instead.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a basic HTTP server that responds with JSON

<details><summary><b>Answer</b></summary>

```js
// Node.js 18+ — native fetch, structuredClone, and node: prefix available
import { createServer } from "node:http";

const PORT = process.env.PORT ?? 3000;

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", uptime: process.uptime() }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Graceful shutdown (Node.js 18.2+ server.closeAllConnections())
process.on("SIGTERM", () => {
  server.closeAllConnections();
  server.close(() => process.exit(0));
});
```

> For production use, prefer a framework like **Express** or **Fastify**, but understanding the raw `node:http` module is essential for interviews and debugging.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Convert a callback-based function to a Promise using `util.promisify`

```js
const fs = require("fs");

// Callback-based
fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

<details><summary><b>Answer</b></summary>

```js
import { promisify } from "node:util";
import { readFile as readFileCb } from "node:fs";
import { readFile } from "node:fs/promises"; // preferred for built-ins

// Option 1: util.promisify (useful for any Node-style callback API)
const readFileAsync = promisify(readFileCb);

async function main() {
  const data = await readFileAsync("./data.txt", "utf8");
  console.log(data);
}

main().catch(console.error);

// Option 2: use fs.promises directly (Node.js 10+ — no promisify needed)
async function mainV2() {
  const data = await readFile("./data.txt", "utf8");
  console.log(data);
}

mainV2().catch(console.error);
```

> `util.promisify` works with any function that follows the **error-first callback** convention `(err, value) => {}`. For built-in Node.js modules, always prefer the native `node:fs/promises`, `node:dns/promises`, etc., which exist since Node.js 10 and avoid the overhead of wrapping.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Pipe a readable stream into a writable stream (file copy using streams)

<details><summary><b>Answer</b></summary>

```js
// Node.js 16+ — stream.pipeline with async/await (replaces the error-prone .pipe())
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

async function copyFile(src, dest) {
  await pipeline(
    createReadStream(src),
    createWriteStream(dest)
  );
  console.log(`Copied "${src}" → "${dest}"`);
}

copyFile("input.txt", "output.txt").catch(console.error);
```

> **Why `stream/promises` over `.pipe()`?**
> `.pipe()` does not propagate errors — if the source stream errors, the destination is not automatically destroyed, causing resource leaks. `stream.pipeline` (and its promise version from Node.js 15+) handles cleanup automatically and rejects on any stream error.

**Reading a stream chunk by chunk (Node.js 16+ async iteration):**

```js
import { createReadStream } from "node:fs";

async function readChunks(filepath) {
  const stream = createReadStream(filepath, { encoding: "utf8" });
  for await (const chunk of stream) {
    process.stdout.write(chunk);
  }
}

readChunks("input.txt").catch(console.error);
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Run multiple async operations in parallel and handle partial failures

```js
// Fetch user profile, orders, and preferences simultaneously
async function getDashboard(userId) {
  // TODO: run all three in parallel; show partial data if one fails
}
```

<details><summary><b>Answer</b></summary>

```js
// Option 1: Promise.allSettled (Node.js 12+) — never rejects; returns all results
async function getDashboard(userId) {
  const [profileResult, ordersResult, prefsResult] = await Promise.allSettled([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchPreferences(userId),
  ]);

  return {
    profile:     profileResult.status === "fulfilled" ? profileResult.value : null,
    orders:      ordersResult.status  === "fulfilled" ? ordersResult.value  : [],
    preferences: prefsResult.status   === "fulfilled" ? prefsResult.value   : {},
  };
}

// Option 2: Promise.all — rejects immediately if any promise rejects (fail-fast)
async function getDashboardStrict(userId) {
  const [profile, orders, preferences] = await Promise.all([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchPreferences(userId),
  ]);
  return { profile, orders, preferences };
}

// Option 3: Promise.any (Node.js 15+) — resolves with the FIRST fulfilled value
async function getFastestSource(userId) {
  const profile = await Promise.any([
    fetchFromPrimaryDB(userId),
    fetchFromReplicaDB(userId),
    fetchFromCache(userId),
  ]);
  return profile;
}
```

| Method | Rejects if... | Use when... |
|---|---|---|
| `Promise.all` | any promise rejects | all results required |
| `Promise.allSettled` | never | partial results acceptable |
| `Promise.any` | all promises reject | fastest source wins |
| `Promise.race` | first settles (resolve or reject) | timeout racing |

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Cancel a fetch request after a timeout using `AbortController`

<details><summary><b>Answer</b></summary>

```js
// Node.js 18+ — fetch and AbortController are available globally (no import needed)

async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`, { cause: response });
    }
    return await response.json();
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// Node.js 17.3+ shorthand: AbortSignal.timeout()
async function fetchWithTimeoutShort(url, timeoutMs = 5000) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(timeoutMs), // auto-aborts after timeoutMs
  });
  return response.json();
}
```

> `AbortController` / `AbortSignal` are available globally since **Node.js 15**. `fetch` is global since **Node.js 18**. `AbortSignal.timeout()` was added in **Node.js 17.3**.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Offload a CPU-intensive task to a Worker Thread

<details><summary><b>Answer</b></summary>

```js
// worker.js — runs in a separate thread
import { workerData, parentPort } from "node:worker_threads";

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

parentPort.postMessage(fibonacci(workerData.n));
```

```js
// main.js
import { Worker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function runFibonacciInWorker(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(join(__dirname, "worker.js"), {
      workerData: { n },
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}

const result = await runFibonacciInWorker(42);
console.log(`fibonacci(42) = ${result}`);
```

> **Worker Threads** (stable since **Node.js 12**) share memory via `SharedArrayBuffer` and `Atomics`. They are ideal for CPU-bound tasks (e.g., image processing, cryptography, data transformation). For I/O-bound tasks, async/await is sufficient since Node.js handles I/O non-blocking by default.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Scale a Node.js application across all CPU cores using the Cluster module

<details><summary><b>Answer</b></summary>

```js
import cluster from "node:cluster";
import { createServer } from "node:http";
import { availableParallelism } from "node:os"; // Node.js 19+ (replaces os.cpus().length)
import process from "node:process";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork a worker for each logical CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died (${signal ?? code}). Restarting…`);
    cluster.fork(); // auto-restart crashed workers
  });
} else {
  // Each worker shares the same TCP port
  createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

> **Cluster vs Worker Threads:**
> - **Cluster** forks separate OS processes — each has its own memory and event loop. Best for scaling HTTP servers across CPU cores.
> - **Worker Threads** share memory within one process. Best for parallelising CPU-intensive computations.
>
> `os.availableParallelism()` was added in **Node.js 19** and reports the number of logical CPUs available to the current process (respects cgroup/container CPU limits unlike `os.cpus().length`).

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Hash a password using the built-in `crypto` module

<details><summary><b>Answer</b></summary>

```js
import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

const SALT_LENGTH = 32;
const KEY_LENGTH  = 64;

/**
 * Hash a plaintext password. Returns "<salt>:<hash>" (both hex-encoded).
 */
async function hashPassword(password) {
  const salt = randomBytes(SALT_LENGTH).toString("hex");
  const derivedKey = await scryptAsync(password, salt, KEY_LENGTH);
  return `${salt}:${derivedKey.toString("hex")}`;
}

/**
 * Verify a plaintext password against a stored hash string.
 */
async function verifyPassword(password, stored) {
  const [salt, storedHash] = stored.split(":");
  const derivedKey = await scryptAsync(password, salt, KEY_LENGTH);
  const storedBuffer = Buffer.from(storedHash, "hex");
  // timingSafeEqual prevents timing attacks
  return timingSafeEqual(derivedKey, storedBuffer);
}

// Usage
const hashed = await hashPassword("mySecret123");
console.log(hashed); // e.g. "a3f2...:b8c9..."

const valid = await verifyPassword("mySecret123", hashed);
console.log(valid); // true
```

> **Why `scrypt` over `MD5`/`SHA-256`?** Hash functions like SHA-256 are fast by design, making brute-force attacks cheap. `scrypt` (and `bcrypt`/`argon2`) are deliberately slow and memory-hard, making them suitable for password hashing. Never use `MD5` or plain `SHA` for passwords.
>
> **`timingSafeEqual`** prevents timing attacks where an attacker infers the correct hash by measuring how long the comparison takes.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the output of the following Buffer code?

```js
const buf1 = Buffer.from("Hello");
const buf2 = Buffer.from("Hello");

console.log(buf1 === buf2);
console.log(buf1.equals(buf2));
console.log(buf1.toString("base64"));
console.log(Buffer.byteLength("é")); // U+00E9 LATIN SMALL LETTER E WITH ACUTE
```

<details><summary><b>Answer</b></summary>

```
false
true
SGVsbG8=
2
```

**Explanation:**

- `buf1 === buf2` → **`false`** — `===` compares object references; these are two distinct `Buffer` instances.
- `buf1.equals(buf2)` → **`true`** — `.equals()` compares the raw bytes.
- `buf1.toString("base64")` → **`"SGVsbG8="`** — Base64 encoding of `"Hello"`.
- `Buffer.byteLength("é")` → **`2`** — `Buffer.byteLength` counts UTF-8 bytes, not characters. The character `é` (U+00E9) is encoded as two bytes (`0xC3 0xA9`) in UTF-8, so `byteLength` returns `2` even though `"é".length === 1`.

**Node.js 22+ — safe Buffer creation:**

```js
// NEVER use: new Buffer() — deprecated and removed
// ALWAYS use one of:
Buffer.alloc(10);            // zero-filled, safe
Buffer.from("Hello");        // from string
Buffer.from([0x48, 0x69]);   // from byte array
Buffer.allocUnsafe(10);      // fast but uninitialized — fill before reading
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Handle `unhandledRejection` and `uncaughtException` gracefully in a production Node.js app

<details><summary><b>Answer</b></summary>

```js
import process from "node:process";

// Unhandled promise rejection — Node.js 15+ exits by default (exit code 1)
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Recommended: let the process crash so a process manager (PM2, systemd) restarts it
  process.exit(1);
});

// Uncaught synchronous exception — always results in an unstable process state
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  // Perform synchronous cleanup only, then exit
  process.exit(1);
});

// Graceful shutdown on SIGTERM (sent by Docker, Kubernetes, PM2, etc.)
process.on("SIGTERM", () => {
  console.log("SIGTERM received — shutting down gracefully");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
```

**Best practices:**
- **Do not swallow errors** — always log and exit so a process supervisor restarts the app in a clean state.
- Use `process.on("unhandledRejection")` as a **last resort** safety net, not a substitute for proper `try/catch` or `.catch()` chains.
- In **Node.js 15+**, an unhandled rejection causes the process to exit with code `1` by default — configure `--unhandled-rejections=throw|none|warn` via CLI if you need legacy behaviour.
- Pair with a process manager (**PM2**, **systemd**, **Kubernetes** liveness probes) to automatically restart crashed services.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `setImmediate()` and `setTimeout(fn, 0)`? What does the following code print?

```js
const { readFile } = require("node:fs");

// Inside an I/O callback
readFile(__filename, () => {
  setTimeout(() => console.log("setTimeout"), 0);
  setImmediate(() => console.log("setImmediate"));
});

// Outside an I/O callback (top-level)
setTimeout(() => console.log("outer setTimeout"), 0);
setImmediate(() => console.log("outer setImmediate"));
```

<details><summary><b>Answer</b></summary>

```
outer setImmediate   ← or outer setTimeout (order is non-deterministic outside I/O)
outer setTimeout     ← or outer setImmediate
setImmediate         ← always before setTimeout inside an I/O callback
setTimeout
```

**Explanation:**

| | `setTimeout(fn, 0)` | `setImmediate(fn)` |
|---|---|---|
| Phase | *timers* (beginning of loop) | *check* (after I/O polling) |
| Outside I/O | **non-deterministic** order | **non-deterministic** order |
| Inside I/O callback | always **after** `setImmediate` | always **before** `setTimeout` |

- **Outside an I/O callback** (top-level script): the ordering depends on the performance of the process and the system clock — either can run first.
- **Inside an I/O callback**: `setImmediate` is **always** guaranteed to run before `setTimeout(fn, 0)` because the check phase comes before the timers phase resumes in the same loop tick.

> Use `setImmediate()` when you want to run something after the current I/O events are handled. Use `setTimeout(fn, 0)` when you need a minimum delay before execution.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Read command-line arguments and environment variables in Node.js

```bash
# Run as: API_KEY=secret node app.js --port 4000 --env production
```

<details><summary><b>Answer</b></summary>

```js
// process.argv — array: [ 'node', 'app.js', '--port', '4000', '--env', 'production' ]
const args = process.argv.slice(2); // drop 'node' and script path

// Parse into an object: { port: '4000', env: 'production' }
function parseArgs(argv) {
  return argv.reduce((acc, val, i, arr) => {
    if (val.startsWith("--")) {
      acc[val.slice(2)] = arr[i + 1] ?? true;
    }
    return acc;
  }, {});
}

const { port = 3000, env = "development" } = parseArgs(args);

// process.env — all environment variables as strings
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY is required");
  process.exit(1);
}

console.log(`Starting on port ${port} in ${env} mode`);
console.log(`API_KEY length: ${apiKey.length}`);
```

**Node.js 18.3+ built-in argument parsing (`util.parseArgs`):**

```js
import { parseArgs } from "node:util";

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    port: { type: "string", short: "p", default: "3000" },
    env:  { type: "string", short: "e", default: "development" },
  },
});

console.log(values.port, values.env); // '4000' 'production'
```

> `util.parseArgs` was added in **Node.js 18.3** and stabilised in **Node.js 20**. Prefer it over manual parsing or third-party libraries like `yargs`/`minimist` for simple CLIs.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement a custom `EventEmitter` with `once`, `on`, and `off` methods

<details><summary><b>Answer</b></summary>

```js
// Using the built-in EventEmitter (Node.js 0.1+)
import { EventEmitter } from "node:events";

class Logger extends EventEmitter {
  log(message) {
    this.emit("log", { message, timestamp: new Date().toISOString() });
  }
}

const logger = new Logger();

// .on() — persistent listener
logger.on("log", (data) => console.log("[persistent]", data.message));

// .once() — fires once then auto-removes itself
logger.once("log", (data) => console.log("[once]", data.message));

// .off() — remove a named listener
const handler = (data) => console.log("[removable]", data.message);
logger.on("log", handler);
logger.off("log", handler); // same as logger.removeListener("log", handler)

logger.log("Hello");  // prints: [persistent] Hello, [once] Hello
logger.log("World");  // prints: [persistent] World  (once already removed)

// Node.js 12+ — EventEmitter.on() async iterator
import { on } from "node:events";

async function consumeLogs() {
  for await (const [data] of on(logger, "log")) {
    console.log("[async iter]", data.message);
    if (data.message === "stop") break;
  }
}

consumeLogs();
logger.log("tick");
logger.log("stop");
```

> **`EventEmitter` memory leak warning:** The default max listener count is **10**. Increase it with `emitter.setMaxListeners(n)` or set it globally with `EventEmitter.defaultMaxListeners`. Always call `.off()` / `.removeAllListeners()` to avoid leaks in long-running processes.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement sequential async processing using `for...of` with `async/await`

```js
// Process each URL one at a time (not in parallel)
const urls = [
  "https://api.example.com/1",
  "https://api.example.com/2",
  "https://api.example.com/3",
];
```

<details><summary><b>Answer</b></summary>

```js
// Sequential — each request waits for the previous one to finish
async function fetchSequential(urls) {
  const results = [];
  for (const url of urls) {
    const response = await fetch(url);            // waits here
    const data = await response.json();
    results.push(data);
    console.log(`Fetched: ${url}`);
  }
  return results;
}

// ❌ Common mistake: Array.forEach does NOT await async callbacks
async function fetchWrong(urls) {
  const results = [];
  urls.forEach(async (url) => {           // forEach ignores returned promises
    const data = await fetch(url).then(r => r.json());
    results.push(data);                   // race condition — order not guaranteed
  });
  return results;                         // returns before any fetch completes!
}

// ✅ Parallel — all requests start at once (faster, but order not guaranteed)
async function fetchParallel(urls) {
  return Promise.all(urls.map(url => fetch(url).then(r => r.json())));
}

// ✅ Parallel with concurrency limit (e.g. max 2 at a time)
async function fetchWithConcurrency(urls, concurrency = 2) {
  const results = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(url => fetch(url).then(r => r.json()))
    );
    results.push(...batchResults);
  }
  return results;
}
```

| Pattern | Order | Speed | Use when |
|---|---|---|---|
| `for...of` + `await` | preserved | slowest | each step depends on previous |
| `Promise.all` | preserved | fastest | all independent, fail-fast |
| `Promise.allSettled` | preserved | fastest | partial results OK |
| Batched concurrency | preserved | balanced | rate-limited APIs |

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the output? Explain Promise chaining vs. `async/await` error propagation.

```js
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error("oops"); })
  .then((x) => console.log("then:", x))
  .catch((err) => { console.log("catch:", err.message); return 42; })
  .then((x) => console.log("after catch:", x));
```

<details><summary><b>Answer</b></summary>

```
catch: oops
after catch: 42
```

**Explanation:**

1. `Promise.resolve(1)` → value `1`
2. First `.then`: `1 + 1` → value `2`
3. Second `.then`: throws `Error("oops")` → promise rejects; the next `.then` is **skipped**
4. `.catch`: receives the error, logs `"catch: oops"`, **returns `42`** → the catch handler converts the rejection back to a fulfilled promise with value `42`
5. Final `.then`: receives `42`, logs `"after catch: 42"`

**Key rules:**
- A `.then()` after a rejection is skipped until a `.catch()` or `.then(null, onReject)` is encountered.
- Returning a value from `.catch()` **resolves** the chain — subsequent `.then()` handlers run normally.
- Throwing inside `.catch()` keeps the chain rejected.

**Equivalent async/await version:**

```js
async function run() {
  try {
    let x = await Promise.resolve(1);
    x = x + 1;
    throw new Error("oops");         // jumps to catch
    console.log("never reached");
  } catch (err) {
    console.log("catch:", err.message); // catch: oops
    return 42;
  }
}

const x = await run();
console.log("after catch:", x);  // after catch: 42
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement a `retry` helper that retries a failing async function up to N times with exponential back-off

<details><summary><b>Answer</b></summary>

```js
/**
 * Retry an async function up to `retries` times with exponential back-off.
 * @param {() => Promise<T>} fn       - async function to call
 * @param {number}           retries  - max attempts (default 3)
 * @param {number}           delay    - initial delay in ms (default 200)
 */
async function retry(fn, retries = 3, delay = 200) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt === retries) break;

      const backoff = delay * 2 ** (attempt - 1); // 200, 400, 800 …
      console.warn(`Attempt ${attempt} failed. Retrying in ${backoff}ms…`);
      await new Promise((resolve) => setTimeout(resolve, backoff));
    }
  }
  throw new Error(`All ${retries} attempts failed`, { cause: lastError });
}

// Usage
async function unstableApiCall() {
  if (Math.random() < 0.7) throw new Error("Service unavailable");
  return { data: "success" };
}

const result = await retry(unstableApiCall, 4, 100);
console.log(result);
```

**With `AbortSignal` support (Node.js 17.3+):**

```js
async function retry(fn, { retries = 3, delay = 200, signal } = {}) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    signal?.throwIfAborted(); // Node.js 17.3+
    try {
      return await fn({ signal });
    } catch (err) {
      if (attempt === retries || signal?.aborted) throw err;
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, delay * 2 ** (attempt - 1));
        signal?.addEventListener("abort", () => { clearTimeout(timer); reject(signal.reason); });
      });
    }
  }
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Set up an Express.js application with JSON body parsing, a router, and a global error handler

<details><summary><b>Answer</b></summary>

```js
// app.js
import express from "express";
import usersRouter from "./routes/users.js";

const app = express();

// Built-in middleware — parses application/json bodies (replaces body-parser since Express 4.16)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount router
app.use("/api/users", usersRouter);

// 404 handler — must be after all routes
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Global error handler — must have exactly 4 parameters
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  const status = err.status ?? 500;
  res.status(status).json({
    error: err.message ?? "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

export default app;
```

```js
// routes/users.js
import { Router } from "express";

const router = Router();
const users = new Map();

router.get("/",       (_req, res) => res.json([...users.values()]));
router.get("/:id",    (req, res, next) => {
  const user = users.get(req.params.id);
  if (!user) return next(Object.assign(new Error("User not found"), { status: 404 }));
  res.json(user);
});
router.post("/",      (req, res) => {
  const { name, email } = req.body;
  const id = crypto.randomUUID();          // Node.js 19+ — global crypto
  users.set(id, { id, name, email });
  res.status(201).json({ id, name, email });
});
router.put("/:id",    (req, res, next) => {
  if (!users.has(req.params.id)) return next(Object.assign(new Error("Not found"), { status: 404 }));
  const updated = { ...users.get(req.params.id), ...req.body, id: req.params.id };
  users.set(req.params.id, updated);
  res.json(updated);
});
router.delete("/:id", (req, res) => {
  users.delete(req.params.id);
  res.status(204).send();
});

export default router;
```

```js
// server.js
import app from "./app.js";

const PORT = process.env.PORT ?? 3000;
const server = app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);

process.on("SIGTERM", () => server.close(() => process.exit(0)));
```

> **Express 5** (released 2024) automatically passes errors thrown inside `async` route handlers to `next(err)` — no `try/catch` wrapper needed. With Express 4, wrap async handlers or use a wrapper like `express-async-errors`.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write custom Express middleware for request logging and authentication

<details><summary><b>Answer</b></summary>

```js
// middleware/logger.js — request/response logging
export function requestLogger(req, res, next) {
  const start = Date.now();
  const { method, url } = req;

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${method} ${url} ${res.statusCode} — ${duration}ms`);
  });

  next(); // MUST call next() or the request will hang
}

// middleware/auth.js — Bearer token authentication
export function requireAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or invalid Authorization header" });
  }

  const token = authHeader.slice(7);
  try {
    // In production, verify a JWT here (e.g. with jsonwebtoken or jose)
    if (token !== process.env.API_TOKEN) throw new Error("Invalid token");
    req.user = { token }; // attach to request for downstream handlers
    next();
  } catch (err) {
    res.status(403).json({ error: "Forbidden" });
  }
}

// middleware/validate.js — request body validation
export function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.safeParse(req.body); // Zod example
    if (error) {
      return res.status(422).json({ error: "Validation failed", details: error.format() });
    }
    next();
  };
}
```

```js
// Usage in app.js
import { requestLogger, requireAuth, validateBody } from "./middleware/index.js";
import { z } from "zod";

const CreateUserSchema = z.object({
  name:  z.string().min(1).max(100),
  email: z.string().email(),
});

app.use(requestLogger);                                       // global
app.post("/api/users", requireAuth, validateBody(CreateUserSchema), createUser); // route-level
```

**Middleware execution order:**

```
Request → requestLogger → requireAuth → validateBody → createUser → response
                                             ↓ (if invalid)
                                          422 Validation failed
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement Express error handling for async route handlers (Express 4 vs Express 5)

```js
// Express 4 — async errors are NOT automatically caught
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id); // may throw
  res.json(user);
});
```

<details><summary><b>Answer</b></summary>

```js
// ❌ Express 4 — unhandled async rejection crashes the process
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id); // if this throws, error is unhandled
  res.json(user);
});

// ✅ Express 4 — wrap with try/catch and forward to error middleware
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(Object.assign(new Error("Not found"), { status: 404 }));
    res.json(user);
  } catch (err) {
    next(err); // forwards to global error handler
  }
});

// ✅ Express 4 — asyncHandler wrapper utility (eliminates repetitive try/catch)
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get("/users/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
}));

// ✅ Express 5 (npm install express@5) — async errors forwarded to next() automatically
// No wrapper needed
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id); // thrown errors go to error middleware
  res.json(user);
});

// Global error middleware (required in both versions)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).json({ error: err.message });
});
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between CommonJS and ES Modules in Node.js?

<details><summary><b>Answer</b></summary>

```js
// ─── CommonJS (CJS) ───────────────────────────────────────────────────────────
// File: math.cjs  or  "type": "commonjs" in package.json

const add = (a, b) => a + b;
const PI = 3.14;

module.exports = { add, PI };

// Require is synchronous — fine for local files
const { add: addFn } = require("./math.cjs");
```

```js
// ─── ES Modules (ESM) ────────────────────────────────────────────────────────
// File: math.mjs  or  "type": "module" in package.json

export const PI = 3.14;
export function add(a, b) { return a + b; }
export default { add, PI };   // default export

import { add, PI } from "./math.mjs";           // named imports
import math from "./math.mjs";                   // default import
import * as MathLib from "./math.mjs";           // namespace import

// Dynamic import — lazy-loads a module, returns a Promise (works in both CJS and ESM)
const { add: lazyAdd } = await import("./math.mjs");
```

**Key differences:**

| Feature | CommonJS (CJS) | ES Modules (ESM) |
|---|---|---|
| Syntax | `require()` / `module.exports` | `import` / `export` |
| Loading | Synchronous | Asynchronous |
| `this` at top level | `module.exports` object | `undefined` |
| `__filename` / `__dirname` | Available | Use `import.meta.filename` / `import.meta.dirname` (Node.js 21.2+) |
| Tree-shaking | ❌ | ✅ (static analysis) |
| Default since | Node.js 0.1 | Node.js 12 (stable) |
| Top-level `await` | ❌ | ✅ |

```js
// Interoperability
import cjsModule from "./legacy.cjs"; // ✅ ESM can import CJS
const esmModule = require("./modern.mjs"); // ❌ throws ERR_REQUIRE_ESM (Node.js < 22)
// Node.js 22+ — require(esm) supported experimentally (--experimental-require-module)
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write, append, delete, and list files/directories using `node:fs/promises`

<details><summary><b>Answer</b></summary>

```js
import {
  writeFile, appendFile, readFile,
  unlink, mkdir, rm,
  readdir, stat, rename,
} from "node:fs/promises";
import { join } from "node:path";

const BASE = "./sandbox";

async function demo() {
  // 1. Create directory (recursive: true won\'t throw if exists — Node.js 10.12+)
  await mkdir(BASE, { recursive: true });

  // 2. Write a file (creates or overwrites)
  await writeFile(join(BASE, "hello.txt"), "Hello, Node.js!\n", "utf8");

  // 3. Append to a file
  await appendFile(join(BASE, "hello.txt"), "Appended line.\n", "utf8");

  // 4. Read file
  const content = await readFile(join(BASE, "hello.txt"), "utf8");
  console.log(content);

  // 5. List directory contents with type info
  const entries = await readdir(BASE, { withFileTypes: true }); // Node.js 10.10+
  for (const entry of entries) {
    console.log(entry.name, entry.isFile() ? "(file)" : "(dir)");
  }

  // 6. File metadata
  const info = await stat(join(BASE, "hello.txt"));
  console.log("Size:", info.size, "bytes", "| Modified:", info.mtime);

  // 7. Rename / move
  await rename(join(BASE, "hello.txt"), join(BASE, "renamed.txt"));

  // 8. Delete a file
  await unlink(join(BASE, "renamed.txt"));

  // 9. Remove directory recursively (Node.js 14.14+)
  await rm(BASE, { recursive: true, force: true });
}

demo().catch(console.error);
```

**Watch a file/directory for changes (Node.js 18.11+ `fs.watch` with recursive):**

```js
import { watch } from "node:fs/promises";

const watcher = watch("./src", { recursive: true });
for await (const event of watcher) {
  console.log(`${event.eventType}: ${event.filename}`);
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Use `node:path` to build cross-platform file paths safely

<details><summary><b>Answer</b></summary>

```js
import path from "node:path";
import { fileURLToPath } from "node:url";

// ── ESM equivalent of __dirname ──────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
// Node.js 21.2+ shorthand:
// const __dirname  = import.meta.dirname;
// const __filename = import.meta.filename;

// ── Common path operations ────────────────────────────────────────────────────
const filePath = path.join(__dirname, "data", "users.json");
// → /project/data/users.json  (OS-aware separator)

path.resolve("data", "users.json");        // absolute path from cwd
path.basename("/foo/bar/baz.txt");         // "baz.txt"
path.basename("/foo/bar/baz.txt", ".txt"); // "baz"
path.extname("index.html");                // ".html"
path.dirname("/foo/bar/baz.txt");          // "/foo/bar"

path.parse("/foo/bar/baz.txt");
// { root: '/', dir: '/foo/bar', base: 'baz.txt', ext: '.txt', name: 'baz' }

// ── Path traversal prevention (security) ─────────────────────────────────────
const BASE_DIR = path.resolve("./public");

function safeJoin(base, userInput) {
  const resolved = path.resolve(base, userInput);
  if (!resolved.startsWith(base + path.sep) && resolved !== base) {
    throw new Error("Path traversal detected");
  }
  return resolved;
}

safeJoin(BASE_DIR, "images/logo.png");    // ✅ safe
safeJoin(BASE_DIR, "../../etc/passwd");   // ❌ throws
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Make HTTP/HTTPS requests using the native `fetch` API and `node:https`

<details><summary><b>Answer</b></summary>

```js
// ── Option 1: Global fetch (Node.js 18+, no import needed) ───────────────────
async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(5000), // auto-cancel after 5 s (Node.js 17.3+)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

async function postUser(payload) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.json();
}

// ── Option 2: node:https (Node.js built-in, useful without fetch) ─────────────
import https from "node:https";

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(body)); }
        catch (err) { reject(err); }
      });
    }).on("error", reject);
  });
}
```

**Choosing the right HTTP client:**

| Client | Pros | Cons |
|---|---|---|
| `fetch` (global, Node 18+) | Standard Web API, no install | Verbose for streaming |
| `node:https` | Built-in, no install | Verbose, callback-based |
| `undici` | High-perf, underlies `fetch` | Extra dependency |
| `axios` | Rich API, interceptors | Third-party dependency |

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Build a RESTful CRUD API with Express.js, input validation, and proper HTTP status codes

<details><summary><b>Answer</b></summary>

```js
// routes/products.js
import { Router } from "express";

const router = Router();
const db = new Map(); // replace with a real DB in production

// ── Validation helper ────────────────────────────────────────────────────────
function validateProduct({ name, price }) {
  const errors = [];
  if (!name || typeof name !== "string" || name.trim().length === 0)
    errors.push("name is required");
  if (price == null || typeof price !== "number" || price < 0)
    errors.push("price must be a non-negative number");
  return errors;
}

// GET /api/products — 200 OK
router.get("/", (_req, res) => {
  res.status(200).json([...db.values()]);
});

// GET /api/products/:id — 200 OK | 404 Not Found
router.get("/:id", (req, res) => {
  const product = db.get(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.status(200).json(product);
});

// POST /api/products — 201 Created | 422 Unprocessable Entity
router.post("/", (req, res) => {
  const errors = validateProduct(req.body);
  if (errors.length) return res.status(422).json({ errors });

  const id = crypto.randomUUID();
  const product = { id, name: req.body.name.trim(), price: req.body.price };
  db.set(id, product);
  res.status(201).json(product);
});

// PUT /api/products/:id — 200 OK | 404 | 422
router.put("/:id", (req, res) => {
  if (!db.has(req.params.id)) return res.status(404).json({ error: "Not found" });
  const errors = validateProduct(req.body);
  if (errors.length) return res.status(422).json({ errors });

  const updated = { id: req.params.id, name: req.body.name.trim(), price: req.body.price };
  db.set(req.params.id, updated);
  res.status(200).json(updated);
});

// PATCH /api/products/:id — 200 OK | 404
router.patch("/:id", (req, res) => {
  const product = db.get(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  const updated = { ...product, ...req.body, id: req.params.id };
  db.set(req.params.id, updated);
  res.status(200).json(updated);
});

// DELETE /api/products/:id — 204 No Content | 404
router.delete("/:id", (req, res) => {
  if (!db.has(req.params.id)) return res.status(404).json({ error: "Not found" });
  db.delete(req.params.id);
  res.status(204).send();
});

export default router;
```

**HTTP status code cheat-sheet:**

| Code | Meaning | Use when |
|---|---|---|
| 200 | OK | Successful GET / PUT / PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Malformed syntax |
| 401 | Unauthorized | No valid credentials |
| 403 | Forbidden | Valid credentials, insufficient permissions |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate resource |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server error |

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a Transform stream to process data on-the-fly (e.g. uppercase transform)

<details><summary><b>Answer</b></summary>

```js
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

// ── Custom Transform stream ───────────────────────────────────────────────────
class UpperCaseTransform extends Transform {
  _transform(chunk, _encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback(); // signal ready for next chunk
  }
}

// ── Using stream/promises pipeline (Node.js 15+) ──────────────────────────────
async function processFile(inputPath, outputPath) {
  await pipeline(
    createReadStream(inputPath),
    new UpperCaseTransform(),
    createWriteStream(outputPath)
  );
  console.log("Done");
}

processFile("input.txt", "output.txt").catch(console.error);

// ── Inline Transform (no class needed) ───────────────────────────────────────
const csvToJson = new Transform({
  readableObjectMode: true,
  transform(chunk, _enc, cb) {
    const lines = chunk.toString().split("\n").filter(Boolean);
    for (const line of lines) {
      const [id, name, price] = line.split(",");
      this.push({ id, name, price: parseFloat(price) }); // push objects
    }
    cb();
  },
});

// ── Measure throughput with perf_hooks ────────────────────────────────────────
import { performance, PerformanceObserver } from "node:perf_hooks";

const obs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
  }
});
obs.observe({ type: "measure" });

performance.mark("stream:start");
await processFile("large.txt", "large-upper.txt");
performance.mark("stream:end");
performance.measure("File processing", "stream:start", "stream:end");
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Explain backpressure in Node.js streams and how to handle it

<details><summary><b>Answer</b></summary>

**Backpressure** occurs when a writable stream cannot consume data as fast as a readable stream produces it, causing the internal buffer to fill up and memory to grow unboundedly.

```js
import { createReadStream, createWriteStream } from "node:fs";

// ── ❌ Ignoring backpressure (memory leak risk) ───────────────────────────────
const readable = createReadStream("huge.file");
const writable = createWriteStream("output.file");

readable.on("data", (chunk) => {
  const ok = writable.write(chunk); // returns false when buffer is full
  // ❌ we never check the return value — buffer grows unboundedly
});

// ── ✅ Handling backpressure manually ─────────────────────────────────────────
const src = createReadStream("huge.file");
const dst = createWriteStream("output.file");

src.on("data", (chunk) => {
  const ok = dst.write(chunk);
  if (!ok) {
    src.pause();                           // stop reading until buffer drains
    dst.once("drain", () => src.resume()); // resume when writable drains
  }
});

src.on("end", () => dst.end());

// ── ✅ Best practice: use pipeline (handles backpressure + errors automatically) ──
import { pipeline } from "node:stream/promises";

await pipeline(
  createReadStream("huge.file"),
  createWriteStream("output.file")
);
// pipeline pauses the readable when writable.write() returns false,
// and resumes on 'drain' — zero manual backpressure handling needed.
```

**Key methods and events:**

| | Readable | Writable |
|---|---|---|
| Check pressure | `readable.readableFlowing` | `writable.write()` returns `false` |
| Pause | `readable.pause()` | — |
| Resume | `readable.resume()` | — |
| Buffer drained | — | `'drain'` event |
| High-water mark | `readableHighWaterMark` (default 16 KB) | `writableHighWaterMark` (default 16 KB) |

> Always use **`stream.pipeline()`** from `node:stream/promises` instead of `.pipe()` — it automatically handles backpressure, error propagation, and stream cleanup.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Measure and profile Node.js application performance using `perf_hooks`

<details><summary><b>Answer</b></summary>

```js
import { performance, PerformanceObserver, monitorEventLoopDelay } from "node:perf_hooks";

// ── 1. Basic timing with marks and measures ───────────────────────────────────
performance.mark("start");
await heavyComputation();
performance.mark("end");
performance.measure("heavyComputation", "start", "end");

const [measure] = performance.getEntriesByName("heavyComputation");
console.log(`Duration: ${measure.duration.toFixed(2)}ms`);
performance.clearMarks();
performance.clearMeasures();

// ── 2. PerformanceObserver — observe automatically ────────────────────────────
const obs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`[perf] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
  }
  obs.disconnect();
});
obs.observe({ entryTypes: ["measure"] });

// ── 3. timerify — wrap a sync function to auto-measure it ────────────────────
const obs2 = new PerformanceObserver((list) => {
  list.getEntries().forEach(e => console.log(e.name, e.duration));
});
obs2.observe({ entryTypes: ["function"] });

const wrapped = performance.timerify(function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
});
wrapped([5, 3, 1, 4, 2]);

// ── 4. Event loop lag monitoring ──────────────────────────────────────────────
const monitor = monitorEventLoopDelay({ resolution: 10 });
monitor.enable();

setTimeout(() => {
  monitor.disable();
  console.log("Event loop delay (p99):", monitor.percentile(99), "ns");
  console.log("Event loop delay (mean):", monitor.mean, "ns");
}, 5000);
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Load environment variables from a `.env` file safely

<details><summary><b>Answer</b></summary>

```js
// ── Node.js 20.6+ built-in .env loading (no dotenv package needed) ────────────
// CLI: node --env-file=.env app.js
// or:  node --env-file=.env --env-file=.env.local app.js (layered)

// Accessing variables:
const dbUrl = process.env.DATABASE_URL;
const port  = parseInt(process.env.PORT ?? "3000", 10);

// ── Traditional approach: dotenv package ─────────────────────────────────────
// import "dotenv/config";       // ES module auto-load
// require("dotenv").config();   // CommonJS

// ── Validate required env vars at startup ─────────────────────────────────────
function requireEnv(keys) {
  const missing = keys.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(", ")}`);
    process.exit(1);
  }
}

requireEnv(["DATABASE_URL", "JWT_SECRET", "PORT"]);
```

**.env file example:**

```env
# .env  — never commit this file to source control
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=a-very-long-random-secret-at-least-32-chars
PORT=3000
NODE_ENV=development
```

**.gitignore:**

```gitignore
.env
.env.local
.env.*.local
```

**Environment-specific loading pattern:**

```js
// config/env.js — typed config object
const config = {
  port:        parseInt(process.env.PORT ?? "3000", 10),
  nodeEnv:     process.env.NODE_ENV ?? "development",
  db: {
    url:       process.env.DATABASE_URL,
    poolSize:  parseInt(process.env.DB_POOL_SIZE ?? "10", 10),
  },
  jwt: {
    secret:    process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
  },
  isDev:  process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};

export default config;
```

> **Security rules:** Never commit `.env` files. Never log `process.env`. Pass config via function arguments, not global reads throughout the codebase. Use **secrets managers** (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault) for production credentials.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Secure an Express.js API with Helmet, CORS, and rate limiting

<details><summary><b>Answer</b></summary>

```js
import express from "express";
import helmet from "helmet";               // npm install helmet
import cors from "cors";                   // npm install cors
import { rateLimit } from "express-rate-limit"; // npm install express-rate-limit

const app = express();

// ── 1. Helmet — sets secure HTTP response headers ────────────────────────────
app.use(helmet());
// Enabled by default: X-Content-Type-Options, X-Frame-Options, HSTS,
// X-XSS-Protection, Content-Security-Policy, etc.

// Custom CSP:
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc:  ["'self'"],
      styleSrc:   ["'self'", "https://fonts.googleapis.com"],
    },
  })
);

// ── 2. CORS — restrict allowed origins ───────────────────────────────────────
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? "").split(",");

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      cb(new Error("CORS: origin not allowed"));
    },
    methods:          ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders:   ["Content-Type", "Authorization"],
    credentials:      true,
    maxAge:           86400, // preflight cache: 24 h
  })
);

// ── 3. Rate limiting — prevent brute-force and DoS ───────────────────────────
const apiLimiter = rateLimit({
  windowMs:         15 * 60 * 1000, // 15 minutes
  max:              100,
  standardHeaders:  "draft-7",
  legacyHeaders:    false,
  message:          { error: "Too many requests, please try again later." },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max:      10, // only 10 login attempts per 15 min
  standardHeaders: "draft-7",
  legacyHeaders:   false,
});

app.use("/api/", apiLimiter);
app.use("/api/auth/", authLimiter);

app.use(express.json({ limit: "10kb" })); // limit body size to prevent DoS

export default app;
```

**Security checklist for Express APIs:**

- [x] `helmet()` — secure response headers
- [x] CORS — whitelist allowed origins
- [x] Rate limiting — prevent brute-force
- [x] Body size limit — `express.json({ limit: "10kb" })`
- [x] Input validation — Zod / Joi / express-validator
- [x] Parameterised queries — prevent SQL injection
- [x] `httpOnly` + `Secure` cookies — prevent XSS cookie theft
- [x] HTTPS only in production
- [x] No sensitive data in logs or error responses

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement JWT authentication in an Express.js API

<details><summary><b>Answer</b></summary>

```js
// npm install jose  (Web-standard JWT — works in Node.js, Edge, and browsers)
import { SignJWT, jwtVerify } from "jose";
import { createSecretKey } from "node:crypto";

const SECRET = createSecretKey(
  Buffer.from(process.env.JWT_SECRET, "utf8") // must be ≥ 32 chars
);

const ISSUER   = "api.example.com";
const AUDIENCE = "app.example.com";

// ── Sign a JWT ────────────────────────────────────────────────────────────────
async function signToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime("1h")
    .sign(SECRET);
}

// ── Verify a JWT ──────────────────────────────────────────────────────────────
async function verifyToken(token) {
  const { payload } = await jwtVerify(token, SECRET, {
    issuer:   ISSUER,
    audience: AUDIENCE,
  });
  return payload; // throws JWTExpired, JWTInvalid, etc. on failure
}

// ── Express middleware ────────────────────────────────────────────────────────
async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization header required" });
  }
  try {
    const token = authHeader.slice(7);
    req.user = await verifyToken(token);
    next();
  } catch (err) {
    const status = err.code === "ERR_JWT_EXPIRED" ? 401 : 403;
    res.status(status).json({ error: err.message });
  }
}

// ── Login route ───────────────────────────────────────────────────────────────
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = await signToken({ sub: user.id, email: user.email, role: user.role });
  res.json({ token, expiresIn: 3600 });
});

// Protected route
app.get("/api/profile", authenticate, (req, res) => {
  res.json({ user: req.user });
});
```

**JWT security best practices:**
- Use **HS256** (symmetric) for internal services; **RS256** / **ES256** (asymmetric) for public APIs.
- Set short expiry (`1h`) + refresh token rotation instead of long-lived tokens.
- Store tokens in **`httpOnly` cookies** (not `localStorage`) to prevent XSS theft.
- Always validate `iss`, `aud`, and `exp` claims.
- Never put sensitive data (passwords, PII) in the JWT payload — it is only base64-encoded, not encrypted.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Prevent SQL injection and XSS in a Node.js application

<details><summary><b>Answer</b></summary>

```js
// ── SQL Injection prevention ───────────────────────────────────────────────────

// ❌ NEVER: string interpolation in queries
const userId = req.params.id;
db.query(`SELECT * FROM users WHERE id = ${userId}`); // attacker sends "1 OR 1=1"

// ✅ Parameterised queries — the only safe approach
import postgres from "postgres"; // npm install postgres (or pg, mysql2, etc.)

const sql = postgres(process.env.DATABASE_URL);

async function getUserById(id) {
  const [user] = await sql`SELECT * FROM users WHERE id = ${id}`; // auto-escaped
  return user;
}

// ✅ With 'pg' (node-postgres)
import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function getUserByEmail(email) {
  const { rows } = await pool.query(
    "SELECT id, name, email FROM users WHERE email = $1",
    [email] // parameterised — never interpolated
  );
  return rows[0];
}

// ── XSS prevention ───────────────────────────────────────────────────────────

// ✅ Sanitise user input before storing / rendering HTML
import DOMPurify from "isomorphic-dompurify"; // npm install isomorphic-dompurify

function sanitizeHtml(dirty) {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS:  ["b", "i", "em", "strong", "a", "p"],
    ALLOWED_ATTR:  ["href", "title"],
  });
}

// ✅ Encode output when inserting into HTML (server-side rendering)
import escape from "escape-html"; // npm install escape-html

app.get("/greet", (req, res) => {
  const name = escape(req.query.name ?? "World"); // <script> → &lt;script&gt;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

// ✅ Content-Security-Policy via Helmet (prevents XSS even if output not escaped)
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc:  ["'self'"],   // no inline scripts
  },
}));
```

**OWASP Top 10 — Node.js mitigations summary:**

| Threat | Mitigation |
|---|---|
| SQL Injection (A03) | Parameterised queries / ORMs |
| XSS (A03) | Output encoding + CSP headers |
| Broken Auth (A07) | JWT best practices, bcrypt/scrypt |
| Security Misconfiguration (A05) | Helmet, env-based config |
| Sensitive Data Exposure (A02) | HTTPS, encrypt at rest |
| Rate Limiting (A04) | `express-rate-limit` |
| Path Traversal (A01) | `path.resolve` + whitelist check |

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Spawn a child process to run a shell command and capture its output

<details><summary><b>Answer</b></summary>

```js
import { exec, execFile, spawn, fork } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

// ── exec — runs command in a shell, buffers output ────────────────────────────
// ❌ Never interpolate user input into exec — shell injection risk
async function getNodeVersion() {
  const { stdout, stderr } = await execAsync("node --version");
  return stdout.trim(); // e.g. "v22.0.0"
}

// ── execFile — runs a file directly, no shell — safer for user-controlled args
import { execFile as execFileCb } from "node:child_process";
const execFileAsync = promisify(execFileCb);

async function listDir(safePath) {
  // execFile does NOT invoke a shell, so shell metacharacters are harmless
  const { stdout } = await execFileAsync("ls", ["-la", safePath]);
  return stdout;
}

// ── spawn — streams output, suitable for long-running or large-output commands
function runCommand(cmd, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    let err = "";

    child.stdout.on("data", (chunk) => (out += chunk));
    child.stderr.on("data", (chunk) => (err += chunk));

    child.on("close", (code) => {
      if (code === 0) resolve(out.trim());
      else reject(new Error(`Command failed (${code}): ${err.trim()}`));
    });
  });
}

// ── fork — spawns a Node.js child process with an IPC channel ────────────────
// parent.js
const child = fork("./worker.js");
child.send({ task: "compute", n: 42 });
child.on("message", (result) => console.log("Result:", result));
child.on("exit", (code) => console.log("Child exited:", code));

// worker.js
process.on("message", ({ task, n }) => {
  if (task === "compute") {
    process.send(fibonacci(n)); // send result back to parent
  }
});
```

| Method | Shell | Output | Use case |
|---|---|---|---|
| `exec` | ✅ yes | buffered | Simple shell commands, small output |
| `execFile` | ❌ no | buffered | Known executable, safe args |
| `spawn` | ❌ no | streamed | Long-running, large output |
| `fork` | ❌ no | IPC | Node.js child with message passing |

> **Security:** Always use `execFile` or `spawn` (not `exec`) when any part of the command comes from user input. `exec` passes the command to `/bin/sh`, making it vulnerable to shell injection (e.g., `; rm -rf /`).

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement custom error classes with proper inheritance in Node.js

<details><summary><b>Answer</b></summary>

```js
// ── Base application error ─────────────────────────────────────────────────────
class AppError extends Error {
  constructor(message, statusCode = 500, code = "INTERNAL_ERROR") {
    super(message);
    this.name = this.constructor.name; // "NotFoundError", "ValidationError", etc.
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true; // distinguish known errors from bugs
    Error.captureStackTrace(this, this.constructor); // clean stack trace
  }
}

// ── Domain-specific errors ────────────────────────────────────────────────────
class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

class ValidationError extends AppError {
  constructor(message, fields = {}) {
    super(message, 422, "VALIDATION_ERROR");
    this.fields = fields;
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Authentication required") {
    super(message, 401, "UNAUTHORIZED");
  }
}

class ConflictError extends AppError {
  constructor(message = "Resource already exists") {
    super(message, 409, "CONFLICT");
  }
}

// ── Usage in Express ──────────────────────────────────────────────────────────
async function getUserById(req, res, next) {
  try {
    const user = await db.findById(req.params.id);
    if (!user) throw new NotFoundError("User");
    res.json(user);
  } catch (err) {
    next(err);
  }
}

// ── Central error handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: { code: err.code, message: err.message, ...(err.fields && { fields: err.fields }) },
    });
  }
  // Unknown/programmer error — log and return generic message
  console.error("Unexpected error:", err);
  res.status(500).json({ error: { code: "INTERNAL_ERROR", message: "Something went wrong" } });
});

// ── Type guard ────────────────────────────────────────────────────────────────
function isOperationalError(err) {
  return err instanceof AppError && err.isOperational;
}
```

> **`Error.captureStackTrace(this, this.constructor)`** removes the constructor call from the stack trace, making stack traces point to the throw site rather than the error class definition.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Explain Node.js module caching and how to avoid stale module state

```js
// counter.js
let count = 0;
module.exports = {
  increment: () => ++count,
  getCount:  () => count,
};
```

```js
// a.js
const counter = require("./counter");
counter.increment();
console.log(counter.getCount()); // ?

// b.js
const counter = require("./counter");
counter.increment();
console.log(counter.getCount()); // ?
```

<details><summary><b>Answer</b></summary>

**Output in a.js:** `1`
**Output in b.js:** `2`

Node.js caches every module after the first `require()`. Both `a.js` and `b.js` receive the **same object reference**, so mutations in one module are visible in the other — the module acts like a singleton.

```js
// Verify module caching
console.log(require("./counter") === require("./counter")); // true

// Clear cache (testing / hot-reload only — avoid in production)
delete require.cache[require.resolve("./counter")];
const freshCounter = require("./counter"); // new instance, count = 0

// ── Avoid unintended shared state ─────────────────────────────────────────────
// ❌ Mutable module-level state shared across the app
let config = {};
module.exports.setConfig = (c) => { config = c; };
module.exports.getConfig = () => config;

// ✅ Export a factory function — each caller gets its own instance
module.exports = function createCounter(initial = 0) {
  let count = initial;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount:  () => count,
  };
};

// ESM modules are also cached but live bindings are read-only
// import { count } from "./counter.mjs"; // live binding — reflects mutations
```

**Module resolution order (`require("x")`):**
1. Core modules (`node:fs`, `node:path`, ...)
2. `node_modules/x` (walks up directory tree)
3. File modules (`./x`, `../x`) — tries `.js`, `.json`, `.node`
4. Cached instance (if already loaded)

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Identify and fix a memory leak in a Node.js application

<details><summary><b>Answer</b></summary>

**Common memory leak patterns and fixes:**

```js
// ── Leak 1: Growing array / Map without cleanup ────────────────────────────────
// ❌ Cache that never evicts
const cache = new Map();
app.get("/data/:id", async (req, res) => {
  if (!cache.has(req.params.id)) {
    cache.set(req.params.id, await fetchData(req.params.id)); // grows forever
  }
  res.json(cache.get(req.params.id));
});

// ✅ Use a size-bounded LRU cache
import { LRUCache } from "lru-cache"; // npm install lru-cache
const lru = new LRUCache({ max: 500, ttl: 1000 * 60 * 5 }); // 500 items, 5-min TTL

// ── Leak 2: Event listeners never removed ────────────────────────────────────
// ❌ New listener added on every request
app.get("/stream", (req, res) => {
  process.on("SIGTERM", () => res.end()); // accumulates on each request
});

// ✅ Remove the listener when the request ends
app.get("/stream", (req, res) => {
  const handler = () => res.end();
  process.once("SIGTERM", handler);
  res.on("close", () => process.off("SIGTERM", handler)); // cleanup on disconnect
});

// ── Leak 3: Closures retaining large objects ──────────────────────────────────
// ❌ Closure captures large buffer unnecessarily
function processData(largeBuffer) {
  const id = largeBuffer.slice(0, 4); // we only need the first 4 bytes
  return () => console.log(id, largeBuffer); // largeBuffer kept alive
}

// ✅ Extract only what you need
function processData(largeBuffer) {
  const id = Buffer.from(largeBuffer.slice(0, 4)); // copy, then release ref
  return () => console.log(id);
}

// ── Detecting leaks with built-in tools ───────────────────────────────────────
// 1. Heap snapshot via CLI:
//    node --inspect app.js  → open chrome://inspect → Memory tab → Take snapshot

// 2. Programmatic heap stats:
import v8 from "node:v8";
import process from "node:process";

setInterval(() => {
  const heap = process.memoryUsage();
  console.log({
    heapUsed:  `${(heap.heapUsed  / 1024 / 1024).toFixed(1)} MB`,
    heapTotal: `${(heap.heapTotal / 1024 / 1024).toFixed(1)} MB`,
    rss:       `${(heap.rss       / 1024 / 1024).toFixed(1)} MB`,
    external:  `${(heap.external  / 1024 / 1024).toFixed(1)} MB`,
  });
}, 10_000);

// 3. WeakRef and FinalizationRegistry (Node.js 14.6+) — hold references without preventing GC
const ref = new WeakRef(largeObject);
const registry = new FinalizationRegistry((label) => {
  console.log(`${label} was garbage collected`);
});
registry.register(largeObject, "largeObject");
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement the Singleton pattern and a service locator in Node.js

<details><summary><b>Answer</b></summary>

```js
// ── Singleton via module caching (simplest pattern) ───────────────────────────
// db.js — the module itself is the singleton
import postgres from "postgres";

let instance = null;

export function getDb() {
  if (!instance) {
    instance = postgres(process.env.DATABASE_URL, {
      max: 20,              // connection pool size
      idle_timeout: 30,     // seconds
      connect_timeout: 10,
    });
  }
  return instance;
}

// Usage
import { getDb } from "./db.js";
const db = getDb(); // same instance every time

// ── Class-based Singleton ─────────────────────────────────────────────────────
class ConfigService {
  static #instance = null;

  #config;

  constructor() {
    if (ConfigService.#instance) return ConfigService.#instance;
    this.#config = this.#load();
    ConfigService.#instance = this;
  }

  #load() {
    return {
      port:    parseInt(process.env.PORT ?? "3000", 10),
      nodeEnv: process.env.NODE_ENV ?? "development",
      dbUrl:   process.env.DATABASE_URL,
    };
  }

  get(key) { return this.#config[key]; }

  static getInstance() {
    if (!ConfigService.#instance) new ConfigService();
    return ConfigService.#instance;
  }
}

// ── Service Locator (lightweight DI container) ────────────────────────────────
class ServiceLocator {
  #registry = new Map();

  register(name, factory) {
    this.#registry.set(name, { factory, instance: null });
    return this;
  }

  resolve(name) {
    const entry = this.#registry.get(name);
    if (!entry) throw new Error(`Service "${name}" not registered`);
    if (!entry.instance) entry.instance = entry.factory(this);
    return entry.instance;
  }
}

// Bootstrap
const container = new ServiceLocator()
  .register("config",  ()        => ConfigService.getInstance())
  .register("db",      (c)       => new DatabaseService(c.resolve("config")))
  .register("userRepo",(c)       => new UserRepository(c.resolve("db")))
  .register("userSvc", (c)       => new UserService(c.resolve("userRepo")));

// Usage
const userService = container.resolve("userSvc");
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement structured logging with log levels for a production Node.js app

<details><summary><b>Answer</b></summary>

```js
// Using Pino — the fastest Node.js JSON logger (npm install pino pino-pretty)
import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  ...(process.env.NODE_ENV !== "production" && {
    transport: {
      target: "pino-pretty",
      options: { colorize: true, translateTime: "SYS:standard" },
    },
  }),
  base: { pid: process.pid, service: "api-service" },
  redact: ["req.headers.authorization", "*.password", "*.token"], // never log secrets
});

// Child logger — inherits parent settings, adds context
export function createRequestLogger(req) {
  return logger.child({
    requestId: req.headers["x-request-id"] ?? crypto.randomUUID(),
    method:    req.method,
    url:       req.url,
  });
}

// Express request logging middleware
export function requestLogger(req, res, next) {
  req.log = createRequestLogger(req);
  const start = Date.now();

  res.on("finish", () => {
    req.log.info(
      { statusCode: res.statusCode, duration: Date.now() - start },
      "request completed"
    );
  });

  next();
}

// Usage
logger.info({ userId: 123 }, "User logged in");
logger.warn({ retryCount: 3 }, "Retrying failed request");
logger.error({ err: new Error("DB down"), query: "SELECT *" }, "Database error");

// ── Log levels (ascending severity) ─────────────────────────────────────────
// trace → debug → info → warn → error → fatal

// ── Production JSON output ───────────────────────────────────────────────────
// {"level":30,"time":1714000000000,"pid":1234,"service":"api","msg":"User logged in","userId":123}

// ── Avoid these anti-patterns ────────────────────────────────────────────────
// ❌ console.log(user)        — logs PII, no level, no structure
// ❌ logger.info(req.body)    — may log passwords; use redact
// ❌ logger.error(err.stack)  — pass the error object, not .stack string
// ✅ logger.error({ err }, "msg") — pino serializes err.message + stack automatically
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write unit tests for a Node.js module using Jest

```js
// math.js — module to test
export function add(a, b) { return a + b; }
export function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
export async function fetchUser(id, httpClient) {
  const res = await httpClient.get(`/users/${id}`);
  return res.data;
}
```

<details><summary><b>Answer</b></summary>

```js
// math.test.js
import { add, divide, fetchUser } from "./math.js";

// ── Basic assertions ──────────────────────────────────────────────────────────
describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("handles negative numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });

  test.each([
    [1, 2, 3],
    [0, 0, 0],
    [-5, 5, 0],
  ])("add(%i, %i) = %i", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});

describe("divide()", () => {
  test("divides correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });
});

// ── Mocking a dependency ──────────────────────────────────────────────────────
describe("fetchUser()", () => {
  test("returns user data on success", async () => {
    const mockClient = {
      get: jest.fn().mockResolvedValue({ data: { id: 1, name: "Alice" } }),
    };

    const user = await fetchUser(1, mockClient);

    expect(mockClient.get).toHaveBeenCalledWith("/users/1");
    expect(user).toEqual({ id: 1, name: "Alice" });
  });

  test("propagates HTTP errors", async () => {
    const mockClient = {
      get: jest.fn().mockRejectedValue(new Error("Network error")),
    };

    await expect(fetchUser(1, mockClient)).rejects.toThrow("Network error");
  });
});

// ── Spy on a module function ──────────────────────────────────────────────────
import * as math from "./math.js";

test("spying on add", () => {
  const spy = jest.spyOn(math, "add");
  math.add(1, 2);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1, 2);
  spy.mockRestore();
});

// ── Setup and teardown ────────────────────────────────────────────────────────
describe("database tests", () => {
  let db;

  beforeAll(async () => { db = await connectTestDb(); });
  afterAll(async  () => { await db.close(); });
  beforeEach(async () => { await db.seed(); });
  afterEach(async  () => { await db.reset(); });

  test("finds user by id", async () => {
    const user = await db.users.findById(1);
    expect(user).toMatchObject({ id: 1, name: expect.any(String) });
  });
});
```

**`package.json` Jest configuration:**

```json
{
  "scripts": { "test": "jest --coverage", "test:watch": "jest --watch" },
  "jest": {
    "testEnvironment": "node",
    "transform": { "^.+\\.js$": ["babel-jest", { "presets": ["@babel/preset-env"] }] },
    "coverageThreshold": { "global": { "lines": 80 } }
  }
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement a real-time chat server using WebSockets (`ws` package)

<details><summary><b>Answer</b></summary>

```js
// server.js — npm install ws
import { WebSocketServer, WebSocket } from "ws";
import { createServer } from "node:http";
import { randomUUID } from "node:crypto";

const httpServer = createServer();
const wss = new WebSocketServer({ server: httpServer });

// Track connected clients with metadata
const clients = new Map(); // Map<WebSocket, { id, username, room }>

function broadcast(room, message, excludeSocket = null) {
  const payload = JSON.stringify(message);
  for (const [socket, meta] of clients) {
    if (meta.room === room && socket !== excludeSocket && socket.readyState === WebSocket.OPEN) {
      socket.send(payload);
    }
  }
}

wss.on("connection", (ws, req) => {
  const clientId = randomUUID();
  clients.set(ws, { id: clientId, username: null, room: null });

  ws.on("message", (raw) => {
    let msg;
    try { msg = JSON.parse(raw); }
    catch { return ws.send(JSON.stringify({ error: "Invalid JSON" })); }

    const meta = clients.get(ws);

    switch (msg.type) {
      case "join":
        meta.username = msg.username?.slice(0, 30) ?? `user_${clientId.slice(0, 6)}`;
        meta.room     = msg.room ?? "general";
        broadcast(meta.room, { type: "system", text: `${meta.username} joined` }, ws);
        ws.send(JSON.stringify({ type: "joined", room: meta.room, id: clientId }));
        break;

      case "message":
        if (!meta.room) return ws.send(JSON.stringify({ error: "Join a room first" }));
        broadcast(meta.room, {
          type:     "message",
          id:       randomUUID(),
          from:     meta.username,
          text:     msg.text?.slice(0, 2000) ?? "",
          timestamp: new Date().toISOString(),
        });
        break;
    }
  });

  ws.on("close", () => {
    const meta = clients.get(ws);
    if (meta?.room) broadcast(meta.room, { type: "system", text: `${meta.username} left` });
    clients.delete(ws);
  });

  ws.on("error", (err) => console.error("WebSocket error:", err));

  // Heartbeat — detect dead connections
  ws.isAlive = true;
  ws.on("pong", () => { ws.isAlive = true; });
});

// Ping all clients every 30 s; terminate unresponsive ones
const heartbeat = setInterval(() => {
  for (const [ws] of clients) {
    if (!ws.isAlive) { ws.terminate(); continue; }
    ws.isAlive = false;
    ws.ping();
  }
}, 30_000);

wss.on("close", () => clearInterval(heartbeat));

httpServer.listen(3001, () => console.log("WebSocket server on ws://localhost:3001"));
```

```js
// client.js (Node.js test client)
const ws = new WebSocket("ws://localhost:3001");
ws.on("open",    ()    => { ws.send(JSON.stringify({ type: "join", username: "Alice", room: "dev" })); });
ws.on("message", (raw) => console.log(JSON.parse(raw)));
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement the Circuit Breaker pattern for resilient microservice calls

<details><summary><b>Answer</b></summary>

```js
const State = Object.freeze({ CLOSED: "CLOSED", OPEN: "OPEN", HALF_OPEN: "HALF_OPEN" });

class CircuitBreaker {
  #state       = State.CLOSED;
  #failureCount = 0;
  #successCount = 0;
  #lastFailureTime = null;

  constructor(fn, {
    failureThreshold = 5,   // open after N consecutive failures
    successThreshold = 2,   // close again after N successes in HALF_OPEN
    timeout          = 60_000, // ms to wait before trying HALF_OPEN
  } = {}) {
    this.fn = fn;
    this.failureThreshold = failureThreshold;
    this.successThreshold = successThreshold;
    this.timeout          = timeout;
  }

  async call(...args) {
    if (this.#state === State.OPEN) {
      const elapsed = Date.now() - this.#lastFailureTime;
      if (elapsed < this.timeout) {
        throw new Error(`Circuit OPEN — retry after ${this.timeout - elapsed}ms`);
      }
      this.#state = State.HALF_OPEN;
      this.#successCount = 0;
    }

    try {
      const result = await this.fn(...args);
      this.#onSuccess();
      return result;
    } catch (err) {
      this.#onFailure();
      throw err;
    }
  }

  #onSuccess() {
    this.#failureCount = 0;
    if (this.#state === State.HALF_OPEN) {
      this.#successCount++;
      if (this.#successCount >= this.successThreshold) {
        this.#state = State.CLOSED;
        console.log("Circuit CLOSED — service recovered");
      }
    }
  }

  #onFailure() {
    this.#failureCount++;
    this.#lastFailureTime = Date.now();
    if (this.#failureCount >= this.failureThreshold || this.#state === State.HALF_OPEN) {
      this.#state = State.OPEN;
      console.warn(`Circuit OPEN after ${this.#failureCount} failures`);
    }
  }

  get state() { return this.#state; }
}

// Usage
const breaker = new CircuitBreaker(
  (userId) => fetch(`https://user-service/users/${userId}`).then(r => r.json()),
  { failureThreshold: 3, timeout: 30_000 }
);

async function getUser(userId) {
  try {
    return await breaker.call(userId);
  } catch (err) {
    if (err.message.startsWith("Circuit OPEN")) {
      return getCachedUser(userId); // fallback
    }
    throw err;
  }
}
```

**State transitions:**

```
CLOSED  ──(N failures)──▶  OPEN  ──(timeout)──▶  HALF_OPEN
  ▲                                                    │
  └──────────── (M successes) ────────────────────────┘
                             └──(1 failure)──▶  OPEN
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Handle file uploads in Express.js using `multer` with size and type validation

<details><summary><b>Answer</b></summary>

```js
// npm install multer
import multer from "multer";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";

const UPLOAD_DIR  = "./uploads";
const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);

await mkdir(UPLOAD_DIR, { recursive: true });

// ── Disk storage with safe filename ───────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename:    (_req,  file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${randomUUID()}${ext}`); // never use originalname — path traversal risk
  },
});

// ── File filter — validate MIME type ─────────────────────────────────────────
function fileFilter(_req, file, cb) {
  if (ALLOWED_TYPES.has(file.mimetype)) return cb(null, true);
  cb(Object.assign(new Error("File type not allowed"), { code: "INVALID_TYPE" }));
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize:  MAX_SIZE_MB * 1024 * 1024,
    files:     5,   // max 5 files per request
  },
});

// ── Routes ────────────────────────────────────────────────────────────────────
// Single file
app.post("/upload/avatar", upload.single("avatar"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ filename: req.file.filename, size: req.file.size });
});

// Multiple files
app.post("/upload/gallery", upload.array("photos", 5), (req, res) => {
  const files = req.files.map(({ filename, size, mimetype }) => ({ filename, size, mimetype }));
  res.json({ files });
});

// ── Multer error handler ───────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    const messages = {
      LIMIT_FILE_SIZE:  `File too large (max ${MAX_SIZE_MB}MB)`,
      LIMIT_FILE_COUNT: "Too many files",
      LIMIT_UNEXPECTED_FILE: "Unexpected field name",
    };
    return res.status(413).json({ error: messages[err.code] ?? err.message });
  }
  if (err.code === "INVALID_TYPE") return res.status(415).json({ error: err.message });
  next(err);
});
```

> **Security:** Always generate server-side filenames (`randomUUID()`), never use `req.file.originalname` for storage paths. Serve uploaded files from a dedicated static route, not the source directory, and add a virus scanner (e.g. `clamscan`) for production uploads.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement graceful shutdown with resource cleanup in a Node.js server

<details><summary><b>Answer</b></summary>

```js
import { createServer } from "node:http";
import express from "express";

const app = express();
const server = createServer(app);

// Simulate resources that need cleanup
let dbConnection = null;
let redisClient  = null;
let scheduledJob = null;

async function startup() {
  dbConnection = await connectDatabase();
  redisClient  = await connectRedis();
  scheduledJob  = startCronJob();

  server.listen(process.env.PORT ?? 3000, () =>
    console.log("Server started on port", process.env.PORT ?? 3000)
  );
}

// ── Graceful shutdown ─────────────────────────────────────────────────────────
let isShuttingDown = false;

async function shutdown(signal) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`\n${signal} received — starting graceful shutdown`);

  // 1. Stop accepting new requests
  server.close(async () => {
    console.log("HTTP server closed");

    try {
      // 2. Close resources in parallel
      await Promise.allSettled([
        dbConnection?.end(),
        redisClient?.quit(),
        scheduledJob?.stop(),
      ]);
      console.log("All resources released");
      process.exit(0);
    } catch (err) {
      console.error("Error during shutdown:", err);
      process.exit(1);
    }
  });

  // 3. Force kill if graceful shutdown takes too long
  setTimeout(() => {
    console.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10_000).unref(); // .unref() so this timer doesn\'t prevent process exit
}

// Handle termination signals
process.on("SIGTERM", () => shutdown("SIGTERM")); // Kubernetes, Docker stop
process.on("SIGINT",  () => shutdown("SIGINT"));  // Ctrl+C

// Handle unexpected errors — exit so supervisor can restart
process.on("uncaughtException",  (err) => { console.error("Uncaught:", err); process.exit(1); });
process.on("unhandledRejection", (err) => { console.error("Unhandled:", err); process.exit(1); });

// Kubernetes readiness — signal not ready during shutdown
app.get("/health/ready", (_req, res) => {
  if (isShuttingDown) return res.status(503).json({ status: "shutting_down" });
  res.json({ status: "ready" });
});

startup().catch((err) => { console.error("Startup failed:", err); process.exit(1); });
```

**Shutdown sequence checklist:**
1. Stop load balancer traffic (readiness probe returns 503)
2. Stop accepting new HTTP connections
3. Wait for in-flight requests to complete
4. Close database connections and message queue consumers
5. Flush logs and metrics
6. Exit with code `0`

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Protect a Node.js app from prototype pollution attacks

```js
// Attacker sends: POST /merge { "__proto__": { "isAdmin": true } }
function merge(target, source) {
  for (const key in source) {
    target[key] = source[key]; // ❌ copies __proto__ key
  }
  return target;
}
```

<details><summary><b>Answer</b></summary>

**What is prototype pollution?** An attacker manipulates `Object.prototype` by injecting properties via keys like `__proto__`, `constructor`, or `prototype`. This can affect all objects in the process and lead to privilege escalation or RCE.

```js
// ── Detecting the vulnerability ───────────────────────────────────────────────
const malicious = JSON.parse('{"__proto__": {"isAdmin": true}}');
const obj = {};
merge(obj, malicious);
console.log({}.isAdmin); // true ← Object.prototype is polluted!

// ── Fix 1: Check for dangerous keys in merge ─────────────────────────────────
function safeMerge(target, source) {
  if (source === null || typeof source !== "object") return target;
  for (const key of Object.keys(source)) { // Object.keys() — own enumerable props only
    if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
    const val = source[key];
    target[key] = val && typeof val === "object" ? safeMerge({}, val) : val;
  }
  return target;
}

// ── Fix 2: Use Object.create(null) — prototype-free objects ──────────────────
const clean = Object.create(null); // no __proto__ chain
clean.name = "safe";
console.log(clean.__proto__); // undefined

// ── Fix 3: JSON parse with null prototype ────────────────────────────────────
function safeParse(json) {
  const parsed = JSON.parse(json);
  // Walk the object and block dangerous keys
  return JSON.parse(json, (key, value) => {
    if (key === "__proto__" || key === "constructor") return undefined;
    return value;
  });
}

// ── Fix 4: Freeze Object.prototype in application entry point ─────────────────
Object.freeze(Object.prototype);
// After this, attempts to add properties to Object.prototype silently fail (or throw in strict mode)

// ── Fix 5: Use structuredClone for deep clone (Node.js 17+) ─────────────────
const cloned = structuredClone(userInput); // built-in, safe deep clone

// ── Express body parser protection ───────────────────────────────────────────
// express.json() + body-parser are NOT vulnerable by default,
// but always validate/sanitize parsed bodies before passing to merge-style functions
app.use(express.json());
app.post("/merge", (req, res) => {
  const safe = safeMerge({}, req.body); // use safeMerge, never direct spread on nested objects
  res.json(safe);
});
```

> **Rule of thumb:** Never iterate user-provided keys with `for...in` and assign them directly to an existing object. Always use `Object.keys()` (own-only) or `Object.hasOwn()`, and explicitly block `__proto__`, `constructor`, and `prototype`.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement API pagination (cursor-based and offset-based) in Express.js

<details><summary><b>Answer</b></summary>

```js
// ── Offset-based pagination ────────────────────────────────────────────────────
// Simple but inconsistent when data changes between pages
app.get("/api/products", async (req, res) => {
  const page  = Math.max(1, parseInt(req.query.page  ?? "1",  10));
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit ?? "20", 10)));
  const offset = (page - 1) * limit;

  const [items, total] = await Promise.all([
    db.query("SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2", [limit, offset]),
    db.query("SELECT COUNT(*) FROM products"),
  ]);

  const totalCount = parseInt(total.rows[0].count, 10);
  const totalPages = Math.ceil(totalCount / limit);

  res.json({
    data: items.rows,
    pagination: {
      page,
      limit,
      total:      totalCount,
      totalPages,
      hasNext:    page < totalPages,
      hasPrev:    page > 1,
      nextPage:   page < totalPages ? page + 1 : null,
      prevPage:   page > 1         ? page - 1 : null,
    },
  });
});

// ── Cursor-based pagination ────────────────────────────────────────────────────
// Consistent, efficient for large datasets (no OFFSET scan)
app.get("/api/products/cursor", async (req, res) => {
  const limit  = Math.min(100, parseInt(req.query.limit ?? "20", 10));
  const cursor = req.query.cursor; // opaque cursor = base64-encoded last item ID

  let afterId = null;
  if (cursor) {
    try {
      afterId = parseInt(Buffer.from(cursor, "base64url").toString("utf8"), 10);
    } catch {
      return res.status(400).json({ error: "Invalid cursor" });
    }
  }

  const query = afterId
    ? "SELECT * FROM products WHERE id > $1 ORDER BY id LIMIT $2"
    : "SELECT * FROM products ORDER BY id LIMIT $1";
  const params = afterId ? [afterId, limit + 1] : [limit + 1];

  const rows = (await db.query(query, params)).rows;
  const hasMore = rows.length > limit;
  const items   = hasMore ? rows.slice(0, limit) : rows;

  const nextCursor = hasMore
    ? Buffer.from(String(items.at(-1).id)).toString("base64url")
    : null;

  res.json({
    data: items,
    pagination: { hasMore, nextCursor },
  });
});
```

| Strategy | Pros | Cons |
|---|---|---|
| **Offset** | Simple, supports random access | Skips/duplicates when data changes; slow at high offsets |
| **Cursor** | Consistent, efficient | Cannot jump to arbitrary pages |

> Use **cursor-based** for real-time feeds (social, chat, events). Use **offset-based** for admin UIs where page jumping is needed.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is libuv and how does Node.js use the thread pool?

<details><summary><b>Answer</b></summary>

**libuv** is the C library that provides Node.js with its cross-platform event loop, asynchronous I/O, and a thread pool. The single-threaded JavaScript event loop delegates blocking operations to libuv\'s thread pool, so the main thread never blocks.

```js
// ── Operations that use the libuv thread pool ─────────────────────────────────
// • fs.readFile / fs.writeFile (file I/O — not network I/O)
// • dns.lookup (not dns.resolve)
// • crypto.pbkdf2, crypto.scrypt, crypto.randomBytes (CPU-heavy crypto)
// • zlib compression / decompression
// • user C++ addons that opt in

// Default pool size: 4 threads (UV_THREADPOOL_SIZE env var, max 1024)
// Set at startup — cannot be changed at runtime
process.env.UV_THREADPOOL_SIZE = "16"; // must set BEFORE requiring any module

// ── Demonstrating thread pool saturation ──────────────────────────────────────
import { pbkdf2 } from "node:crypto";
import { promisify } from "node:util";

const pbkdf2Async = promisify(pbkdf2);

console.time("4 parallel hashes");
await Promise.all([
  pbkdf2Async("pwd1", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd2", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd3", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd4", "salt", 100_000, 64, "sha512"),
]);
console.timeEnd("4 parallel hashes"); // ~T ms (all 4 run concurrently on 4 threads)

console.time("5 parallel hashes");
await Promise.all([
  pbkdf2Async("pwd1", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd2", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd3", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd4", "salt", 100_000, 64, "sha512"),
  pbkdf2Async("pwd5", "salt", 100_000, 64, "sha512"), // queued — waits for a free thread
]);
console.timeEnd("5 parallel hashes"); // ~2×T ms — 5th hash waits for pool

// ── Network I/O does NOT use the thread pool ──────────────────────────────────
// fetch, http.get, net.connect — handled by OS async I/O (epoll/kqueue/IOCP)
// These scale to thousands of concurrent connections without extra threads.

// ── Event loop phases (simplified) ───────────────────────────────────────────
// 1. timers          → setTimeout, setInterval callbacks
// 2. pending I/O     → deferred I/O callbacks
// 3. idle / prepare  → internal use
// 4. poll            → retrieve new I/O events (blocks here if nothing pending)
// 5. check           → setImmediate callbacks
// 6. close callbacks → socket.on("close", ...) etc.
// + nextTick queue and microtask queue drain between each phase
```

**Summary diagram:**

```
JavaScript (single thread)
         │
         ▼
    libuv Event Loop
    ┌────────────────────────────────┐
    │  timers → I/O → check → close │
    └──────────────┬─────────────────┘
                   │ offload blocking ops
                   ▼
         libuv Thread Pool (default: 4 threads)
         [fs I/O] [dns.lookup] [crypto] [zlib]
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Implement an in-memory cache with TTL and LRU eviction

<details><summary><b>Answer</b></summary>

```js
// Simple TTL cache without external dependencies
class TTLCache {
  #store  = new Map();
  #timers = new Map();

  constructor(defaultTTL = 60_000) {
    this.defaultTTL = defaultTTL;
  }

  set(key, value, ttl = this.defaultTTL) {
    this.delete(key); // clear any existing timer
    this.#store.set(key, value);
    if (ttl > 0) {
      const timer = setTimeout(() => this.delete(key), ttl).unref();
      this.#timers.set(key, timer);
    }
    return this;
  }

  get(key) { return this.#store.get(key); }
  has(key) { return this.#store.has(key); }
  size()   { return this.#store.size; }

  delete(key) {
    clearTimeout(this.#timers.get(key));
    this.#timers.delete(key);
    return this.#store.delete(key);
  }

  clear() {
    this.#timers.forEach(clearTimeout);
    this.#timers.clear();
    this.#store.clear();
  }
}

// ── LRU Cache (Least Recently Used) — O(1) get/set via Map ───────────────────
class LRUCache {
  #map;
  #max;

  constructor(max = 100) {
    this.#max = max;
    this.#map = new Map(); // insertion-order Map acts as a doubly-linked list
  }

  get(key) {
    if (!this.#map.has(key)) return undefined;
    // Move to end (most recently used)
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.#map.has(key)) this.#map.delete(key);
    else if (this.#map.size >= this.#max) {
      // Evict least recently used (first entry in Map)
      this.#map.delete(this.#map.keys().next().value);
    }
    this.#map.set(key, value);
    return this;
  }

  has(key)  { return this.#map.has(key); }
  get size() { return this.#map.size; }
}

// ── Cache-aside pattern with Express ─────────────────────────────────────────
const cache = new LRUCache(500);

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const cacheKey = `product:${id}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    res.setHeader("X-Cache", "HIT");
    return res.json(cached);
  }

  const product = await db.products.findById(id);
  if (!product) return res.status(404).json({ error: "Not found" });

  cache.set(cacheKey, product);
  res.setHeader("X-Cache", "MISS");
  res.json(product);
});
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
