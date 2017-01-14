// 出題： 以下の任意の文字列を使って任意の長さのランダム文字列を生成するプログラムをfor, while文を使わない形にリファクタリングせよ
// var random = '';
//
// for (var i = 0; i < process.argv[3]; i++) {
//   random += process.argv[2][Math.floor(Math.random() * stringLength)];
// }

// process.argv.map(function(current,index,array){
//   if(index == 2){
//
//   }
// });
//
//
// console.log(random);

//正解
const stringLength = process.argv[2].length;

console.log(
  Array(stringLength).fill(0).map(function (item) {
    return process.argv[2][Math.floor(Math.random() * stringLength)]
  }).join('')
);
