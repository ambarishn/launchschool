function evenOrOdd(num) {
    if (Number.isInteger(num)) {
        return num % 2 === 0 ? console.log('even') : console.log('odd');
    } else {
        console.log("Please enter a valid integer as argument");
    }
    
}

evenOrOdd(4);
evenOrOdd(5);
evenOrOdd('abc');