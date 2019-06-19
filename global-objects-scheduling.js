/**
 *   Progress indicator using setInterval() & setTimeout()
 * 
 */


var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

function writeWaitingPercentage(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercentage(percentWaited);
}, waitInterval);

setTimeout(function() {
  clearInterval(interval);
  writeWaitingPercentage(100);
  console.log('\n\ndone !!!');
}, waitTime);

process.stdout.write('\n');
writeWaitingPercentage(percentWaited);
