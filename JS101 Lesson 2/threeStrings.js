let str = 'mbabab' 
let count = 0;

//console.log(str.lastIndexOf('b'));

function threeCheck(letter) {
    let newArray = Array.from(str);
    newArray.forEach(ele => {
        if (ele === letter) {
            count += 1;
        }
    })

    if (count === 3) {
        console.log(str.lastIndexOf(letter));
    } else {
        console.log('The letter ' + '' +  letter + '' + ' doesn\'t repeat thrice');
    }
    return count;
}

console.log(threeCheck('b'));