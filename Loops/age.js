/* let age = 20;
console.log('You are ' + age + ' years old');
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old`);
console.log(`In 30 years, you will be ${age + 30} years old`);
console.log(`In 40 years, you will be ${age + 40} years old`);
 */
// modified with user input

let rlSync = require('readline-sync');
let newAge = Number(rlSync.question('What is your age? \n'));
/* console.log(`In 10 years, you will be ${newAge + 10} years old`);
console.log(`In 20 years, you will be ${newAge + 20} years old`);
console.log(`In 30 years, you will be ${newAge + 30} years old`);
console.log(`In 40 years, you will be ${newAge + 40} years old`);
 */
for (let i = 10; i <= 40; i += 10) {
    console.log(`In ${i} years, you will be ${newAge + i} years old`);
}