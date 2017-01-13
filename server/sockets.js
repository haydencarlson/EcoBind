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
  	const emitAction = (type, payload) => socket.emit('action', { type, payload });
		const broadcastAction = (type, payload) => io.emit('action', { type, payload });
    console.log(`Socket connected: ${socket.id}`);

    socket.on('action', (action) => {
      switch (action.type) {
        case 'socket/TYPE_NEW_TAB':
        	knex('mainNavTabs')
        		.insert({tabName: action.payload})
        		.then((result) => {
        			knex.select("tabName")
        				.from("mainNavTabs")
        				.then((result) => {
        					emitAction('TYPE_GET_TABS', result);
        				});
        		});
        break;

        case 'socket/TYPE_NEW_SUB_TAB':
        	knex('subNavTabs')
        		.insert({tabName: action.payload})
        		.then((result) => {
        			knex.select("tabName")
        				.from("subNavTabs")
        				.then((result) => {
        					emitAction('TYPE_GET_SUB_TABS', result);
        				});
        		});
        break;

        case 'socket/TYPE_GET_TABS':
        	knex.select("tabName")
        		.from("mainNavTabs")
        		.then((result) => {
        			emitAction('TYPE_GET_TABS', result);
        		});
        break;

        case 'socket/TYPE_GET_SUB_TABS':
        	knex.select("tabName")
        		.from("subNavTabs")
        		.then((result) => {
        			emitAction('TYPE_GET_SUB_TABS', result);
        		});
        break;
      }
    });
  });
};