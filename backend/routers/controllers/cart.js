const connection = require("../../db/db");

const addCart = (req,res)=>{
   const {productId}=req.body;
    const userId = req.token.userId;
    const data=[productId,userId]
    const query = `INSERT INTO cart (productId,userId) VALUES(?,?)`;
  connection.query(query,data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(200);
    res.json(result);
  });
}
module.exports={
    addCart
}