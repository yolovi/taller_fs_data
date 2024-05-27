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
  async getAllInvoices(req, res) {
    try {
      let page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;

      if (page < 1) {
        page = 1;
      }
      const skip = (page - 1) * limit;

      const invoices = await ShoppingMall.find().skip(skip).limit(limit);
      res.send({ ok: true, msg: "ModelData", invoices });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ ok: false, msg: "Error", error });
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
  async getShoppingMallsNames(req, res) {
    try {
      const invoices = await ShoppingMall.find({}, "shopping_mall");
      const names = invoices.map((invoice) => invoice.shopping_mall);
      const uniqueNames = [...new Set(names)];
      res.send({ ok: true, msg: "ModelData", uniqueNames });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ ok: false, msg: "Error", error });
    }
  },
};

module.exports = ShoppingMallController;
