const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the first number:\n');
let number1 = Number(readline.prompt());

prompt('Enter the second number:\n');
let number2 = Number(readline.prompt());

// handling edge case of n2 = 0
if (number2 === 0) {
  prompt('Number should be greater than zero.');
  prompt('Enter the second number again:');
  number2 = Number(readline.prompt());
}

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${Math.pow(number1, number2)}`);