const connection  = require("../../db/db");
const createNewComment = (req,res)=>{
    const { 
       comment ,
       userId
    
    }=req.body

    const query = `INSERT INTO feedback (
        comment ,
        userId
       )
       VALUES(?,?)`;
       const data =[ comment ,userId]
       connection.query(query,data, (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            error: err,
          });}
          res.status(200).json({success : true , message:"new  comment  created", result:result});
        });

    



}



module.exports = {createNewComment }