let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

nestedArray.map(function(element) {
    obj[element[0]] = element[1]; 
})

console.log(obj);

console.log(Object.fromEntries(nestedArray));