function repeat(operation, num) {
  for(var i = 0; i < num -1; i++){
    operation();
  }
}

// Do not remove the line below
module.exports = repeat
