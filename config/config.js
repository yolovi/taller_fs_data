const mongoose = require("mongoose");

require("dotenv").config()
const { MONGO_URI } = process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada con éxito");

  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
    dbConnection
}
