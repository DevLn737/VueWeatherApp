//Импорты
const express = require('express');
const cors = require('cors')
require('./db/db.js');

// Роутеры
const logsRouter = require('./routes/logs');
const weatherRouter = require('./routes/weather');

// Начальная настройка
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Разрешить все источники (в продакшене изменить)
app.use(cors());

// Инициализация роутеров
app.use(logsRouter);
app.use(weatherRouter);

app.listen(port, () => {
   console.log('Server is up on ' + port);
});
