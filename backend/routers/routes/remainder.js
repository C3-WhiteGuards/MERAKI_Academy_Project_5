const express = require('express');
const { remainder } = require('../controllers/remainder');
const authentication = require('../middlewares/authentication');

const remainderRouter = express.Router();

remainderRouter.get('/' , authentication,remainder);


module.exports = remainderRouter;