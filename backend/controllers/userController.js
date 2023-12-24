const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

// @[ GET, /api/users/all, private, return all users ]
const getUsers = asyncHandler(async (req, res) => {
  const users = await user.find().populate("role").populate("token").exec();

  res.status(200).json({
    users,
    message: "getUsers from userController",
  });
});

module.exports = {
  getUsers,
};
