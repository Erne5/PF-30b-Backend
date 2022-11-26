const { Router } = require("express");
const adminMiddleware = require("./admin");
const categoryMiddleware = require("./category");
const userMiddleware = require("./user");
const productMiddleware = require ('./product')
const router = Router();

router.use("/admin", adminMiddleware);
router.use("/category", categoryMiddleware);
router.use("/user", userMiddleware);
router.use('/product', productMiddleware)


module.exports = router;