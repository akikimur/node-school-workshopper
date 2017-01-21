function countWords(inputWords) {
  var result = {};
  inputWords.reduce(function(previousValue, currentValue,index,array){
    if(Object.keys(result).indexOf(currentValue) != -1){
      result[currentValue] = result[currentValue] + 1;
    } else {
      result[currentValue] = 1;
    }
  }, {});

  return result;
}

module.exports = countWords
