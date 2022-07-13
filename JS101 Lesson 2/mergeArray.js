let evenArr = [1, 2, 3];
let oddArr = ['a', 'b', 'c'];

let newArr = [];

for (let index = 0; index < evenArr.length; index += 1) {

  newArr.push(evenArr[index]);
  newArr.push(oddArr[index]);

}

console.log(newArr);