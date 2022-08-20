// Example: stdout()
process.stdout.write('Hello World\n');


// Example: 02
let answers = [];
let questions = [
  'What is your name?',
  'What is your fav hobby?',
  'What is your preferred programming language?'
];

function ask(i) {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(' > ');
}

process.stdin.on('data', function(data) {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

ask(0); //function call
process.on('exit', function() {
  process.stdout.write('\n\n');
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
  process.stdout.write('\n\n');
});