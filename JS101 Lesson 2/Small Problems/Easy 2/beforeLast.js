function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));