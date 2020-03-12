const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fullstack_todo'
});

connection.connect();

module.exports = connection;
