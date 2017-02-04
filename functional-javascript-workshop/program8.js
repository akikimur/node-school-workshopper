function duckCount() {
  // console.log(arguments);
  let arr =  Array.prototype.slice.call(arguments);
  let result = arr.filter(function(object){
    return Object.prototype.hasOwnProperty.call(object,'quack');
  });
  return result.length;
}

module.exports = duckCount;



//ここからは模範解答
// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }
//
// module.exports = duckCount
