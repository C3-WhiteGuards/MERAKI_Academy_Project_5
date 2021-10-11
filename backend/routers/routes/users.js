const express = require("express");
const authentication = require("../../routers/middlewares/authentication");
const { updateUserById,gitInfo } = require("../controllers/users");

const usersRouter = express.Router();
usersRouter.get("/", authentication, gitInfo)
usersRouter.put("/", authentication, updateUserById);

module.exports = usersRouter;
