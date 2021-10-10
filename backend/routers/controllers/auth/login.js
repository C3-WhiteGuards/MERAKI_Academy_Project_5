const connection = require("../../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  const query = `SELECT * FROM users WHERE email ='${email}'`;
  connection.query(query, async (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `The email doesn't exist`,
      });
    }
    try {
      const valid = await bcrypt.compare(password, result[0].password);
      if (!valid) {
        return res.status(403).json({
          success: false,
          message: `The password you’ve entered is incorrect`,
        });
      }
      const payload = {
        userId: result[0].id,
        country: result[0].country,
        role: result[0].role,
      };

      const options = {
        expiresIn: "60m",
      };

      const token = await jwt.sign(payload, process.env.SECRET, options);
      res.status(200).json({
        success: true,
        message: `Email and Password are correct`,
        token: token,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  });
};

module.exports = {
  login,
};
