import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("test", (table) => {
    table.string("name").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("test");
}
