// To connect with DB by MySQL
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodeStoreSql',
//   password: 'MyNewPass4!'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodeStoreSql', 'root', 'MyNewPass4!', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;

