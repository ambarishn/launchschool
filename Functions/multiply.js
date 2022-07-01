
function multiply() {
    let rlSync = require('readline-sync');
    let firstNum = rlSync.question("Enter the first number: \n");
    let secNum = rlSync.question("Enter the second number: \n");
    return ` ${firstNum} * ${secNum} = ${firstNum * secNum}`;

}

let result = multiply();
console.log(result);
