const express = require('express');
const helmet = require('helmer');
const cors = require('cors');

const logger = require('../data/middleware/logger')
const dbrouter = require('../data/routes/dbrouter')

const server = express();
server.use(helmer());
server.use(cors());
server.use(logger('long'));
server.use(express.json());

server.use('/api/dbrouter', dbrouter);

server.get('/', (req, res, next) => {
    res.json({
        message: 'Base route for the MFA Music Composition for the Screen plugin database'
    })
})

server.use((error, req, res, next) => {
    console.log("Error: ", error)
    res.status(500).json({
        message: "Something went horribly wrong."
    })
})

module.exports = server;