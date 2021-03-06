const express = require('express');
const app = express();

const startDb = require('./db');

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

/** Logging Middleware */
app.use(morgan('dev'));

/** Body Parsing Middleware for POST/PUT reqeusts */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Sessions */
app.use(session({
    secret: 'quoth the raven',
    resave: false,
    saveUninitialized: false
}));



/** Custom Route Middleware */
app.use('/', require('./app/routes'));

/** For BrowserHistory */
const validFrontendRoutes = ['/', '/:userId/watchlist', '/players/:playerId', '/watchlist'];
const indexPath = path.join(__dirname, '..', 'browser', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

/** Static File Middleware */
const rootPath = path.join(__dirname, '..');
const browserPath = path.join(rootPath, 'browser');
const publicPath = path.join(rootPath, 'public');

app.use(express.static(rootPath));
app.use(express.static(browserPath));
app.use(express.static(publicPath));

/** Default Error-handling Middleware */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
});

/** Starting Server */

const PORT = process.env.PORT || 3154;
app.listen(PORT, () => {
    console.log('Server now listening on port', PORT);
    startDb
        .then(() => {
            console.log('Synchronated the database');
        })
        .catch(function (err) {
            console.error('Trouble sychronating the database', err, err.stack);
        });
});

module.exports = app;
