const router = require('express').Router();
const path = require('path');
module.exports = router;

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../../browser/index.html'));
});

/** API routes */
router.use('/api', require('./api'));
