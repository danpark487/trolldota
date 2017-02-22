var express = require('express');
var router = express.Router();
module.exports = router;

/** API routes */
// router.use('/dota', require('./dota'));
router.use('/watchlist', require('./watchlist'));
router.use('/user', require('./user'));
