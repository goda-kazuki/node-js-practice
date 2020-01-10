"use strict";

let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kamituka",
  port: 3306,
  database: "goda"
});

connection.connect();

connection.query("insert into todos (id,title,done) values ('3','タイトル3','1')", function (err, rows, fields) {
  if (err) throw err;

  console.log(rows);
});

connection.end();