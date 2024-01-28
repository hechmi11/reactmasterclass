const asyncHandler = require("express-async-handler");
const Assurance = require("../models/assuranceModel");

const getAssurances = asyncHandler(async (req, res) => {
  const assurances = await Assurance.find();
  res.status(200).json({
    assurances,
    message: "getAssurances methode from assuranceController",
  });
});
const deleteAssurance = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Assurance.findByIdAndDelete(id);

  res.status(200).json({
    id,
    deleted,
    message: "DELETE method from assuranceController",
  });
});
const createAssurance = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  const assurance = await Assurance.create({
    title,
    description,
    price: Number(price).toFixed(3),
  });
  res.status(200).json({
    assurance,
    message: "createAssurances methode from assuranceController",
  });
});
const updateAssurance = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  const assurance = await Assurance.findByIdAndUpdate(
    id,
    { title, description, price: Number(price).toFixed(3) },
    { new: true }
  );
  res.status(200).json({
    assurance,
    message: "updateAssurances methode from assuranceController",
  });
});
module.exports = {
  getAssurances,
  createAssurance,
  deleteAssurance,
  updateAssurance,
};
