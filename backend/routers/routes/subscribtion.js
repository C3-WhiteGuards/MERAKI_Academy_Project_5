const express = require('express');


const { addGymUser, addRestaruntUser, addTrainerUser, getResturantsSubscribtion } = require('../controllers/subscribtion');
const authentication = require('../middlewares/authentication');

const subscribtionRouter = express.Router();

subscribtionRouter.post('/gym' , authentication , addGymUser );
subscribtionRouter.post('/rest' , authentication , addRestaruntUser);
subscribtionRouter.post('/trainer', authentication , addTrainerUser);
subscribtionRouter.get('/ResturantsSubscribtion' , authentication , getResturantsSubscribtion);

module.exports = subscribtionRouter;






