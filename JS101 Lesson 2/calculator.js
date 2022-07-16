// Ask User for the first number.
// Ask User for the second number.
// Ask User for the type of operation (Add, Subtract, Multiply or Divide)
// Based on User input, perform the selected operation on the two numbers
// Print or return the final result to the User.
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//Welcome User
prompt('Welcome to Calculator!');

while (true) {

  // Ask User for the first number.
  prompt('What is the first number?');

  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm..that doesn't look like a valid number");
    number1 = readline.question();
  }

  //console.log(number1);

  //Ask User for the second number.
  prompt('What is the second number?');
  let number2 = readline.question();
  console.log(`The two numbers are: ${number1}, ${number2}`);

  while (invalidNumber(number2)) {
    prompt("Hmm..that doesn't look like a valid number.");
    number2 = readline.question();
  }

  // Ask User for the type of operation
  prompt('What operation do you want to perform.\nType 1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  // Based on User input, perform the selected operation on the two numbers
  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  console.log(`The result is ${output}`);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}