const asyncHandler = require("express-async-handler");
const role = require("../models/roleModel");

// @[ GET, /api/roles/, private,  return all roles ]
const getRoles = asyncHandler(async (req, res) => {
  const newRole = await role.create({
    name: "agent saisie",
  });
  // const roles = await role.find();
  console.log(newRole);

  res.status(200).json({
    newRole,
    message: "getRoles method from roleController",
  });
});

module.exports = { getRoles };
