function crunch(str) {
  let dedupedWord = '';
  let index = 0;
  while (index <= str.length - 1) {
    if (str[index] !== str[index + 1]) {
      dedupedWord += str[index];
    }
    index += 1;
  }
  return dedupedWord;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""