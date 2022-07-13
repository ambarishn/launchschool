let string = 'launch school tech & talk';

let arr = string.split(' ');

console.log(arr);

let newArr = arr.map(ele => ele[0].toUpperCase() + ele.slice(1, ele.length));

console.log(newArr.join(' '));