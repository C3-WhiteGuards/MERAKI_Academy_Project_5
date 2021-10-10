const connection = require("../../db/db");

const addGymUser = (req, res) => {
  const { gymId } = req.body;
  const userId = req.token.userId;
  const d = new Date();

  const date = `${d.getFullYear()}-${d.getMonth() + 2}-${d.getDate()}`;

  const query = `INSERT INTO subscriptionsGym (userId , gymId , date_to) VALUES (?,?,?)`;
  const data = [userId, gymId, date];

  connection.query(query, data, (err, result) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "There is Error!", Error: err });

    return res
      .status(200)
      .json({ success: true, message: "add new subscribe is Done !" });
  });
};

module.exports = { addGymUser };
