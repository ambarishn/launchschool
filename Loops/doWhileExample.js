let rlSync = require('readline-sync');
let answer;
do {
answer = rlSync.question('Do you want to repeat it? Type y if yes. \n');
} while (answer === 'y');

console.log('The do while loop ended because you didn\'t type y. Thanks for your time.');