function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (year % 400 === 0)  {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
console.log(isLeapYear(240001));    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
console.log(isLeapYear(1752));      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
console.log(isLeapYear(100));       // true
isLeapYear(400);       // true