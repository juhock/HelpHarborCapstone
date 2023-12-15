const { ServerError } = require('../errors');
const express = require('express');
const router = express.Router();
const prisma = require('../prisma');

module.exports = router;

// this will be /api/users
router.get('/me', async (req, res, next) => {
  const userId = res.locals.user.id;
  if (!userId) {
    return next({
      status: 404,
      message: `No user found.`
    });
  }
  // if res.json(user) is used, it will include password

  // this res.json will not include password

  const user = await prisma.user.findUnique({
    where: {
        id: userId
    },

    include: {
        posts: true,
    }
  })

  res.json(user);
});
