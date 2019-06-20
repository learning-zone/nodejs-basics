const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your favorite food? ', answer => {
  console.log(`\nOh!, so your favorite food is ${answer}`);
  rl.close();
});
