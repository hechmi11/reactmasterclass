const express = require("express");
const router = express.Router();
const { getAutos } = require("../controllers/autoController");

router.get("/", getAutos);

module.exports = router;
