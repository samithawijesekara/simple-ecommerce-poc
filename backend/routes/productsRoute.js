const express = require("express");
const router = express.Router();

const {
  getProductList,
  getCartList,
  addCartItems,
} = require("../controllers/productsController");

router.get("/", getProductList);
router.get("/cart", getCartList);
router.post("/cart/add", addCartItems);

module.exports = router;
