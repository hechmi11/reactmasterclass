const asyncHandler = require("express-async-handler");
const token = require("../models/tokenModel");

// @[ GET, /api/tokens/, private,  return all tokens ]
const getTokens = asyncHandler(async (req, res) => {
  const tokens = await token.find();

  res.status(200).json({
    tokens,
    message: "getTokens method from tokenController",
  });
});

module.exports = {
  getTokens,
};
