const connection = require("../../db/db");

const updateUserById = (req, res) => {
  const id = req.token.userId;
  const {
    fullName,
    age,
    phoneNumber,
    country,
    image,
    weight,
    height,
    diseases,
  } = req.body;
  const data = [
    fullName,
    age,
    phoneNumber,
    country,
    image,
    weight,
    height,
    diseases,
  ];
  const query = ` UPDATE users SET 
    fullName =?, 
    age=?,
    phoneNumber=?,
    country=?,
    image=?,
    weight=?,
    height=?,
    diseases=?,
     WHERE id = ${id}`;
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
