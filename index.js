const express = require("express");
const { dbConnection } = require("./config/config");
const app = express();
const PORT = 8080;

app.use(express.json());

dbConnection();

app.listen(PORT, () => console.log(`Servidor levantado en http://localhost:${PORT}/`));

