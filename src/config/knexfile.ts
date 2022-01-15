const knexConfig = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "123456",
      database: "cleannodebackend",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "../shared/infra/database/migrations",
    },
  },
};

export default knexConfig;
