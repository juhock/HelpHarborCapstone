const { ServerError } = require('../errors');
const express = require('express');
const router = express.Router();
module.exports = router;

// this will be /api/users
router.get('/me', async (req, res, next) => {
  const user = res.locals.user;

  // if res.json(user) is used, it will include password

  // this res.json will not include password
  res.json({
    id: user.id,
    username: user.username
  });
});
