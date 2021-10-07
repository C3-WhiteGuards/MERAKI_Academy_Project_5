const express = require("express");
const {createNewResturent}=require("../controllers/resturant")


const resturantRouter =express.Router()
resturantRouter.post("/",createNewResturent)



module.exports=resturantRouter;