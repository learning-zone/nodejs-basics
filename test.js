var event = require('events');  
var eventEmitter = new event.EventEmitter();  
  
//  Add listener function for Sum event  
eventEmitter.on('Sum', function(num1, num2) {  
    console.log('Total: ' + (Number(num1) + Number(num2)));  
});  
 
//  Call or fire both event.  
eventEmitter.emit('Sum', '10', '20');