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

module.exports = { createNewProduct };
