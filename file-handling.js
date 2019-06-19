const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite food? ', answer => {
  console.log(`Oh!, so your favorite food is ${answer}`);
  rl.close();
});
