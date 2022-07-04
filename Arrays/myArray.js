/* let myArray = [1, 3, 6, 11, 4, 2,
    4, 9, 17, 16, 0];

console.log(myArray.filter(ele => ele % 2 === 0));
 */

let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

  /* for (let i = 0; i < myArray.length; i += 1) {
    for (let j = 0; j < myArray[i].length; j += 1) {
        if (myArray[i][j] % 2 === 0) {
            console.log(myArray[i][j]);
        }
    }
  } */

  myArray.forEach(ele => {
    ele.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    })
  })