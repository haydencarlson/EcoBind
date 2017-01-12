
exports.up = function(knex, Promise) {
	return knex.schema.createTable('subNavTabs', function(table) {
    table.increments();
    table.string('tabName');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('subNavTabs');	
};
