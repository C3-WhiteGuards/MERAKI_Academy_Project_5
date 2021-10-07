const express = require("express");
const { createNewProduct } = require("../controllers/product");

const productsRouter = express.Router();

productsRouter.post('/'  , createNewProduct)


module.exports = productsRouter;