const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const connection = require("./db/db");

app.use(express.json());

app.use(cors());

// ruqia 
const gymRouter = require("./routers/routes/gym")
app.use("/gym" , gymRouter)
rateRouter = require("./routers/routes/rate")
app.use("/rate" , rateRouter)

// kulthoum 
const resturantRouter =require("./routers/routes/resturant")
app.use("/resturan",resturantRouter)
const commentRouter =require ("./routers/routes/comment")
app.use("/comment",commentRouter)
//abdallah

const trainerRouter = require("./routers/routes/trainer")
app.use("/trainer" , trainerRouter);

//rashed  25 - 30

const productsRouter = require("./routers/routes/product");
app.use("/products",productsRouter );

//Islam
const registerRouter = require("./routers/routes/auth/signUp");
app.use("/register", registerRouter);
const loginRouter = require("./routers/routes/auth/login")
app.use(loginRouter)
const usersRouter = require("./routers/routes/users")
app.use("/users", usersRouter);
const cartRouter = require("./routers/routes/cart")
app.use("/cart", cartRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
