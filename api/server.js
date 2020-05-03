const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('../router/userRouter');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req,res) => {
    res.send(`<h1>Running..</h1>`)
})

server.use('/api', apiRouter);

module.exports = server;