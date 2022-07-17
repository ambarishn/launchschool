function stringToSignedInteger(str) {
  if (str.charAt(0) === '-') {
    str = str.substring(1, str.length);
    str = stringToInteger(str);
    str = -str;
    return str;
  } else if (str.charAt(0) === '+') {
    str = str.substring(1, str.length);
    str = stringToInteger(str);
    return str;
  } else {
    str = stringToInteger(str);
    return str;
  }
}

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let array = str.split('').map(char => DIGITS[char]);
  let value = 0;
  array.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

console.log(stringToSignedInteger("2090")); // logs true