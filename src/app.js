// var mysql = require('mysql');
import mysql from "mysql";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

const connect = con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
