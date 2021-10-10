const express = require('express');
const { addGymUser } = require('../controllers/subscribtion');
const authentication = require('../middlewares/authentication');

const gymUserRouter = express.Router();

gymUserRouter.post('/' , authentication , addGymUser );

module.exports = gymUserRouter;




