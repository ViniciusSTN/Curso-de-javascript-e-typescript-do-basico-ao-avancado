/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Up é para quando realizar a migração subir esses dados
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('first_name', 150).notNullable();
    table.string('last_name', 150);
    table.string('email', 255).notNullable().unique();
    table.string('password_hash', 255).notNullable().unique();
    table.decimal('salary', 15, 2).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// usado para reverter. Nesse caso fazer o drop da tabela
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
