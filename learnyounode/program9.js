var bl = require('bl');
result = [];
count = 0;

function httpReq(i) {
  require('http').get(process.argv[2 + i], function (res) {
      res.pipe(bl(function (err, data) {
          if (err) console.error(err);
          result[i] = data.toString();
          ++count;

          if (count == 3){
            result.forEach(function (results){
              console.log(results);
            })
          }
      }))
  })
}

for (i = 0; i < 3; i++){
  httpReq(i)
}
