// Example: The EventEmitter class is defined and exposed by the events module
const EventEmitter = require('events'); 
const util = require('util');

class Event extends EventEmitter {}

const eventObject = new Event();
eventObject.on('event', () => {
  console.log('An event occurred!');
});
eventObject.emit('event');


// Example: Asynchronous vs. Synchronous
const eventObject2 = new Event();
eventObject2.on('event', () => {
  setImmediate(() => {     // Used for Asynchronous function call
    console.log('Asynchronous function call !');
  });
});
eventObject2.emit('event');


// Example: Error Events
//const eventObject3 = new Event();
//eventObject3.emit('error', new Error('whoops! An error occurred.'));


// Example: Inherits
class Person {
    constructor(name) {
        this.name = name;
    }
}

util.inherits(Person, EventEmitter);
var personObject = new Person('Vanesa Doss');

personObject.on('speak', function(said) {
  console.log(`${this.name} says: ${said}`);
});
personObject.emit('speak', 'How are you?');