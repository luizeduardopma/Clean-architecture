import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("users", (table) => {
    table.uuid("id").unique();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").unique().notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("users");
}
