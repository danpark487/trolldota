'use strict';

const router = require('express').Router();
const User = require('../../../db/models').User;
const Watchlist = require('../../../db/models').Watchlist;

// check currently-authenticated user, i.e. "who am I?"
router.get('/', function (req, res, next) {
    User.findById(req.session.userId)
        .then(user => res.json(user))
        .catch(next);
});

// login
router.put('/', function(req, res, next) {
    const { username, password } = req.body;
    User.findOne({
        where: { username, password }
    })
        .then(user => {
            if (!user) {
                throw new Error('User not found!');
            } else {
                req.session.userId = user.id;
                res.json(user);
            }
        })
        .catch(next);
});

// signup
router.post('/', function (req, res, next) {
  const { username, email, password, steamID } = req.body;
  User.findOrCreate({
    where: { username, email, steamID },
    defaults: { password }
  })
  .spread((user, created) => {
    if (created) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      res.sendStatus(401); // user already exists, cannot sign up!
    }
  });
});

// logout
router.delete('/', function (req, res) {
  req.session.destroy();
  res.sendStatus(204);
});

module.exports = router;
