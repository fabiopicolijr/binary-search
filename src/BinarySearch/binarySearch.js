module.exports = {
  search: function(list, item){
    let lower = 0;
    let higher = (list.length - 1);
    let middle;
    let guess;

    while(lower <= higher){
      middle = Math.floor((higher + lower) / 2)
      guess = list[middle];

      if (guess === item){
        return middle;
      }

      if(guess > item){
        higher = middle - 1;
      } else {
        lower = middle + 1;
      }
    }    

    return 'None';
  }
}

