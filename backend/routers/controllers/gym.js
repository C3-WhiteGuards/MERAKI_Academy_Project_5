const connection = require("./../../db/db");

const createNewGym = (req, res) => {
  const {
    name,
    phoneNumber,
    location,
    image,
    priceMonthly,
    description
  } = req.body;
  const gymQuery = `INSERT INTO gym  ( name, phoneNumber, location ,image , priceMonthly,description) VALUES (?,?,?,?,?,?)`;
  const data = [
    name,
    phoneNumber,
    location,
    image,
    priceMonthly,
    description
    ];
  connection.query(gymQuery, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Success new gym Added ",
      result: result,
    });
  });
};

module.exports = { createNewGym };
