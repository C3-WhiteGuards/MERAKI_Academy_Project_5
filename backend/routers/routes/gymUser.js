const express = require('express');
const { addGymUser } = require('../controllers/gymUser');
const authentication = require('../middlewares/authentication');

const gymUserRouter = express.Router();

gymUserRouter.post('/' , authentication , addGymUser );

module.exports = gymUserRouter;




