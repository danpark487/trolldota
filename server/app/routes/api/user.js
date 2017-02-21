'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;

const User = require('../../../db/models').User;

router.post('/', function(req, res, next) {
    User.create(req.body)
        .then((newUser) => {
            res.status(201).json(newUser);
        })
        .catch(next);
});
