const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);

app.use('/', function(req, res, next) {
	res.send('hello');
});

server.listen(3000, (err) => {
  if (err) { console.log(err) };

  console.log("Server listening on port 3000");
});
