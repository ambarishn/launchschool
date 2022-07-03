function factorial(number) {
    if (number < 2) return 1;

    return number * factorial(number - 1);
}

console.log(factorial(5));

function forFactorial(num) {
    let result = 1;
    for (let counter = num; counter > 0; counter -= 1) {
        result = result * counter;
    }
    return result;
}

console.log(forFactorial(6));