//Config file identifies the database you are using

const Sequelize = require('sequelize');

let database = 'robotaskmanager';
let username = 'marwa';
let password = 'password';

const config = new Sequelize(database, username, password,{dialect: 'mariadb'});

module.exports = config;