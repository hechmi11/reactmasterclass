const asyncHandler = require("express-async-handler");
const role = require("../models/userModel");

// @[   GET   /api/auth/role , public,register method]
const getRole = asyncHandler(async (req, res) => {
  // const role = await role.find();
  const newRole = await role.create({
    name: "admin",
  });

  console.log(newRole);
  res.status(200).json({
    role,
    message: "getRole from roleControllers",
  });
});

module.exports = {
  getRole,
};
