let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(newArr) {
   let newVal = newArr.reduce((acc, ele) => {
        if (ele.length % 2 === 1) {
            acc.push(ele.length);
        }
        return acc;
    }, []);
    return newVal;
}




console.log(oddLengths(arr)); // => [1, 5, 3]