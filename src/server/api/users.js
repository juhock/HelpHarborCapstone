const express = require('express');
const router = express.Router();
const prisma = require('../prisma');

module.exports = router;

// this will be /api/users
router.get('/me', async (req, res, next) => {
  if (!res.locals.user) {
    return next({
      status: 404,
      message: `No user found.`
    });
  }
  // if res.json(user) is used, it will include password

  // this res.json will not include password
  const user = res.locals.user;

  res.json({
    id: user.id,
    username: user.username,
    posts: user.posts
  });
});
