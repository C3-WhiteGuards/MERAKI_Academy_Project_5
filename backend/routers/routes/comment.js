const express = require("express");


const { createNewComment ,updatecommentById ,deleteCommentById } = require("../controllers/comment");


const commentRouter = express.Router();

commentRouter.post("/", createNewComment);

commentRouter.put("/:id", updatecommentById);

commentRouter.delete("/:id", deleteCommentById);

module.exports = commentRouter;
