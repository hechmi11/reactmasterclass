const asyncHandler = require("express-async-handler");

const user = require("../models/userModel");

//@[post ,/api/]
const register = asyncHandler(async (req, res) => {
  res.status(200).json({
    test: "hello",
    message: "user created",
  });
});
const login = (req, res) => {
  res.status(200).json({
    message: "login methode from authController",
  });
};
const logout = (req, res) => {
  res.status(200).json({
    message: "login methode from authController",
  });
};
module.exports = {
  register,
  login,
  logout,
};
