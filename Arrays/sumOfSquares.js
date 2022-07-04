let array = [3, 5, 7];

function sumOfSquares(newArr) {
    let value = newArr.reduce((acc, ele) => {
        return acc + (ele * ele);
    }, 0);
    return value;
}

console.log(sumOfSquares(array)); // => 83