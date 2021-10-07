const connection  = require("../../db/db");
const createNewResturent = (req,res)=>{
const { 
    name,
    location,
    image,
    monthlyPrice,
    rate

}=req.body

const query = `INSERT INTO resturant (
     name,
    location,
    image,
    monthlyPrice,
    rate)
    VALUES(?,?,?,?,?)`;

    const data =[name,
        location,
        image,
        monthlyPrice,
        rate];
        connection.query(query,data, (err, result) => {
            if (err) {
              res.status(500).json({
                success: false,
                message: `Server Error`,
                error: err,
              });}
              res.status(200).json({success : true , message:"new  resturant created", result:result});
            });

}


module.exports = {createNewResturent}