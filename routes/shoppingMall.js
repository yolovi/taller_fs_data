const express = require("express")
const ShoppingMallController = require("../controllers/ShoppingMallController")
const router = express.Router()

router.post("/", ShoppingMallController.create)
router.get("/invoices", ShoppingMallController.getAllInvoices)
router.get("/id/:_id", ShoppingMallController.getById)
router.get("/shoppingMallsNames", ShoppingMallController.getShoppingMallsNames)


module.exports = router