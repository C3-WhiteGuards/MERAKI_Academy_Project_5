const express = require("express");
const { createNewGym } = require("./../controllers/gym");
const gymRouter = express.Router();
gymRouter.post("/", createNewGym);
module.exports = gymRouter;
