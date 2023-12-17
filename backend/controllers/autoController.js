const asyncHandler = require("express-async-handler");
const auto = require("../models/autoModel");
const getAuto = asyncHandler(async (req, res) => {
  const autos = await auto.find();

  // @[  GET  /api/auth/token , public,register method]
  res.status(200).json({
    autos,
    message: "getAuto from autoContrrolers",
  });
});

module.exports = {
  getAuto,
};
