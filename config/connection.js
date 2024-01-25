const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "ec2-3-232-218-211.compute-1.amazonaws.com",
    dialect: "mysql",
    port: 5432,
  }
);

module.exports = sequelize;
