const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
    	console.log("file",file);
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});

const upload = multer({ storage: storage });

app.use('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'my-header,X-Requested-With,content-type,Authorization,cache-control');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.post('/dropzone', upload.single('file'), function(req, res) {
	console.log(req);
});

server.listen(3000, (err) => {
  if (err) { console.log(err) };

  console.log("Server listening on port 3000");
});
