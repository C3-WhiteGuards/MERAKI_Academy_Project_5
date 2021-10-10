const { query } = require("../../db/db");
const connection = require("../../db/db");

const createNewProduct = (req, res) => {
  const { name, price, description, image } = req.body;

  const query = `INSERT INTO products (name ,price,description,image ) VALUES (?,?,?,?)`;
  const data = [name, price, description, image];

  connection.query(query, data, (err, product) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, message: "Server Erorr !", Error: err });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "add new product is done!",
        Product_is: product,
      });
  });
};

const updateByID = (req ,res)=>{
    const id = req.params.id

    const query = `UPDATE products SET price = ? WHERE id = ${id}`;
    const data = [1];
    connection.query(query , data, (err , updatePrice)=>{
        if (err)
        {
            return res.status(404).json({success:false , message:"product not found!" , Error:err})
        }

        return res.status(200).json({success:true , message:"update the price is done!" , new_price:updatePrice})
    })
};


module.exports = { createNewProduct , updateByID};
