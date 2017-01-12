
exports.up = function(knex, Promise) {
	return knex.schema.createTable('mainNavSubNav_Tabs', function(table) {
    table.increments();
    table.integer('mainNavTab_id').unsigned();
    table.foreign('mainNavTab_id').references('subNavTabs.id')
    table.integer('subNavTab_id').unsigned();
    table.foreign('subNavTab_id').references('mainNavTabs.id');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('mainNavSubNav_Tabs');	
};
