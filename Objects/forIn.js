let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
}

/* for (let prop in person) {
    console.log(person[prop]);
} */

let newPerson = Object.create(person);
newPerson.city = 'New York';
newPerson.country = 'USA';

/* for (let prop in newPerson) {
    console.log(newPerson[prop]);
} */

for (let prop in newPerson) {
    if (newPerson.hasOwnProperty(prop)) {
        console.log(newPerson[prop])
    }
}

let value = Object.keys(newPerson);
value.forEach(key => console.log(key.toUpperCase()));


