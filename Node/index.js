const express = require("express");
const config = require("config");
const app = express();
const productRoute = require("./routes/product");
const productCart = require("./routes/cart");

app.use(express.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/product", productRoute);
app.use("/cart", productCart);

app.listen(config.PORT, () => {
  console.log(
    "Node server listening on port http://localhost:" + config.PORT + "/product"
  );
});
