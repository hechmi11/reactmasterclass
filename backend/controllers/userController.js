const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @[ GET, /api/users/all, private, return all users ]
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().populate("role").populate("token").exec();

  //const users = await User.findOne({ email: "ch@gmail.com" });

  res.status(200).json({
    users,
    message: "getUsers from userController",
  });
});

module.exports = {
  getUsers,
};
