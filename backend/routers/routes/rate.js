const express = require("express");
const authentication = require("./../middlewares/authentication") 
const { createGymRate, getGymRateById ,createResturantRate ,getResturantRateById} = require("./../controllers/rate");
const rateRouter = express.Router();
rateRouter.post("/gym", authentication , createGymRate);
rateRouter.get("/gym/:id", getGymRateById);
rateRouter.post("/resturant", authentication ,createResturantRate );
rateRouter.get("/resturant/:id", getResturantRateById);
// rateRouter.post("/trainer", authentication ,  );
// rateRouter.get("/trainer/:id", );
module.exports = rateRouter;
