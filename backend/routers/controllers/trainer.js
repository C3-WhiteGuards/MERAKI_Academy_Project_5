const connection = require("../../db/db");

const createNewTrainer = (req, res) => {
  let {
    firstName,
    lastName,
    phoneNumber,
    location,
    image,
    sport,
    priceMonthly,
    description,
    experience,
  } = req.body;

  let sql = `INSERT INTO trainers(firstName, lastName, phoneNumber, location, image, sport ,priceMonthly ,description ,experience)
    VALUES(?,?,?,?,?,?,?,?,?)`;

  let data = [
    firstName,
    lastName,
    phoneNumber,
    location,
    image,
    sport,
    priceMonthly,
    description,
    experience,
  ];

  connection.query(sql, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        // err: err,
      });
    }
    res.status(201).json({
      success: true,
      message: ` Success Trainer created`,
      Trainer: result,
    });
  });
};

module.exports = { createNewTrainer };
