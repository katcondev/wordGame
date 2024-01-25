const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "ec2-3-232-218-211.compute-1.amazonaws.com",
    dialect: "postgres", // Change the dialect to "postgres" for PostgreSQL
    port: 5432, // Default PostgreSQL port
    dialectOptions: {
      ssl: { rejectUnauthorized: false }, // Enable SSL for Heroku PostgreSQL
    },
  }
);

module.exports = sequelize;
