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

module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
  });
};