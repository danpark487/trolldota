var express = require('express');
var router = express.Router();
module.exports = router;

const Dota2Api = require('dota2-api');

/** Steam API Key */
const Dota = Dota2Api.create('B47D4C2FD95A6E91DCB503C2527F6ACF');

/** GET request -- retrieve match data */
router.get('/matches/:matchId', function (req, res, next) {
    Dota.getMatchDetails({match_id: req.params.matchId})
        .then((result) => {
            res.json(result);
        })
        .catch(next);
});

/** GET request -- retrieve player data */
router.get('/players/:playerId', function (req, res, next) {
    Dota.getMatchHistory({account_id: req.params.playerId})
        .then((result) => {
            res.json(result);
        })
        .catch(next);
});
