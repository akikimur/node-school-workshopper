var fs = require('fs')
fs.readFile(process.argv[2],"utf8",function(err, result){
    var lineArray = result.split("\n")
    console.log(Number(lineArray.length) -1);
});
