function isNotANumber(arg) {
    if (arg !== arg) {
        return true;
    } else {
        return false;
    }
}

console.log(isNotANumber(NaN));