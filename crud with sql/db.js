const { Sequelize } = require("sequelize");

const db = new Sequelize("node", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = db;
