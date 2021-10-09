const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const connection = require("./db/db");

app.use(express.json());

app.use(cors());

// ruqia 




// kulthoum 



//abdallah




//rashed 




//Islam
const usersRouter = require("./routers/routes/auth/signUp");
app.use("/users", usersRouter);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
