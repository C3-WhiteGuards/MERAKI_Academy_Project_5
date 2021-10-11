const express = require('express');
const { addGymUser, addRestaruntUser } = require('../controllers/subscribtion');
const authentication = require('../middlewares/authentication');

const subscribtionRouter = express.Router();

subscribtionRouter.post('/gym' , authentication , addGymUser );
subscribtionRouter.post('/rest' , authentication , addRestaruntUser);

module.exports = subscribtionRouter;




