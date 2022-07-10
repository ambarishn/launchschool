const catAge = function(hYears) {
    if (hYears === 1) {
        return 15;
    } else if (hYears === 2) {
        return 24;
    } else if (hYears > 2) {
        return catAge(hYears - 1) + 4;
    } else {
        return 0;
    }
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(41));