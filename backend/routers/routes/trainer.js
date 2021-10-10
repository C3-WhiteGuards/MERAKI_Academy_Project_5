const express = require("express");
const { createNewTrainer , updateTrainerById , getTrainerById } = require("../controllers/trainer");
 
const trainerRouter = express.Router();
trainerRouter.post("/", createNewTrainer);
trainerRouter.put("/:id", updateTrainerById);
trainerRouter.get("/:id", getTrainerById);

module.exports = trainerRouter;
