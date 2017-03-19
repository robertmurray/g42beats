
exports.up = function(knex, Promise) {
  return knex.schema.createTable('g42', (table) => {
    table.increments('id').primary();
    table.integer('group_id').references('id').inTable('groups').notNullable().onDelete('cascade');
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('cascade');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('g42');
};
