function stringChange(str) {
    if (str.length > 10) {
        return str.toUpperCase();
    } else {
        return str;
    }
}

console.log(stringChange('hello world'));
console.log(stringChange('bravo!'));