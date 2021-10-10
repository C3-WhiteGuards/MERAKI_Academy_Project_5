const express = require("express");
const { createNewComment ,updateResturantById ,deleteCommentById } = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/", createNewComment);
commentRouter.put("/:id", updateResturantById);

commentRouter.delete("/:id", deleteCommentById);

module.exports = commentRouter;
