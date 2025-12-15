import express from "express";
import ProductRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
const server = express();
server.use(bodyParser.json());

server.use("/api/products", ProductRouter);


server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});
server.listen(3200, () => {
  console.log("Server is running on port 3200");
});
