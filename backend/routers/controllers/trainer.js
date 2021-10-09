const connection = require("../../db/db");

const createNewTrainer = (req, res) => {
  let { fullName, phoneNumber, rate, location, image, sport } = req.body;

  let sql = `INSERT INTO trainers(fullName , phoneNumber , rate , location , image , sport )
    VALUES(?,?,?,?,?,?)`;

  let data = [fullName, phoneNumber, rate, location, image, sport];

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

  const { fullName, phoneNumber, location, image, sport, rate } = req.body;

  const query = `UPDATE trainers SET fullName="${fullName}", phoneNumber="${phoneNumber}" , location ="${location}"  ,image="${image}"  , sport ="${sport}" , rate="${rate}"WHERE id = ${id}`;

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

module.exports = { createNewTrainer, updateTrainerById };
