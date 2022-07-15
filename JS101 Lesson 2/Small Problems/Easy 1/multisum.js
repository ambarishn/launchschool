function multisum(number) {
  let sum = 0;
  for (let iterator = 1; iterator <= number; iterator += 1) {
    if (iterator % 3 === 0 || iterator % 5 === 0) {
      sum += iterator;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168