var mysql = require("mysql");
const env = require("dotenv").config({path: '.env'});

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: `${process.env.SQLPW}`,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
