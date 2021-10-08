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
  try{
    const {fullName,phoneNumber,rate,location,image,sport } = req.body;
    const id = req.params;
  
    const query = `UPDATE trainers SET fullName = ? , phoneNumber = ? , rate = ? , location = ? , image = ? sport = ?  WHERE id = ${id}`;
    const data = [fullName,phoneNumber,rate,location,image,sport,id];
    
    connection.query(query,data, (err, result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Trainer => ${id} not found`,
        });
      } else {
        res.status(202).json({
          success: true,
          message: ` Success Trainer updated`,
          Trainer: result,
        });
      }
    });
  }catch(err) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      // err: err,
    });
  }

}

module.exports = { createNewTrainer , updateTrainerById };
