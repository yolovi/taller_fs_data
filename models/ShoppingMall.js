const mongoose = require("mongoose");

const ShoppingMallSchema= new mongoose.Schema({
  shopping_mall: {
    type: String,
    required: true,
  },
  paid: {
    type: Number,
    //required: true,
  },
  lat: {
    type: Number,
   // required: true,
  },
  lon: {
    type: Number,
    //required: true,
  },
  invoice_no: {
    type: String,
    //required: true,
  },
  customer_id: {
    type: String,
    //required: true,
  },
  gender: {
    type: String,
    //required: true,
  },
  age: {
    type: Number,
    //required: true,
  },
  category: {
    type: String,
    //required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    //required: true,
  },
  payment_method: {
    type: String,
    //required: true,
  },
  invoice_date: {
    type: Date,
    //required: true,
  },
});

const ShoppingMall = mongoose.model("ShoppingMall", ShoppingMallSchema);

module.exports = ShoppingMall;
