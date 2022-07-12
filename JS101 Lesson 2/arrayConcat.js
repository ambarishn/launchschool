function arrayConcat(arr) {
    let i = 0;
    let result = '';
    while (i < arr.length) {
        result = result + arr[i]
        i += 1;
    }
    return result;
}

console.log(arrayConcat(['Pa', 'Pa', 'Ma', 'Ma']));