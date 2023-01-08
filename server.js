const express = require('express');
const app = express();
const config = require('./config.json');

app.get('/', (request, response) => response.send('Hello rold!'));


module.exports = app.listen(config.port, () => `Listening on ${config.port}`);
