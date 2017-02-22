'use strict';

const Sequelize = require('sequelize');

console.log('Opening connection to PostgreSQL');

let sequelize;

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize('postgres://localhost:5432/trolldota', {
    logging: false
  });
}

// create the database instance
module.exports = sequelize;
