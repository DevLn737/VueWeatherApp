const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
// app.use(logsRouter)
// app.use(weatherRouter)


app.listen(port, () => {
   console.log('Server is up on ' + port);
});
