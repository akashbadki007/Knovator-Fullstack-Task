const express = require("express");
const router = express.Router();
const { getProducts } = require("../Controllers/productController");
const  {placeOrder}  = require("../Controllers/orderController");


router.get("/fetchproducts", getProducts);
router.post("/placeorder", placeOrder);

module.exports = router;
