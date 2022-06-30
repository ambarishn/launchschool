let firstName = 'Victor';
console.log(`Good Morning, ${firstName}`);
console.log(`Good Afternoon, ${firstName}`);
console.log(`Good Evening, ${firstName}`);

// dynamic greeter
let rlSync = require('readline-sync');
let fname = rlSync.question("What is your first name? \n");
let lname = rlSync.question("What is your last name? \n");
console.log(`Hello, ${fname} ${lname}!`);