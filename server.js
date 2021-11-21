'use strict';

const express = require('express');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT || 8008;

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middleware/logger');

const fs = require('fs');

const home = fs.readFileSync(`${__dirname}/puplic/index.html`, 'utf-8');


server.use(logger);
server.use(express.json());



server.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html', });
    res.end(home);
});

server.get('/info', (req, res) => {
    res.status(200).send('All Good !!');
});

server.use('*', notFoundHandler);
server.use(errorHandler);

server.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});


module.exports = server;