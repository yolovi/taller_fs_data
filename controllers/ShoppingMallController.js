const ShoppingMall = require("../models/ShoppingMall");

const ShoppingMallController = {
  async create(req, res) {
    try {
      const shoppingMall = await ShoppingMall.create(req.body);
      res.status(201).send(shoppingMall);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al crear el centro comercial" });
    }
  },
  async getAll(req, res) {
    try {
      let page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;

      if (page < 1) {
        page = 1;
      }

      const skip = (page - 1) * limit;

      const invoices = await ShoppingMall.find().skip(skip).limit(limit);
      res.send({ msg: "ModelData", invoices });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ msg: "Error", error });
    }
  },
  async getById(req, res) {
    try {
      const data = await ShoppingMall.findById(req.params._id);
      res.send(data);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = ShoppingMallController;
