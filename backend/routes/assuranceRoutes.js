const express = require("express");

const router = express.Router();

const {
  getAssurances,

  createAssurance,

  deleteAssurance,

  updateAssurance,
} = require("../controllers/assuranceController");

router.get("/", getAssurances);

router.post("/", createAssurance);

router.delete("/:id", deleteAssurance);

router.put("/:id", updateAssurance);

module.exports = router;
