const express = require("express");
const {createNewResturent,getAllResturants , updateResturantById}=require("../controllers/resturant")


const resturantRouter =express.Router()
resturantRouter.post("/",createNewResturent)
resturantRouter.get("/",getAllResturants)
resturantRouter.put("/:id",updateResturantById)

module.exports=resturantRouter;