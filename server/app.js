const express = require('express');
const app = express();

const startDb = require('./db');

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/** Logging Middleware */
app.use(morgan('dev'));

/** Body Parsing Middleware for POST/PUT reqeusts */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Static File Middleware */
app.use(express.static(path.join(__dirname, '../public')));

/** Custom Route Middleware */
app.use('/', require('./app/routes'));

/** Default Error-handling Middleware */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
});

/** Starting Server */
app.listen(3154, () => {
    console.log('Server now listening on port 3154');
    startDb
        .then(() => {
            console.log('Synchronated the database');
        })
        .catch(function (err) {
            console.error('Trouble sychronating the database', err, err.stack);
        });
});

module.exports = app;
