var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pass123',
    database: 'expensedb'
});

module.exports = connection;