require('./mymodule.js')(process.argv[2], process.argv[3], function (err, result) {
  if (err) console.error(err);
  for (let file of result) console.log(file);
});
