const express = require("express");
const {createNewResturent,getAllResturants}=require("../controllers/resturant")


const resturantRouter =express.Router()
resturantRouter.post("/",createNewResturent)
resturantRouter.get("/",getAllResturants)


module.exports=resturantRouter;