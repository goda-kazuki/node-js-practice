"use strict";
const config = require("config");

const mysql = require("mysql");

exports.connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  port: config.mysql.port,
  database: config.mysql.database
});
