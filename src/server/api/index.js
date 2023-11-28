const { ServerError } = require('../errors');
// const prisma = require("../prisma")
// const jwt require("./auth/jwt") this is for the auth stuff later

const router = require('express').Router();
module.exports = router;

/** THIS CODE UNDER IS FOR THE AUTH STUFF LATER, DO NOT TOUCH UNTILL AUTHORIZED TO DO SO */

// // Attaches user to res.locals if token is valid
// router.use(async (req, res, next) => {
//     // Check for token
//     const authHeader = req.headers.authorization;
//     const token = authHeader?.split(" ")[1]; // "Bearer <token>"
//     if (!authHeader || !token) {
//       return next();
//     }

//     // Get user from token
//     try {
//       const { id } = jwt.verify(token);
//       const user = await prisma.user.findUniqueOrThrow({ where: { id } });
//       res.locals.user = user;
//       next();
//     } catch (err) {
//       console.error(err);
//       next(new ServerError(401, "Invalid token."));
//     }
//   });

/**THIS IS THE END OF THE AUTH CODE STUFF, YOU MAY RESUME. */

//this route will grab all the charities from the database
router.use('/charities', require('./charities'));
