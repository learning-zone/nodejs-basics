# Node.js Coding Practice

<br/>

## Q. What will happen when that code will be executed?

```js
var EventEmitter = require("events");

var eventObj = new EventEmitter();

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
...
...
...
Event1 fired!
Event2 fired!
Event3 fired!
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
async function getData() {
  const a = await functionA().catch((error) => console.log(error));
  const b = await functionB().catch((error) => console.log(error));
  if (a && b) {
    console.log("some result");
  }
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
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
