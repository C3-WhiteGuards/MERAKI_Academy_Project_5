const express = require("express");
const authentication = require("../../routers/middlewares/authentication");
const { addCart } = require("../controllers/cart");

const cartRouter = express.Router();
cartRouter.post("/", authentication, addCart)


module.exports = cartRouter;