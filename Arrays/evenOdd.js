let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

 /* let strArray =  myArray.map(ele => {
    if (ele % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
  }); */

  //console.log(strArray);
  let newArray = [];

  for (let i =0; i < myArray.length; i += 1) {
    if (myArray[i] % 2 === 0) {
        newArray.push('even');
    } else {
        newArray.push('odd');
    }
  }

  console.log(newArray);