const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'logs.db');

const db = new sqlite3.Database(dbPath, (err) => {
   if (err) {
      return console.error(err.message);
   }
   console.log("Successful connection to the database 'logs.db'");
});

const sql_create = `CREATE TABLE IF NOT EXISTS Logs (
   logID INTEGER PRIMARY KEY AUTOINCREMENT,
   Place VARCHAR(100) NOT NULL,
   Temp VARCHAR(100) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );`;

db.run(sql_create, (err) => {
   if (err) {
      return console.error(err.message);
   }
   console.log("Successful creation of the 'Logs' table");
});

module.exports = db;
