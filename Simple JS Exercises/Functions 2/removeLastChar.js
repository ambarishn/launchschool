function removeLastChar(string) {
   let newString = string.split('', string.length-1).join('');
    return newString;
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
console.log(removeLastChar('Launch Schools')); // 'Launch School'