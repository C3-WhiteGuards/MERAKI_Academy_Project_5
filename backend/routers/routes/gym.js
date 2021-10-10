const express = require("express");
const { createNewGym ,updateGymById} = require("./../controllers/gym");
const gymRouter = express.Router();
gymRouter.post("/", createNewGym);
gymRouter.put("/:id", updateGymById);
module.exports = gymRouter;
