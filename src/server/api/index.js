const { ServerError } = require('../errors');
const prisma = require('../prisma');
const jwt = require('./auth/jwt');

const router = require('express').Router();
module.exports = router;

//  Attaches user to res.locals if token is valid
router.use(async (req, res, next) => {
  //  Check for token
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // "Bearer <token>"
  if (!authHeader || !token) {
    return next();
  }

  // Get user from token
  try {
    const { id } = jwt.verify(token);
    const user = await prisma.user.findUniqueOrThrow({ where: { id } });
    res.locals.user = user;
    next();
  } catch (err) {
    console.error(err);
  }
});

//this route will grab all the charities from the database
router.use('/charities', require('./charities'));

//this route is to grab the auth stuff
router.use('/auth', require('./auth'));

//this route will fetch user info
router.use('/users', require('./users'));
