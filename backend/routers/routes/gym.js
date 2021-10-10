const express = require("express");
const { createNewGym ,updateGymById ,deleteGymById} = require("./../controllers/gym");
const gymRouter = express.Router();
gymRouter.post("/", createNewGym);
gymRouter.put("/:id", updateGymById);
gymRouter.delete("/:id", deleteGymById);
module.exports = gymRouter;
