const connection = require("../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  const { fullName,
    email,
    age,
    bcryptPassword,
    phoneNumber,
    country,
    role,
    image,
    weight,
    height,
    diseases,
    gym_id,
    cart_id,
    feedback_id } =
    req.body;
  const bcryptPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (fullName, email, age, password,phoneNumber,country,role,image,
    weight,height,diseases,gym_id,cart_id,feedback_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    fullName,
    email,
    age,
    bcryptPassword,
    phoneNumber,
    country,
    role,
    image,
    weight,
    height,
    diseases,
    gym_id,
    cart_id,
    feedback_id
  ];
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

module.exports = {
  createNewUser,
};
