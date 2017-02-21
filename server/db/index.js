'use strict';
const db = require('./db');

require('./models');

// Syncing all the models at once. This promise is used by main.js.
const syncedDbPromise = db.sync();

syncedDbPromise.then(function () {
  console.log('Sequelize models synced to PostgreSQL');
});

module.exports = syncedDbPromise;
