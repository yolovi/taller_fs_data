const express = require("express");
const app = express();
const { dbConnection } = require("./config/config");
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 3000;

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/shoppingmalls", require("./routes/shoppingMall"))


app.listen(PORT, () => console.log(`Servidor levantado en http://localhost:${PORT}/`));

//TODO: grafico de barras con el agregado las ventas (quantitiy) por centro comercial (shoping_mall)
//cantidad de ventas por cada centro comercial

