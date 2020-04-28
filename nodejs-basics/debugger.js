/**
 * Debugger Module
 * 
 * Node.js includes an out-of-process debugging utility accessible via a V8 Inspector 
 * and built-in debugging client. 
 * 
 * To use it, start Node.js with the inspect argument followed by the path to the script 
 * to debug; a prompt will be displayed indicating successful launch of the debugger:
 * 
 */

global.x = 5;
setTimeout(() => {
  debugger;
  console.log('World');
}, 1000);
console.log('Hello');

/**
 * $ node inspect debugger.js
 * $ node --inspect=127.0.0.1:9230 debugger.js
 */