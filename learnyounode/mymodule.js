var fs = require('fs')
var path = require('path')
var result = [];

function checkfile(folder, ext, callback){
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);
    // files = files.filter(file => path.extname(file) === '.' + ext);
    files.forEach(function (file) {
      if (path.extname(file) === '.' + ext) {
        result.push(file);
      }
    });
    callback(null, files);
  })
}
module.exports = checkfile;
