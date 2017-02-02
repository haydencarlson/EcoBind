const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const path = require('path');
const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host : 'localhost',
    user : 'hayden',
    password : 'a',
    database : 'ecobind',
    port: 5432,
    ssl: true
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
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
	var docName = (req.body.fileName);
  console.log("docname", docName);
  const docUrl = ("http://localhost:3000/" + req.file.path);
	res.send(docUrl);
	knex('documents')
	.insert({documentUrl: docUrl, title: docName, subNavTabs_id: req.body.subTabId})
	.then((result) => {
		console.log("result", result);
	});
});

app.get('/public/:docID', function(req, res, next){
  res.sendFile(path.join(__dirname, `/public/${req.params.docID}`));
});

server.listen(3000, (err) => {
  if (err) { console.log(err) };

  console.log("Server listening on port 3000");
});
