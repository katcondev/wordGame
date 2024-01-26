const Sequelize = require("sequelize");
require("dotenv").config();
const fs = require("fs");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "wordgamedb.ca2rma9t9xos.us-west-1.rds.amazonaws.com",
    dialect: "postgres",
    port: 5432,
  }
);

module.exports = sequelize;
