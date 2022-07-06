let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaboraten',
    'polar bear',
  ];

  function allMatches(arr, regex) {
    return arr.filter(ele => {
        if (ele.match(regex)) {
            return ele;
        }
    })
  }
  
  console.log(allMatches(words, /en/)); // => ['laboratory', 'flab', 'elaborate']