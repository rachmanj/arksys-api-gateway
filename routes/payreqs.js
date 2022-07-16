const express = require("express");
const router = express.Router();

const payreqsHandler = require("./handler/payreqs");
const verifyToken = require("../middlewares/verifyToken");

router.get("/bucs", payreqsHandler.getBucs);
router.post("/bucs", payreqsHandler.createBuc);

module.exports = router;
