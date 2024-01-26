const Sequelize = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const rdsCa = fs.readFileSync(__dirname + "/rds-combined-ca-bundle.pem");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "wordgamedb.ca2rma9t9xos.us-west-1.rds.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
        ca: [rdsCa],
      },
    },
  }
);

module.exports = sequelize;
