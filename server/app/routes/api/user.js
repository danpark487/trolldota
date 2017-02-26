'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;

const User = require('../../../db/models').User;

/** PUT -- add player to user watchlist */
router.put('/:userId/watchlist/add', function(req, res, next) {
    User.findById(req.params.userId)
        .then((foundUser) => {
            return foundUser.update({addingPlayer: req.body.playerId});
        })
        .then((updatedUser) => {
            res.status(200).json(updatedUser);
        })
        .catch(next);
});