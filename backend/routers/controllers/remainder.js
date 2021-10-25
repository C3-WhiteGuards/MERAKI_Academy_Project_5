const nodemailer = require("nodemailer");
const connection = require("../../db/db");

const remainder = async () => {
  const query = `SELECT firstName,email, date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsRestaurant on users.id = subscriptionsRestaurant.userId
    union all
    select firstName,email,date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsGym on users.id = subscriptionsGym.userId
    union all
    select firstName,email,date_to ,SUBSTRING(date_to,1,10) as to_date FROM users inner join subscriptionsTrainers on users.id = subscriptionsTrainers.userId`;
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
            subject: "Remainder about your subscription!",
            text: "Hello rashed world?",
            html: `<img style="border-radius:5px" src="https://media.istockphoto.com/photos/sports-gym-equipment-on-yellow-background-picture-id906005492?k=20&m=906005492&s=170667a&w=0&h=CLDlaap2dBFc_HVPWaZ5b3ij3J5CoTbnSwR6ah2AyqA=">
            <div style="margin-top:-300px;margin-left:150px">
            <h2 style="color:black;font-family:Century Gothic">Hello ${result[i].firstName} ,</h2>
            <p style="font-weight:bold; font-family:Century Gothic">We would like to inform you that your<br/> subscription is about to expire in ${result[i].to_date}...<br/>
            To renew your subscription,<br/> please visit our website : </p><br/>
            <button style="width:120px;height:30px;  background-color:yellow; border-radius:3px; border:solid 3px white" ><a href="http://localhost:3000" target="blank_" style="text-decoration:none;color:black ;font-weight:bold;">MEGALODON</a> </button><br/>
            </div>
            </img>`,
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
