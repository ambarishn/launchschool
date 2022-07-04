let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(newArr) {
    let lenArr = newArr.map(ele => ele.length);
    console.log(lenArr);
    let oddLen = lenArr.filter(function(num) {
        if (num % 2 === 1) {
            return num;
        }
    });
    return oddLen;
}




console.log(oddLengths(arr)); // => [1, 5, 3]

