const connection = require("../../db/db");

const updateUserById = (req, res) => {
  const id = req.token.userId;
  const {
    firstName,
    lastName,
    age,
    phoneNumber,
    country,
    image,
    weight,
    height,
    diseases,
  } = req.body;
  const data = [
    firstName,
    lastName,
    age,
    phoneNumber,
    country,
    image,
    weight,
    height,
    diseases,
  ];
  const query = ` UPDATE users SET 
    firstName =?,
    lastName =?,  
    age=?,
    phoneNumber=?,
    country=?,
    image=?,
    weight=?,
    height=?,
    diseases=?
     WHERE id =${id}`;
  connection.query(query, data, (err, result) => {
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
};

const getInfo = (req, res) => {
  const id = req.token.userId;
  const query = `SELECT * FROM users WHERE id=${id}`;
  connection.query(query, (err, result) => {
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
};

module.exports = {
  updateUserById,
  getInfo,
};
