const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodeStoreSql',
  password: 'MyNewPass4!'
});

module.exports = pool.promise();
