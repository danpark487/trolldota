'use strict';

const db = require('../db');

const Sequelize = require('sequelize');

module.exports = db.define('User', {
    username: {
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
    },
    watchlist: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
    }
}, {
    setterMethods: {
        addingPlayer: function (playerId) {
            const newWatchlist = this.watchlist.concat(playerId);
            this.setDataValue('watchlist', newWatchlist);
            return this;
        }
    }
});
