// Ask User for the first number.
// Ask User for the second number.
// Ask User for the type of operation (Add, Subtract, Multiply or Divide)
// Based on User input, perform the selected operation on the two numbers
// Print or return the final result to the User.
const readline = require('readline-sync');


//Welcome User
console.log('Welcome to Calculator!');

// Ask User for the first number.
console.log('What is the first number?');

let number1 = readline.question();

//console.log(number1);

//Ask User for the second number.
console.log('What is the second number?');
let number2 = readline.question();
console.log(`The two numbers are: ${number1}, ${number2}`);

// Ask User for the type of operation
console.log('What operation do you want to perform.\nType 1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide');
let operation = readline.question();

// Based on User input, perform the selected operation on the two numbers
let output;
if (operation === '1') {
    output = Number(number1) + Number(number2);
} else if (operation === '2') {
    output = Number(number1) - Number(number2);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
}


console.log(`The result is ${output}`);