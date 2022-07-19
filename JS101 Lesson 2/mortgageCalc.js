const readline = require('readline-sync');

const APR = 0.05; // annual percentage rate fixed by the Bank.

function prompt(message) {
  console.log(`=> ${message}`);
}

console.log('***Welcome to my Mortgage Calculator***');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

while (true) {

  prompt("Enter the loan amount:\n");
  let lAmount = Number(readline.prompt());

  while (lAmount <= 0 || Number.isNaN(lAmount) === true) {
    prompt('Please enter any amount above $0');
    lAmount = Number(readline.prompt());
  }

  prompt("Enter the loan term in years:\n");
  let numMonth = Number(readline.prompt()) * 12;

  while (numMonth <= 0 || Number.isNaN(numMonth) === true) {
    prompt('Please enter a valid duration. Minimum tenure is 1 year');
    numMonth = Number(readline.prompt()) * 12;
  }

  let mInt = APR / 12;

  let monthlyPayment = lAmount *
                (mInt / (1 - Math.pow((1 + mInt), (-numMonth))));

  monthlyPayment = monthlyPayment.toFixed(2);

  console.log(`The monthly payment for the next ${numMonth} months is $${monthlyPayment}.`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}