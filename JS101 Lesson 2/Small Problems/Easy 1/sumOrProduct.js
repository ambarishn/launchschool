let readline = require('readline-sync');

let num = readline.question('Please enter an integer greater than 0:\n');

let choice = readline.question(`Enter 's' to compute the sum, or 'p' to compute the product.\n`);

if (choice === 's') {
  console.log(sum(num));
}

if (choice === 'p') {
  console.log(product(num));
}

function sum(number) {
  let val = 0;
  for (let iterator = 1; iterator <= number; iterator += 1) {
    val += iterator;
  }
  return `The sum of the integers between 1 and ${number} is ${val}.`;
}

function product(number) {
  let prod = 1;
  for (let iterator = 1; iterator <= number; iterator += 1) {
    prod *= iterator;
  }
  return `The product of the integers between 1 and ${number} is ${prod}.`;
}
