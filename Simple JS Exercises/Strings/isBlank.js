function isBlank(str) {
  if (str) {
    return false;
  }
  return true;
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true