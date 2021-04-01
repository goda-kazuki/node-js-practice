const mysqlConfig = require("./mysqlConfig");

mysqlConfig.connection.connect();

mysqlConfig.connection.query("select * from todos;", function (err, rows, fields) {
  if (err) throw err;

  console.log("sample");
});

mysqlConfig.connection.end();
