import express from "express";
import ProductRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.routes.js";
import connectToMongoDB from "./src/config/mongodb.js";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import cartRouter from "./src/features/cartItems/cartItems.routes.js";
connectToMongoDB();
const server = express();
server.use(bodyParser.json());

server.use("/api/products", jwtAuth, ProductRouter);
server.use("/api/users", userRouter);
server.use("/api/cartItems",jwtAuth,cartRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});
server.listen(3200, () => {
  console.log("Server is running on port 3200");
});
