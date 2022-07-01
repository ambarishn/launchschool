let rlSync = require('readline-sync');
const add = (a, b) => a + b;
const getNumber = (text) => {
    let input = rlSync.question(text);
    return Number(input);
};

let num1 = getNumber("Enter a Number: ");
let num2 = getNumber("Enter another Number: ");
let result = add (num1, num2);

console.log(result);