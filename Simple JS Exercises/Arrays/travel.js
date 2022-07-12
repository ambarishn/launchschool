let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, arr) {
    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] === city) {
            return true;
        } 
    }
    return false;
}


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false