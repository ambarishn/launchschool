const readline = require('readline-sync');

console.log('Another calculation? y/n');

let answer = readline.question();
while (answer[0].toLowerCase() !== 'n' && answer[0].toLowerCase() !== 'y') {
  console.log('Please type \'y\' or \'n\'');
  answer = readline.question().toLowerCase();
}

