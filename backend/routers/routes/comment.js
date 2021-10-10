const express = require("express");
const { createNewComment ,updatecommentById  } = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/", createNewComment);
commentRouter.put("/:id", updatecommentById);
module.exports = commentRouter;
