const express = require("express");
const router = express.Router();
const {
  getAutos,
  createAuto,
  getAutoQuery,
} = require("../controllers/autoController");

router.get("/", getAutos);
router.get("/query", getAutoQuery);
router.post("/", createAuto);
module.exports = router;
