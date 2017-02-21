'use strict';

const User = require('./user');
const Watchlist = require('./watchlist');

User.hasOne(Watchlist);
Watchlist.belongsTo(User);

module.exports = {
    User: User,
    Watchlist: Watchlist
};
