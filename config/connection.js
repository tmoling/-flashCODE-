// Set up MySQL connection.
var mysql = require("mysql");
var app = require('../server');

console.log('--------------the environment we are using----------------');
console.log(process.env);
console.log('--------------the environment we are using----------------');

if (process.env.NODE_ENV == 'production'){
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "flashcard_db"
  });
}else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;