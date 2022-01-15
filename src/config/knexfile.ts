const knexConfig = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: process.env.DB_PASS,
      database: "cleannodebackend",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "../shared/infra/database/migrations",
    },
  },
};

export default knexConfig;
