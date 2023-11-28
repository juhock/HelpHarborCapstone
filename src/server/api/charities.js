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
