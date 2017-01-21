function reduce(arr, fn, initial) {
  function reduceRecursion(index, value){
    if(index > arr.length - 1) {
      return value;
    } else {
      return reduceRecursion(index + 1, fn(value, arr[index], index, arr));
    }
  }
  return reduceRecursion(0, initial);
}

module.exports = reduce
