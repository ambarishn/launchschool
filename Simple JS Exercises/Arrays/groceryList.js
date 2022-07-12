let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
//let i = 0

while (groceryList.length > 0) {
    console.log(groceryList.shift());
}

/* 
while (i < groceryList.length) {
    console.log(groceryList[i]);
    i += 1;
}

for (let j = 0; j <= groceryList.length;) {
    if (groceryList.length === 0) {
        break;
    }
    groceryList.shift();
}
 */// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []