const express = require("express");
const router = express.Router();

router.route("/login", (req, res) => {
  res.status(200).json({
    message: "login",
  });
});
router.route("/register", (req, res) => {
  res.status(200).json({
    message: "login",
  });
});
router.route("/logout", (req, res) => {
  res.status(200).json({
    message: "login",
  });
});

module.exports = router;
