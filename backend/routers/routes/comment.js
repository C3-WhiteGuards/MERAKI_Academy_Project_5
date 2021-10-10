const express = require("express");
const { createNewComment ,updateResturantById  } = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/", createNewComment);
commentRouter.put("/:id", updateResturantById);
module.exports = commentRouter;
