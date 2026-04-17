# Design Patterns in Node.js

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

<br/>

## Table of Contents

* [Singleton Pattern](#-1-singleton-pattern)
* [Factory Pattern](#-2-factory-pattern)
* [Observer Pattern](#-3-observer-pattern)
* [Strategy Pattern](#-4-strategy-pattern)
* [Middleware Pattern](#-5-middleware-pattern)
* [Decorator Pattern](#-6-decorator-pattern)
* [Proxy Pattern](#-7-proxy-pattern)
* [Command Pattern](#-8-command-pattern)
* [Module Pattern](#-9-module-pattern)
* [Dependency Injection Pattern](#-10-dependency-injection-pattern)
* [Repository Pattern](#-11-repository-pattern)
* [Delegate Pattern](#-12-delegate-pattern)
* [Mediator Pattern](#-13-mediator-pattern)

<br/>

## # 1. SINGLETON PATTERN

<br/>

**Common Use Cases:**
- Shared database connection pool (Mongoose, `pg.Pool`) reused across all modules
- Application-wide configuration loaded once from environment variables
- Centralized logger instance (Winston, Pino) shared throughout the app
- In-memory cache or rate-limiter state shared across requests
- Feature flag manager initialized at startup

## Q. What is the Singleton pattern and how does Node.js module system support it?

The Singleton pattern ensures only one instance of a class exists throughout the application lifecycle. In Node.js, the `require()` module cache makes every exported module a singleton by default.

```js
// logger.js
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push({ message, timestamp: new Date() });
    console.log(`[LOG]: ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

module.exports = new Logger(); // cached by require()
```

```js
// app.js
const logger = require('./logger');
const logger2 = require('./logger');

logger.log('Server started');
console.log(logger === logger2); // true — same instance
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a thread-safe Singleton in Node.js?

Node.js is single-threaded, so module-level singletons are inherently safe. Using `Object.freeze()` prevents external mutation:

```js
// config.js
class Config {
  constructor() {
    this.dbHost = process.env.DB_HOST || 'localhost';
    this.dbPort = process.env.DB_PORT || 5432;
    this.appPort = process.env.PORT || 3000;
  }
}

const instance = Object.freeze(new Config());
module.exports = instance;
```

```js
// server.js
const config = require('./config');
console.log(config.dbHost); // 'localhost'
config.dbHost = '127.0.0.1'; // silently fails due to freeze
console.log(config.dbHost); // still 'localhost'
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. FACTORY PATTERN

<br/>

**Common Use Cases:**
- Creating different notification senders (Email, SMS, Push) based on user preference
- Instantiating database adapters (MySQL, PostgreSQL, MongoDB) based on environment config
- Generating different HTTP response formatters (JSON, XML, CSV) from a single endpoint
- Building different payment gateway clients (Stripe, PayPal, Razorpay) at runtime
- Creating transport strategies for logging (file, console, remote)

## Q. What is the Factory pattern? Give a Node.js example.

The Factory pattern provides an interface for creating objects without specifying the exact class. It centralizes object creation logic.

```js
// notificationFactory.js
class EmailNotification {
  send(message) {
    console.log(`Email sent: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`SMS sent: ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Push notification sent: ${message}`);
  }
}

class NotificationFactory {
  static create(type) {
    switch (type) {
      case 'email': return new EmailNotification();
      case 'sms':   return new SMSNotification();
      case 'push':  return new PushNotification();
      default: throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

module.exports = NotificationFactory;
```

```js
// app.js
const NotificationFactory = require('./notificationFactory');

const email = NotificationFactory.create('email');
email.send('Welcome!'); // Email sent: Welcome!

const sms = NotificationFactory.create('sms');
sms.send('Your OTP is 1234'); // SMS sent: Your OTP is 1234
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between Factory and Abstract Factory patterns?

- **Factory**: Creates one product type via a single factory method.
- **Abstract Factory**: Creates families of related products through multiple factory methods.

```js
// abstractFactory.js
class MySQLConnection {
  query(sql) { console.log(`MySQL query: ${sql}`); }
}

class MySQLTransaction {
  commit() { console.log('MySQL transaction committed'); }
}

class PostgreSQLConnection {
  query(sql) { console.log(`PostgreSQL query: ${sql}`); }
}

class PostgreSQLTransaction {
  commit() { console.log('PostgreSQL transaction committed'); }
}

class MySQLFactory {
  createConnection()   { return new MySQLConnection(); }
  createTransaction()  { return new MySQLTransaction(); }
}

class PostgreSQLFactory {
  createConnection()   { return new PostgreSQLConnection(); }
  createTransaction()  { return new PostgreSQLTransaction(); }
}

function getDatabaseFactory(dbType) {
  if (dbType === 'mysql')      return new MySQLFactory();
  if (dbType === 'postgresql') return new PostgreSQLFactory();
  throw new Error(`Unsupported DB: ${dbType}`);
}

const factory = getDatabaseFactory('mysql');
const conn = factory.createConnection();
conn.query('SELECT * FROM users'); // MySQL query: SELECT * FROM users
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. OBSERVER PATTERN

<br/>

**Common Use Cases:**
- Node.js core: `http.Server`, `fs.ReadStream`, `net.Socket` all extend `EventEmitter`
- Real-time order processing (order placed → email, inventory update, analytics)
- WebSocket event broadcasting (user joins, messages, disconnects)
- Internal pub/sub event bus decoupling microservice layers
- File watchers (`chokidar`) triggering downstream rebuild or upload tasks
- Audit logging by listening to domain events without modifying business logic

## Q. What is the Observer pattern? How does Node.js EventEmitter implement it?

The Observer pattern defines a one-to-many dependency so that when one object changes state, all dependents are notified automatically. Node.js `EventEmitter` is a built-in implementation.

```js
const EventEmitter = require('events');

class OrderService extends EventEmitter {
  placeOrder(order) {
    console.log(`Order placed: ${order.id}`);
    this.emit('orderPlaced', order);
  }
}

const orderService = new OrderService();

// Observers
orderService.on('orderPlaced', (order) => {
  console.log(`[EmailService] Sending confirmation for order ${order.id}`);
});

orderService.on('orderPlaced', (order) => {
  console.log(`[InventoryService] Reducing stock for ${order.item}`);
});

orderService.on('orderPlaced', (order) => {
  console.log(`[AnalyticsService] Recording order event`);
});

orderService.placeOrder({ id: 101, item: 'Laptop' });
// Order placed: 101
// [EmailService] Sending confirmation for order 101
// [InventoryService] Reducing stock for Laptop
// [AnalyticsService] Recording order event
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a custom Observer pattern (without EventEmitter)?

```js
class EventBus {
  constructor() {
    this._subscribers = {};
  }

  subscribe(event, callback) {
    if (!this._subscribers[event]) {
      this._subscribers[event] = [];
    }
    this._subscribers[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (this._subscribers[event]) {
      this._subscribers[event] = this._subscribers[event].filter(
        (cb) => cb !== callback
      );
    }
  }

  publish(event, data) {
    (this._subscribers[event] || []).forEach((cb) => cb(data));
  }
}

const bus = new EventBus();

const onUserCreated = (user) => console.log(`Welcome email sent to ${user.email}`);
bus.subscribe('userCreated', onUserCreated);
bus.subscribe('userCreated', (user) => console.log(`Audit log: new user ${user.id}`));

bus.publish('userCreated', { id: 1, email: 'alice@example.com' });
// Welcome email sent to alice@example.com
// Audit log: new user 1

bus.unsubscribe('userCreated', onUserCreated);
bus.publish('userCreated', { id: 2, email: 'bob@example.com' });
// Audit log: new user 2
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. STRATEGY PATTERN

<br/>

**Common Use Cases:**
- Authentication strategies (JWT, OAuth2, API Key, Session) — Passport.js is built entirely on this pattern
- Payment processing (Stripe, PayPal, Braintree) selectable at checkout
- Data compression strategies (gzip, brotli, deflate) chosen by client `Accept-Encoding` header
- Caching backends (in-memory, Redis, Memcached) swapped by environment
- Sorting or pagination algorithms that vary by dataset size or user preference

## Q. What is the Strategy pattern? Provide a Node.js example.

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from the clients that use it.

```js
// strategies/sortStrategies.js
const bubbleSort = (arr) => {
  const a = [...arr];
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < a.length - i - 1; j++)
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
  return a;
};

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left  = arr.filter((x) => x < pivot);
  const mid   = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
};

class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy(data);
  }
}

const sorter = new Sorter(bubbleSort);
console.log(sorter.sort([5, 3, 1, 4, 2])); // [1, 2, 3, 4, 5]

sorter.setStrategy(quickSort);
console.log(sorter.sort([5, 3, 1, 4, 2])); // [1, 2, 3, 4, 5]
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How is the Strategy pattern used for authentication in Express?

```js
// authStrategies.js
const jwtStrategy = async (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('No token provided');
  // verify token (pseudo-code)
  return { userId: 1, role: 'admin' };
};

const apiKeyStrategy = async (req) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY)
    throw new Error('Invalid API key');
  return { userId: 99, role: 'service' };
};

class AuthContext {
  constructor(strategy) {
    this._strategy = strategy;
  }

  setStrategy(strategy) {
    this._strategy = strategy;
  }

  async authenticate(req) {
    return this._strategy(req);
  }
}

module.exports = { AuthContext, jwtStrategy, apiKeyStrategy };
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. MIDDLEWARE PATTERN

<br/>

**Common Use Cases:**
- Request logging and tracing (Morgan, Winston middleware)
- Authentication and authorization guards (JWT verification, role checks)
- Input validation and sanitization (`express-validator`, `Joi`)
- Rate limiting and throttling (`express-rate-limit`)
- CORS handling (`cors` package)
- Global error handling (centralized `(err, req, res, next)` handler)
- Response compression (`compression` middleware)

## Q. What is the Middleware pattern in Node.js? How does Express use it?

The Middleware pattern is a pipeline of functions where each function can process a request, optionally pass it to the next function, or terminate the chain. Express.js is built entirely around this pattern.

```js
const express = require('express');
const app = express();

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

// Auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  req.user = { id: 1 }; // decoded from token
  next();
};

// Error-handling middleware (4 arguments)
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

app.use(logger);
app.use(express.json());

app.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

app.use(errorHandler);
app.listen(3000);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you build a custom middleware pipeline without Express?

```js
class Pipeline {
  constructor() {
    this._middlewares = [];
  }

  use(fn) {
    this._middlewares.push(fn);
    return this; // enables chaining
  }

  async execute(context) {
    const runner = async (index) => {
      if (index >= this._middlewares.length) return;
      const middleware = this._middlewares[index];
      await middleware(context, () => runner(index + 1));
    };
    await runner(0);
  }
}

// Usage
const pipeline = new Pipeline();

pipeline
  .use(async (ctx, next) => {
    console.log('Middleware 1: before');
    await next();
    console.log('Middleware 1: after');
  })
  .use(async (ctx, next) => {
    console.log('Middleware 2: processing');
    ctx.result = 'Done';
    await next();
  });

pipeline.execute({}).then(() => console.log('Pipeline complete'));
// Middleware 1: before
// Middleware 2: processing
// Middleware 1: after
// Pipeline complete
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. DECORATOR PATTERN

<br/>

**Common Use Cases:**
- Wrapping service methods with caching without modifying the service class
- Adding logging or performance metrics around repository calls
- Applying retry logic around HTTP client requests
- Enforcing authorization checks on service layer methods
- Instrumenting functions with distributed tracing spans (OpenTelemetry)
- NestJS `@UseGuards()`, `@UseInterceptors()`, `@UsePipes()` are decorator-based

## Q. What is the Decorator pattern? Show a Node.js example.

The Decorator pattern attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing.

```js
// base service
class UserService {
  getUser(id) {
    return { id, name: 'Alice', email: 'alice@example.com' };
  }
}

// Logging Decorator
class LoggingDecorator {
  constructor(service) {
    this._service = service;
  }

  getUser(id) {
    console.log(`[LOG] getUser called with id=${id}`);
    const result = this._service.getUser(id);
    console.log(`[LOG] getUser returned:`, result);
    return result;
  }
}

// Caching Decorator
class CachingDecorator {
  constructor(service) {
    this._service = service;
    this._cache = new Map();
  }

  getUser(id) {
    if (this._cache.has(id)) {
      console.log(`[CACHE] Hit for id=${id}`);
      return this._cache.get(id);
    }
    const result = this._service.getUser(id);
    this._cache.set(id, result);
    return result;
  }
}

// Stack decorators
const service = new CachingDecorator(new LoggingDecorator(new UserService()));
service.getUser(1); // LOG + fetch
service.getUser(1); // CACHE hit
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How are JavaScript decorators (TC39 proposal) used in Node.js with TypeScript/Babel?

```ts
// TypeScript with experimentalDecorators: true
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    const result = original.apply(this, args);
    console.log(`${key} returned`, result);
    return result;
  };
  return descriptor;
}

class MathService {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const svc = new MathService();
svc.add(2, 3);
// Calling add with [2, 3]
// add returned 5
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. PROXY PATTERN

<br/>

**Common Use Cases:**
- Input validation on model objects before persisting to a database
- Lazy initialization of expensive resources (DB connections, ML model loading)
- Read-only enforcement on shared configuration objects
- Reactive state tracking — Vue 3\'s reactivity system is built on `Proxy`
- API mocking and test spies that transparently record calls
- Transparent request forwarding in API gateway or reverse proxy services

## Q. What is the Proxy pattern in Node.js? How does ES6 Proxy implement it?

The Proxy pattern provides a surrogate to control access to another object. ES6 `Proxy` enables this natively.

```js
const validator = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number' || value < 0 || value > 120)
        throw new RangeError('Age must be a number between 0 and 120');
    }
    if (prop === 'email') {
      if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(value))
        throw new TypeError('Invalid email address');
    }
    target[prop] = value;
    return true;
  },
};

const user = new Proxy({}, validator);
user.age = 25;        // OK
user.email = 'alice@example.com'; // OK

try {
  user.age = -5;      // RangeError: Age must be a number between 0 and 120
} catch (e) {
  console.error(e.message);
}
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you use a Proxy for lazy initialization (virtual proxy)?

```js
function createLazyProxy(loader) {
  let instance = null;
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (!instance) {
          console.log('[Proxy] Initializing heavy resource...');
          instance = loader();
        }
        return instance[prop];
      },
    }
  );
}

const heavyDB = createLazyProxy(() => ({
  query: (sql) => `Result of: ${sql}`,
}));

// Resource not loaded yet
console.log(heavyDB.query('SELECT 1'));
// [Proxy] Initializing heavy resource...
// Result of: SELECT 1

console.log(heavyDB.query('SELECT 2'));
// Result of: SELECT 2  (no re-initialization)
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 8. COMMAND PATTERN

<br/>

**Common Use Cases:**
- Job/task queues (BullMQ, Bee-Queue) where each job is a serializable command object
- Undo/redo functionality in collaborative or document editing tools
- Database migrations — each migration has an `up()` and `down()` command
- CLI command dispatchers (e.g., `git commit`, `git reset` map to command objects)
- CQRS architecture — write operations are modeled as explicit command objects
- Transactional outbox pattern — storing commands before executing them for reliability

## Q. What is the Command pattern? How is it used in Node.js?

The Command pattern encapsulates a request as an object, allowing parameterization, queuing, logging, and undoable operations.

```js
class TextEditor {
  constructor() {
    this.content = '';
    this._history = [];
  }

  executeCommand(command) {
    command.execute(this);
    this._history.push(command);
  }

  undo() {
    const command = this._history.pop();
    if (command) command.undo(this);
  }
}

class InsertCommand {
  constructor(text) { this.text = text; }
  execute(editor) { editor.content += this.text; }
  undo(editor)    { editor.content = editor.content.slice(0, -this.text.length); }
}

class DeleteCommand {
  constructor(count) { this.count = count; this._deleted = ''; }
  execute(editor) {
    this._deleted = editor.content.slice(-this.count);
    editor.content = editor.content.slice(0, -this.count);
  }
  undo(editor) { editor.content += this._deleted; }
}

const editor = new TextEditor();
editor.executeCommand(new InsertCommand('Hello'));
editor.executeCommand(new InsertCommand(' World'));
console.log(editor.content); // Hello World

editor.executeCommand(new DeleteCommand(5));
console.log(editor.content); // Hello 

editor.undo();
console.log(editor.content); // Hello World
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. MODULE PATTERN

<br/>

**Common Use Cases:**
- Encapsulating business logic with private helper functions not exposed to consumers
- Building npm packages with a controlled, minimal public API surface
- Isolating feature modules in large monolithic applications
- Separating concerns: routes, controllers, services, repositories each in their own module
- Creating utility libraries (date helpers, validators) with hidden implementation details

## Q. What is the Module pattern in Node.js? How does it differ from ES Modules?

The Module pattern encapsulates related functionality and exposes only a public API, hiding internal details.

**CommonJS (Node.js default):**

```js
// counterModule.js
const counterModule = (() => {
  let _count = 0; // private

  return {
    increment() { _count++; },
    decrement() { _count--; },
    reset()     { _count = 0; },
    getCount()  { return _count; },
  };
})();

module.exports = counterModule;
```

**ES Modules (`.mjs` or `"type": "module"` in package.json):**

```js
// counter.mjs
let _count = 0; // module-scoped, not exported = private

export const increment = () => _count++;
export const decrement = () => _count--;
export const reset     = () => { _count = 0; };
export const getCount  = () => _count;
```

```js
// main.mjs
import { increment, getCount } from './counter.mjs';
increment();
increment();
console.log(getCount()); // 2
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Revealing Module pattern?

```js
// authModule.js
const authModule = (() => {
  const _users = new Map();

  function _hashPassword(password) {
    // simplified — use bcrypt in production
    return Buffer.from(password).toString('base64');
  }

  function register(username, password) {
    _users.set(username, _hashPassword(password));
    return true;
  }

  function login(username, password) {
    return _users.get(username) === _hashPassword(password);
  }

  // Reveal only public API
  return { register, login };
})();

module.exports = authModule;

authModule.register('alice', 'secret');
console.log(authModule.login('alice', 'secret')); // true
console.log(authModule.login('alice', 'wrong'));  // false
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. DEPENDENCY INJECTION PATTERN

<br/>

**Common Use Cases:**
- Injecting database adapters into service layers so real DBs can be swapped with in-memory fakes in tests
- Providing mock email/SMS services during unit and integration testing
- NestJS — the entire framework is built on constructor-based DI with an IoC container
- Configuring different logger implementations per environment (console in dev, remote in prod)
- Swapping caching backends (in-memory vs Redis) via an injected cache interface
- Multi-tenant apps where different tenants use different storage or payment providers

## Q. What is Dependency Injection (DI)? How is it implemented in Node.js?

DI is a technique where dependencies are provided to a class from outside rather than the class creating them itself. It promotes loose coupling and testability.

```js
// Without DI — tightly coupled
class OrderService {
  constructor() {
    this.db = require('./database'); // hard dependency
  }
}

// With DI — loosely coupled
class OrderService {
  constructor(db, emailService, logger) {
    this.db           = db;
    this.emailService = emailService;
    this.logger       = logger;
  }

  async createOrder(order) {
    const result = await this.db.save('orders', order);
    await this.emailService.send(order.userEmail, 'Order Confirmed', `Order #${result.id}`);
    this.logger.log(`Order created: ${result.id}`);
    return result;
  }
}

// Compose dependencies at the entry point (app.js)
const db           = require('./adapters/mongoAdapter');
const emailService = require('./services/emailService');
const logger       = require('./logger');

const orderService = new OrderService(db, emailService, logger);
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you build a simple DI container in Node.js?

```js
class Container {
  constructor() {
    this._registry = new Map();
  }

  register(name, factory) {
    this._registry.set(name, factory);
  }

  resolve(name) {
    const factory = this._registry.get(name);
    if (!factory) throw new Error(`Dependency not registered: ${name}`);
    return factory(this);
  }
}

// Register dependencies
const container = new Container();

container.register('logger', () => ({
  log: (msg) => console.log(`[LOG] ${msg}`),
}));

container.register('db', () => ({
  save: async (col, doc) => ({ ...doc, id: Date.now() }),
}));

container.register('orderService', (c) => {
  const db     = c.resolve('db');
  const logger = c.resolve('logger');
  return {
    async create(order) {
      const saved = await db.save('orders', order);
      logger.log(`Order ${saved.id} created`);
      return saved;
    },
  };
});

// Resolve and use
const orderService = container.resolve('orderService');
orderService.create({ item: 'Book', qty: 2 });
// [LOG] Order 1713340800000 created
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does DI improve unit testability in Node.js?

```js
// orderService.test.js (Jest)
const OrderService = require('./orderService');

test('createOrder saves to db and logs', async () => {
  const mockDb = {
    save: jest.fn().mockResolvedValue({ id: 42, item: 'Phone' }),
  };
  const mockEmail = {
    send: jest.fn().mockResolvedValue(true),
  };
  const mockLogger = {
    log: jest.fn(),
  };

  const service = new OrderService(mockDb, mockEmail, mockLogger);
  const result  = await service.createOrder({ item: 'Phone', userEmail: 'a@b.com' });

  expect(mockDb.save).toHaveBeenCalledWith('orders', expect.objectContaining({ item: 'Phone' }));
  expect(mockEmail.send).toHaveBeenCalledWith('a@b.com', 'Order Confirmed', expect.any(String));
  expect(mockLogger.log).toHaveBeenCalledWith(expect.stringContaining('42'));
  expect(result.id).toBe(42);
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 11. REPOSITORY PATTERN

<br/>

**Common Use Cases:**
- Abstracting database access so service/business logic has no direct dependency on ORM or query syntax
- Swapping data sources (MongoDB → PostgreSQL) without touching service code
- Providing in-memory fake repositories for fast, isolated unit tests
- Centralizing query logic (pagination, filtering, sorting) in one place
- Multi-tenant apps where each tenant may use a different storage backend

## Q. What is the Repository pattern in Node.js?

The Repository pattern abstracts the data layer, exposing a collection-like interface to the domain/service layer. Services call repository methods (`find`, `save`, `delete`) and never write raw queries.

```js
// repositories/userRepository.js
class UserRepository {
  constructor(db) {
    this.db = db; // injected DB adapter (Mongoose model, pg pool, etc.)
  }

  async findById(id) {
    return this.db.findOne({ _id: id });
  }

  async findByEmail(email) {
    return this.db.findOne({ email });
  }

  async save(user) {
    return this.db.create(user);
  }

  async update(id, data) {
    return this.db.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async delete(id) {
    return this.db.deleteOne({ _id: id });
  }
}

module.exports = UserRepository;
```

```js
// services/userService.js
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error(`User ${id} not found`);
    return user;
  }

  async registerUser(data) {
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing) throw new Error('Email already registered');
    return this.userRepository.save(data);
  }
}

module.exports = UserService;
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you write an in-memory repository for testing?

```js
// repositories/inMemoryUserRepository.js
class InMemoryUserRepository {
  constructor() {
    this._store = new Map();
    this._idSeq = 1;
  }

  async findById(id) {
    return this._store.get(id) || null;
  }

  async findByEmail(email) {
    for (const user of this._store.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async save(data) {
    const user = { ...data, id: this._idSeq++ };
    this._store.set(user.id, user);
    return user;
  }

  async update(id, data) {
    const user = { ...this._store.get(id), ...data };
    this._store.set(id, user);
    return user;
  }

  async delete(id) {
    this._store.delete(id);
  }
}

module.exports = InMemoryUserRepository;
```

```js
// userService.test.js
const UserService = require('./services/userService');
const InMemoryUserRepository = require('./repositories/inMemoryUserRepository');

test('registerUser saves a new user', async () => {
  const repo    = new InMemoryUserRepository();
  const service = new UserService(repo);

  const user = await service.registerUser({ name: 'Alice', email: 'alice@example.com' });
  expect(user.id).toBe(1);
  expect(user.email).toBe('alice@example.com');
});

test('registerUser throws if email already exists', async () => {
  const repo    = new InMemoryUserRepository();
  const service = new UserService(repo);

  await service.registerUser({ name: 'Alice', email: 'alice@example.com' });
  await expect(
    service.registerUser({ name: 'Alice2', email: 'alice@example.com' })
  ).rejects.toThrow('Email already registered');
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 12. DELEGATE PATTERN

<br/>

**Common Use Cases:**
- Composing behavior at runtime without deep inheritance chains
- Delegating I/O, logging, or notification tasks from a primary class to a helper
- Forwarding method calls in proxy/wrapper classes
- Implementing role-based behavior (an object delegates work based on the caller\'s role)
- Node.js `stream.pipeline` delegates data handling across multiple transform streams

## Q. What is the Delegate pattern in Node.js?

The Delegate pattern allows an object to hand off (delegate) responsibilities to a helper object instead of implementing them directly. It favors composition over inheritance.

```js
// delegates/emailDelegate.js
class EmailDelegate {
  send(to, subject, body) {
    console.log(`[Email] To: ${to} | Subject: ${subject} | Body: ${body}`);
  }
}

// delegates/smsDelegate.js
class SMSDelegate {
  send(to, message) {
    console.log(`[SMS] To: ${to} | Message: ${message}`);
  }
}

// NotificationService delegates to specific senders
class NotificationService {
  constructor(emailDelegate, smsDelegate) {
    this.emailDelegate = emailDelegate;
    this.smsDelegate   = smsDelegate;
  }

  notifyByEmail(user, subject, body) {
    this.emailDelegate.send(user.email, subject, body);
  }

  notifyBySMS(user, message) {
    this.smsDelegate.send(user.phone, message);
  }

  notifyAll(user, subject, body) {
    this.notifyByEmail(user, subject, body);
    this.notifyBySMS(user, body);
  }
}

const service = new NotificationService(new EmailDelegate(), new SMSDelegate());
service.notifyAll(
  { email: 'alice@example.com', phone: '+1234567890' },
  'Welcome',
  'Thanks for signing up!'
);
// [Email] To: alice@example.com | Subject: Welcome | Body: Thanks for signing up!
// [SMS] To: +1234567890 | Message: Thanks for signing up!
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the Delegate pattern differ from Inheritance?

| | Inheritance | Delegation |
|---|-------------|------------|
| Coupling | Tight — child depends on parent internals | Loose — delegate is swappable |
| Reuse | Vertical (extend a class) | Horizontal (compose any object) |
| Runtime flexibility | Fixed at class definition | Delegate can be replaced at runtime |
| Testing | Harder to isolate | Delegate can be mocked independently |

```js
// Inheritance approach — tightly coupled
class BaseLogger {
  log(msg) { console.log(`[BASE] ${msg}`); }
}

class AppService extends BaseLogger {
  doWork() {
    this.log('Working...'); // directly calls inherited method
  }
}

// Delegation approach — loosely coupled
class AppService {
  constructor(logger) {
    this.logger = logger; // any object with .log()
  }

  doWork() {
    this.logger.log('Working...');
  }
}

const service = new AppService({ log: (msg) => console.log(`[CUSTOM] ${msg}`) });
service.doWork(); // [CUSTOM] Working...
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 13. MEDIATOR PATTERN

<br/>

**Common Use Cases:**
- Chat room where users communicate via a central mediator, not directly with each other
- Air traffic control — planes communicate through the tower, not peer-to-peer
- Event bus / message broker decoupling microservices (similar to pub/sub but with routing logic)
- Form wizard where steps communicate through a central coordinator
- Express router acting as mediator between incoming requests and route handlers

## Q. What is the Mediator pattern in Node.js?

The Mediator pattern defines an object that encapsulates how a set of objects interact, promoting loose coupling by preventing objects from referring to each other explicitly.

```js
// chatMediator.js
class ChatMediator {
  constructor() {
    this._users = [];
  }

  register(user) {
    this._users.push(user);
    user.mediator = this;
  }

  send(message, sender) {
    this._users.forEach((user) => {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}

class ChatUser {
  constructor(name) {
    this.name     = name;
    this.mediator = null;
  }

  send(message) {
    console.log(`${this.name} sends: "${message}"`);
    this.mediator.send(message, this);
  }

  receive(message, from) {
    console.log(`${this.name} received from ${from}: "${message}"`);
  }
}

const mediator = new ChatMediator();

const alice = new ChatUser('Alice');
const bob   = new ChatUser('Bob');
const carol = new ChatUser('Carol');

mediator.register(alice);
mediator.register(bob);
mediator.register(carol);

alice.send('Hello everyone!');
// Alice sends: "Hello everyone!"
// Bob received from Alice: "Hello everyone!"
// Carol received from Alice: "Hello everyone!"
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement an event-based Mediator in Node.js?

```js
const EventEmitter = require('events');

class Mediator extends EventEmitter {
  constructor() {
    super();
    this._handlers = {};
  }

  subscribe(event, handler) {
    if (!this._handlers[event]) this._handlers[event] = [];
    this._handlers[event].push(handler);
    this.on(event, handler);
  }

  dispatch(event, data) {
    this.emit(event, data);
  }
}

// Components that communicate only through the mediator
class InventoryService {
  constructor(mediator) {
    mediator.subscribe('orderPlaced', ({ item, qty }) => {
      console.log(`[Inventory] Reducing stock: ${qty}x ${item}`);
      mediator.dispatch('stockUpdated', { item, remaining: 10 - qty });
    });
  }
}

class ShippingService {
  constructor(mediator) {
    mediator.subscribe('orderPlaced', ({ orderId, address }) => {
      console.log(`[Shipping] Scheduling delivery for order ${orderId} to ${address}`);
    });
    mediator.subscribe('stockUpdated', ({ item, remaining }) => {
      console.log(`[Shipping] Stock update received: ${item} has ${remaining} left`);
    });
  }
}

const mediator = new Mediator();
new InventoryService(mediator);
new ShippingService(mediator);

mediator.dispatch('orderPlaced', { orderId: 1, item: 'Laptop', qty: 2, address: '123 Main St' });
// [Inventory] Reducing stock: 2x Laptop
// [Shipping] Scheduling delivery for order 1 to 123 Main St
// [Shipping] Stock update received: Laptop has 8 left
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
