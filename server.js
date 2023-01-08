const { HDate } = require('hebcal')
const express = require('express');
const app = express();
const config = require('./config.json');

app.get('/', (request, response) => response.send('Hello rold!'));

app.get('/hebcal', (_, response) => response.send(new HDate().toString('h')))

module.exports = app.listen(config.port, () => `Listening on ${config.port}`);
