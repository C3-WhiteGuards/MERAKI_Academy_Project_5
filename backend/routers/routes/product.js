const express = require("express");
const { createNewProduct, updateByID } = require("../controllers/product");


const productsRouter = express.Router();

productsRouter.post("/", createNewProduct);
productsRouter.put('/:id' , updateByID);

module.exports = productsRouter;
