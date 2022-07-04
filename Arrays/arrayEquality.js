function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

   /* let nestArr = arr1.filter(function (ele) {
    if (Array.isArray(ele)) {
        return ele;
    }
   });
   //console.log(nestArr);
   let nestArr2 = arr2.filter(ele => {
    if (Array.isArray(ele)) {
        return ele;
    }
   });
   arraysEqual(nestArr, nestArr2); */
   //console.log(nestArr2);
/* 
   for (let i = 0; i < arr1.length; i += 1) {
    if (Array.isArray(i)){

        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
   } */

    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]));
