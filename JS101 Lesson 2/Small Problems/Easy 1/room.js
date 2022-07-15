const readLine = require('readline-sync');

let length = readLine.question('Enter the length of the room in meters:\n');
let width = readLine.question('Enter the width of the room in meters:\n');

//length = parseInt(length, 2);
//width = parseInt(width, 2);

console.log(`The area of the room is ${length * width} square meters (${length * width * 10.7639} square feet).`);
