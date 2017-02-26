var express = require('express');
var router = express.Router();
module.exports = router;

/** API routes */
router.use('/user', require('./user'));
router.use('/login', require('./login'));
