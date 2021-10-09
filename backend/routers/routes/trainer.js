const express = require("express");
const { createNewTrainer } = require("../controllers/trainer");
const trainerRouter = express.Router();
trainerRouter.post("/", createNewTrainer);
module.exports = trainerRouter;
