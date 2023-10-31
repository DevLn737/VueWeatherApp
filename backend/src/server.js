//Импорты
const express = require('express');
require('./db/db.js');

// Роутеры
const logsRouter = require('./routes/logs');


// Начальная настройка
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


// Инициализация роутеров
app.use(logsRouter);
// app.use(weatherRouter)





app.listen(port, () => {
   console.log('Server is up on ' + port);
});
