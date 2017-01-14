var date = new Date();

var server = require('net').createServer(function (socket) {
  var date = new Date();
  var now  = date.getFullYear();
  socket.end(now);
})
server.listen(process.argv[2]);
