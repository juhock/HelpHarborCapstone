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
    if (!charityById) {
      return next({
        status: 404,
        message: `Look buddy, theres nothing here, its ok, you can move along. :)`
      });
    }
    res.json(charityById);
  } catch {
    next();
  }
});

//this code should allow the adding of a charity!
router.post('/', async (req, res, next) => {
  try {
    //here we grab the properties from the Post schema model
    const {
      title,
      email,
      image,
      phone,
      address,
      description,
      category,
      userId
    } = req.body;
    // now for each property we give an error handler...
    if (!title) {
      throw new ServerError(400, 'Title is required');
    }
    if (!email) {
      throw new ServerError(400, 'Email is required');
    }
    if (!image) {
      throw new ServerError(400, 'Image is required');
    }
    if (!phone) {
      throw new ServerError(400, 'Phone Number is required');
    }
    if (!address) {
      throw new ServerError(400, 'Address is required');
    }
    if (!description) {
      throw new ServerError(400, 'Description is required');
    }
    if (!category) {
      throw new ServerError(400, 'Category is required');
    }

    const charity = await prisma.post.create({
      data: {
        title,
        email,
        image,
        phone,
        address,
        description,
        category,
        userId
        //CODE FOR AUTH STUFF NEEDS TO BE HERE LATER ON!
      }
    });
    res.json(charity);
  } catch (err) {
    next(err);
  }

  console.log('Yingshi needs to chill:', res.locals.user);
});

//update a charity

router.put('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;
    const {
      title,
      email,
      image,
      phone,
      address,
      description,
      category,
      userId
    } = req.body;

    const charity = await prisma.post.findUnique({ where: { id } });
    // validateTask(res.locals.user, task); THIS IS FOR AUTH STUFF

    const updatedCharity = await prisma.post.update({
      where: { id },
      data: {
        title,
        email,
        image,
        phone,
        address,
        description,
        category,
        userId
      }
    });
    res.json(updatedCharity);
  } catch (err) {
    next(err);
  }
});

//Deletes a charity

router.delete('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;

    const charityById = await prisma.post.findUnique({ where: { id } });
    // validateTask(res.locals.user, task); THIS IS FOR AUTH STUFF

    await prisma.post.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
