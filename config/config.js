const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys.js");

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada con éxito");
    console.log(saludo);
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
    dbConnection
}
