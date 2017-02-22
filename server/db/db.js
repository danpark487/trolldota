'use strict';

const Sequelize = require('sequelize');

console.log('Opening connection to PostgreSQL');

const databaseURI = process.env.DATABASE_URL || 'postgres://localhost:5432/trolldota';

// create the database instance
module.exports = new Sequelize(databaseURI, {
    logging: false
});
