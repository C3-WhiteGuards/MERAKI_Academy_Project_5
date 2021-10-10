const express = require("express");
const { createNewProduct, updateByID, deleteByName } = require("../controllers/product");



const productsRouter = express.Router();

productsRouter.post("/", createNewProduct);
productsRouter.put('/:id' , updateByID);
productsRouter.delete('/:id' , deleteByName )

module.exports = productsRouter;
