require('dotenv').config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            connectionString: `postgres://${process.env.DB_USER}@localhost:5432/boopcamp`,
        }
    },

    production: {
        client: "pg",
        connection: {
            connectionString: process.env.DB_URL,
            ssl: { rejectUnauthorized: false },
          },
    }
}