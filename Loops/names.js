let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
//let index = 0;

/*while (index < names.length) {
    upperNames.push(names[index].toUpperCase());
    index += 1;
}*/

for (let index = 0; index < names.length; index += 1) {
    if (names[index] === 'Pete' || names[index] === 'Victor') break;
    let upperCase = names[index].toUpperCase();
    upperNames.push(upperCase);
}

console.log(upperNames);