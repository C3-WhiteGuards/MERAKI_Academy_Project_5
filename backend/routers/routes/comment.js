const express = require("express");
const { createNewComment } = require("../controllers/comment")

const commentRouter= express.Router()

commentRouter.post("/",createNewComment)

module.exports = commentRouter 