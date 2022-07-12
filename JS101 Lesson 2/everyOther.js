function everyOther(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i += 1) {
        if (i % 2 === 0) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(everyOther([1, 4, 7, 2, 5]));