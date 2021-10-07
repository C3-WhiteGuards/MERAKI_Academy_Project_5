const express = require("express");
const{createNewUser}= require("../../controllers/auth/signUp")


const usersRouter = express.Router();



usersRouter.post("/", createNewUser);


module.exports = usersRouter;