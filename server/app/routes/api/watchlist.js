var express = require('express');
var router = express.Router();
module.exports = router;

const Watchlist = require('../../../db/models').Watchlist;

/** GET -- user watchlist */
router.get('/:userId', function(req, res, next) {
    Watchlist.findOne({
        where: {
            UserId: req.params.userId
        }
    })
        .then((foundWatchlist) => {
            res.status(200).json(foundWatchlist);
        })
        .catch(next);
});

/** PUT -- add player to user watchlist */
router.put('/:userId/add', function(req, res, next) {
    Watchlist.findOrCreate({
        where: {
            UserId: req.params.userId
        }
    })
        .spread((foundWatchlist, created) => {
            return foundWatchlist.update({addingPlayer: req.body.playerId});
        })
        .then((newWatchlist) => {
            res.status(200).json(newWatchlist);
        })
        .catch(next);
});
