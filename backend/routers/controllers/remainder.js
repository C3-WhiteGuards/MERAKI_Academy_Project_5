const nodemailer = require("nodemailer");
const connection = require("../../db/db");

const remainder = async () => {
  const query = `SELECT email, date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsRestaurant on users.id = subscriptionsRestaurant.userId
    union all
    select email,date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsGym on users.id = subscriptionsGym.userId
    union all
    select email,date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsTrainers on users.id = subscriptionsTrainers.userId;`;
  connection.query(query, async (err, result) => {
    console.log(result[0].to_date);
    function dateDiffInDays(a) {
      const d = new Date();
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      return Math.abs(Math.floor((utc2 - utc1) / 86400000));
    }

    for (let i = 0; i < result.length; i++) {
      console.log(result[i].email, dateDiffInDays(new Date(result[i].to_date)));
      if (dateDiffInDays(new Date(result[i].to_date)) <= 5) {
        try {
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rashedmeg231@gmail.com",
              pass: "lfzhuhlpcqiiatvo",
            },
          });
          let info = await transporter.sendMail({
            from: "rashedmeg231@gmail.com",
            to: `${result[i].email}`,
            subject: "Hello ALi✔",
            text: "Hello rashed world?",
            html: "<b style='color:red';>...kjh...?</b>",
          });
          console.log("Message sent: %s", info.messageId);

          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (error) {
          console.log(error);
          res.json({ error: error });
        }
      }
    }
    //res.status(200).json({ result });
    return 
  });
};
module.exports = { remainder };
