'use strict';

const db = require('../db');

const Sequelize = require('sequelize');

module.exports = db.define('Watchlist', {
    playerList: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
    }
}, {
    setterMethods: {
        addingPlayer: function (playerId) {
            const newPlayerList = this.playerList.concat(playerId);
            this.setDataValue('playerList', newPlayerList);
            return this.playerList;
        }
    }
});
