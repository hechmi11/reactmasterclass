const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

// @[ GET/api/auth/user , public,register method]
const getUser = asyncHandler(async (req, res) => {
  const users = await user.find();

  res.status(200).json({
    users,
    message: "getUsers from userContrrolers",
  });
});

module.exports = {
  getUser,
};
