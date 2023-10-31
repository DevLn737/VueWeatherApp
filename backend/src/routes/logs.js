const express = require('express');
const db = require('../db/db');

const router = new express.Router();

// Записать в бд лог
router.post('/v1/logs', (req, res) => {
   //SQL запрос
   const sql = 'INSERT INTO Logs (Place, Temp) VALUES (?,?)';
   //Json данные с фронта (place,temp)
   const data = req.body;

   db.run(sql, [data.place, data.temp], (err) => {
      if (err) {
         return res.status(400).send({ error: err.message });
      }
      res.status(201).send();
   });
});

// Считать из бд лог(и)
router.get('/v1/logs', (req, res) => {
   //SQL запрос
   const sql = 'SELECT * FROM Logs';

   db.all(sql, [], (err, rows) => {
      if (err) {
         return res.status().send(500);
      }
      res.status(200).send(rows);
   });
});

module.exports = router;
