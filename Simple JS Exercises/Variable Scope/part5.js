function myFunction() {
  var a = 1;

  if (true) {
    console.log(a);
    var a = 2;
    console.log(a);
  }
}

myFunction();