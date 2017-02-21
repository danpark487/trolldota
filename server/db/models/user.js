'use strict';

const db = require('../db');

const Sequelize = require('sequelize');

module.exports = db.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    steamID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
