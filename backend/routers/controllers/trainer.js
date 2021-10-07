const connection = require("../../db/db")



const createNewTrainer = (req, res) => {
    
    let { fullName , phoneNumber , rate , location , image , sport } = req.body;
    
    let sql = `INSERT INTO trainers(fullName , phoneNumber , rate , location , image , sport )
    VALUES(?,?,?,?,?,?)`;

    let data = [ fullName , phoneNumber , rate , location , image , sport ];
  
    connection.query(sql,data,(err,result)=>{ 
      
      if(err){
        res.status(500).json({
          success: false,
          message: `Server Error`,
          // err: err,
        });
      }
      res.status(201).json({
        success: true,
        message: ` Success Trainer created`,
        Trainer:result
      });
    })
}



module.exports = { createNewTrainer }