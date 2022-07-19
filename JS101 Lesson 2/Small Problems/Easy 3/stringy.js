function stringy(num) {
  let arr = [];
  for (let idx = 0; idx < num; idx += 1) {
    if (idx % 2 === 0) {
      arr.push(1);
    } else if (idx % 2 === 1) {
      arr.push(0);
    }
  }
  return arr.join('').toString();
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"