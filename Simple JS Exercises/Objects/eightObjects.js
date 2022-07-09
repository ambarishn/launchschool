let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

  //console.log(Object.entries(person));

  let nestedArray = [];

  for (let prop in person) {
    nestedArray.push([prop, person[prop]]);

  }

  console.log(nestedArray);