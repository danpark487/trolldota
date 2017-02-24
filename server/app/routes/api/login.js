'use strict';

const router = require('express').Router();
const User = require('../../../db/models').User;

// login
router.put('/', function(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
        where: { email, password }
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
  const { email, password } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: { password }
  })
  .spread((user, created) => {
    if (created) {
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.json(user);
      });
    } else {
      throw new HttpError(401);
    }
  });
});

// logout
router.delete('/', function (req, res) {
  req.logOut();
  res.sendStatus(204);
});

module.exports = router;
