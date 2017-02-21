'use strict';

const Sequelize = require('sequelize');

console.log('Opening connection to PostgreSQL');

// create the database instance
module.exports = new Sequelize('postgres://localhost:5432/trolldota', {
  logging: false // set to console.log to see the raw SQL queries
});
