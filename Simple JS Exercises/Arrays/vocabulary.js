let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];
  
  // Expected output:
  // happy
  // cheerful
  // merry
  // etc...

  /* for (let i = 0; i < vocabulary.length; i += 1) {
    for (let j = 0; j < vocabulary[i].length; j += 1) {
        console.log(vocabulary[i][j]);
    }
  } */

  vocabulary.forEach(subArr => subArr.forEach(ele => console.log(ele)));