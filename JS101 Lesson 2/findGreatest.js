function findGreatest(numbers) {
    let savedNumber = numbers[0];
    numbers.forEach(currentNum => {
        if (currentNum > savedNumber) {
            savedNumber = currentNum;
        }
    })
    return savedNumber;
}

console.log(findGreatest([44331, 12, 23, 32, 14, 56, 54, 67, 677, 23, 4567]));