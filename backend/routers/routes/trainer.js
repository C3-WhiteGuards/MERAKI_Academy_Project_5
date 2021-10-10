const express = require("express");
const { createNewTrainer , updateTrainerById } = require("../controllers/trainer");
 
const trainerRouter = express.Router();
trainerRouter.post("/", createNewTrainer);
trainerRouter.put("/:id", updateTrainerById);
module.exports = trainerRouter;
