const express = require("express");
const router = express.Router();
const { getToken } = require("../controllers/tokenController");

router.get("/", (req, res) => {
  res.json({ msg: "token route" });
});

module.exports = router;
