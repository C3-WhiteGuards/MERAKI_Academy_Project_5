const express = require('express');


const { addGymUser, addRestaruntUser, addTrainerUser } = require('../controllers/subscribtion');
const authentication = require('../middlewares/authentication');

const subscribtionRouter = express.Router();

subscribtionRouter.post('/gym' , authentication , addGymUser );
subscribtionRouter.post('/rest' , authentication , addRestaruntUser);
subscribtionRouter.post('/trainer', authentication , addTrainerUser);

module.exports = subscribtionRouter;






