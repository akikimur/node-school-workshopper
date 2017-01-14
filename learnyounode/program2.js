var total = 0;
var argv = process.argv;
for (var i = 2; i < argv.length; i++){
total = total + Number(process.argv[i]);
}
console.log(total);
