const connection = require("../../db/db");
const createNewComment = (req, res) => {
  const { comment, userId } = req.body;

  const query = `INSERT INTO feedback (
        comment ,
        userId
       )
       VALUES(?,?)`;
  const data = [comment, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "new  comment  created",
        result: result,
      });
  });
};

const updateResturantById = ( req, res )=> 
{
  const id = req.params.id;
  const { comment
   

}=req.body

const query = `UPDATE feedback SET comment= "${comment}"  WHERE id= ${id}`;
connection.query(query,(err,result)=>{
  if (err) {
    console.log(err.response);
    return;
  }
  res.status(200).json({
    success : true ,
    message:`comment  ${id} updated `,
    result:result
  });
});
}

module.exports = { createNewComment  ,updateResturantById };
