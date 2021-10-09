const express = require("express");
const { createNewGym ,updateGymById ,deleteGymById , getAllGyms} = require("./../controllers/gym");
const gymRouter = express.Router();
gymRouter.post("/", createNewGym);
gymRouter.put("/:id", updateGymById);
gymRouter.delete("/:id", deleteGymById);
gymRouter.get("/", getAllGyms);
module.exports = gymRouter;
