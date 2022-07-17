/* function oddities(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 2) {
    newArr.push(arr[index]);
  }
  return newArr;
} */

function evens(arr) {
  let evenArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx % 2 === 1) {
      evenArr.push(arr[idx]);
    }
  }
  return evenArr;
}

/* console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs [] */

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []