const asyncHandler = require("express-async-handler");
const token = require("../models/tokenModel");

// @[  GET  /api/auth/Token  , public,register method]
const getToken = asyncHandler(async (req, res) => {
  const newToken = await token.find();

  res.status(200).json({
    newToken,
    message: "getUsers from tokenContrrolers",
  });
});

module.exports = {
  getToken,
};
