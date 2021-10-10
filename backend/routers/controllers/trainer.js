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

const updateTrainerById = (req, res) => {
  const id = req.params.id;

  const {
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

  const query = `UPDATE trainers SET firstName="${firstName}", lastName="${lastName}" , phoneNumber="${phoneNumber}", location ="${location}"  ,image="${image}"  , sport ="${sport}" , priceMonthly="${priceMonthly}" , description="${description}" , experience="${experience}"  WHERE id = ${id}`;

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: `The Trainer => ${id} not found`,
      });
    }
    res.status(202).json({
      success: true,
      message: ` Success Trainer updated`,
      Trainer: result,
    });
  });
};

const getTrainerById = (req, res) => {
  let id = req.params.id;
  const query = `SELECT * FROM trainers WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      Trainer: result,
    });
  });
};

const getAllTrainer = (req, res) => {
  const query = `SELECT * FROM trainers`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      allTrainers: result,
    });
  });
};

module.exports = {
  createNewTrainer,
  updateTrainerById,
  getTrainerById,
  getAllTrainer,
};
