const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {

    const { host, port, user, password, databse } = config.database;
    const connection  = await mysql.connection({ host, port, user, password, databse });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);



    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql'});


    db.User = require('../users.user.model')(sequelize);


    await sequelize.sync({ alter: true});
}