function repeat(num, string) {
  let repetition = '';

  while (num > 0) {
    repetition += string;
    num -= 1;
  }
  return repetition;
}

console.log(repeat(3, 'ha')); // 'hahaha'