const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "response of type get from route /api/products",
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    message: "response of type get from route /api/products",
  });
});
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: "response of type get from route /api/products",
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "response of type get from route /api/products controller",
  });
});

module.exports = router;
