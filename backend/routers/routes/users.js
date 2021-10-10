const express = require("express");
const authentication = require("../../routers/middlewares/authentication");
const { updateUserById } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.put("/", authentication, updateUserById);

module.exports = usersRouter;
