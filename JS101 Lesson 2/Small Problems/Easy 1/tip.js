const readline = require('readline-sync');

const prompt = msg => console.log(`=> ${msg}`);

prompt('What is the bill?');
let bill = parseFloat(readline.prompt());
prompt('What is the tip percentage?');
let tip = parseFloat(readline.prompt());

tip = (tip * bill) / 100;

let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);