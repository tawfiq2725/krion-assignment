const productCtrl = require("../controller/productCtrl");
const express = require("express");
const router = express.Router();

router.post("/save", productCtrl.saveProduct);
router.get("/get/:id", productCtrl.getProduct);
router.delete("/delete/:id", productCtrl.deleteProduct);

module.exports = router;
