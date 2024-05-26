const express = require("express");
const { dbConnection } = require("./config/config");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 3000;

dbConnection();

app.use(express.json());

app.use("/shoppingmalls", require("./routes/shoppingMall"))


app.listen(PORT, () => console.log(`Servidor levantado en http://localhost:${PORT}/`));

//TODO: grafico de barras con el agregado las ventas (quantitiy) por centro comercial (shoping_mall)
//cantidad de ventas por cada centro comercial

