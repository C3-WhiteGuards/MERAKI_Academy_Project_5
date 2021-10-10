const express = require("express");
const authentication = require("./../middlewares/authentication") 
const { createGymRate, getGymRateById} = require("./../controllers/rate");
const rateRouter = express.Router();
rateRouter.post("/gym", authentication , createGymRate);
rateRouter.get("/gym/:id", getGymRateById);
// rateRouter.post("/resturant", authentication , );
// rateRouter.get("/resturant/:id", );
// rateRouter.post("/trainer", authentication ,  );
// rateRouter.get("/trainer/:id", );
module.exports = rateRouter;
