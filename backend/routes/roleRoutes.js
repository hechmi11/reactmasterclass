const express = require("express");
const router = express.Router();
const { getRole } = require("../controllers/roleController");

router.get("/", getRole);

module.exports = router;
