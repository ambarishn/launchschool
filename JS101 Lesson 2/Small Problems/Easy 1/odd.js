let readLine = require('readline-sync');

/* for (let number = 1; number < 100; number += 2) {
  console.log(number);
} */

let num = 1;
let limit = readLine.question('What is the number limit?\n');

while (num < limit) {
  console.log(num);
  num += 2;
}