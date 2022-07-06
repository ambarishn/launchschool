function negativeZero(arg) {
    if (1/arg === -Infinity) {
        return true;
    } else {
        return false;
    }
}

console.log(negativeZero(-0));
console.log(negativeZero(0));