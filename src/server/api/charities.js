const { ServerError } = require('../errors');
const express = require('express');
const router = express.Router();
module.exports = router;

const prisma = require('../prisma');

// this will be /api/charities
router.get('/', async (req, res, next) => {
  try {
    const charitiesData = await prisma.post.findMany();
    console.log(charitiesData);
    res.json(charitiesData);
  } catch {
    next();
  }
});


//displays charity by id!

router.get('/:id', async (req, res, next) => {
  try {
    //grabs the id from the charity database
    const id = +req.params.id;

    const charityById = await prisma.post.findUnique({ where: { id } });
    if(!charityById) {
      return next({
        status: 404, 
        message: `Look buddy, theres nothing here, its ok, you can move along. :)`
      });
    }
    res.json(charityById)
  } catch {
    next();
  }
});