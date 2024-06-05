const express = require("express")
const ShoppingMallController = require("../controllers/ShoppingMallController")
const router = express.Router()

router.post("/", ShoppingMallController.create)
router.get("/shoppingdata", ShoppingMallController.getAllShoppingData)
router.get("/invoices", ShoppingMallController.getAllInvoices)
router.get("/id/:_id", ShoppingMallController.getById)
module.exports = router