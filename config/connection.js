// require mysql and dotenv
var mysql = require("mysql");
var env = require("dotenv").config({path: '../.env'});

// create connection variable for mysql
var connection;

// if being accessed online heroku will connect to the JawsDB mysql database, else if local will connect to local machine
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: `${process.env.LOCALPASSWORD}`,
    database: "burgers_db"
  });
};

// lauch the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
