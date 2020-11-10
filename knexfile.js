require('dotenv').config();

const config = {
    client: "pg",
    migrations: {
        directory: "./server/migrations"
    },
    seeds: {
        directory: "./server/seeds"
    },
};

module.exports = {
    development: {
        ...config,
        connection: {
            connectionString: `postgres://${process.env.DB_USER}@localhost:5432/boopcamp`,
        }
    },

    production: {
        ...config,
        connection: {
            connectionString: process.env.DB_URL,
            ssl: { rejectUnauthorized: false },
          },
    }
}