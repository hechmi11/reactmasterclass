const express = require("express");
const router = express.Router();
const { getAuto } = require("../controllers/autoController");

router.get("/", getAuto);

module.exports = router;
