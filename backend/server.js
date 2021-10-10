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
const registerRouter = require("./routers/routes/auth/signUp");
app.use("/register", registerRouter);
const loginRouter = require("./routers/routes/auth/login")
app.use(loginRouter)
const usersRouter = require("./routers/routes/users")
app.use("/users", usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
