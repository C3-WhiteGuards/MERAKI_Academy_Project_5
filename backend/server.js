const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const connection = require("./db/db");
const gymRouter = require("./routers/routes/gym");
const rateRouter = require("./routers/routes/rate");
const resturantRouter = require("./routers/routes/resturant");
const commentRouter = require("./routers/routes/comment");
const trainerRouter = require("./routers/routes/trainer");
const productsRouter = require("./routers/routes/product");
const subscribtionRouter = require("./routers/routes/subscribtion");
const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const usersRouter = require("./routers/routes/users");
const cartRouter = require("./routers/routes/cart");
app.use(express.json());

app.use(cors());

// ruqia

app.use("/gym", gymRouter);

app.use("/rate", rateRouter);

// kulthoum

app.use("/resturan", resturantRouter);

app.use("/comment", commentRouter);
//abdallah

app.use("/trainer", trainerRouter);

//rashed  25 - 30

app.use("/products", productsRouter);
app.use("/subscribtion", subscribtionRouter);
//Islam

app.use("/register", registerRouter);

app.use(loginRouter);

app.use("/users", usersRouter);

app.use("/cart", cartRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
