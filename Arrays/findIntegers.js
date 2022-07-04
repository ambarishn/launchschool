let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
   let fArr =  arr.filter(ele => {
        if (Number.isInteger(ele)) {
            return ele;
        }
    })
    return fArr;
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 