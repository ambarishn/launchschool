function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
  }

  console.log(doSomething("Amba")); // => [ 9, 2, 7 ]
