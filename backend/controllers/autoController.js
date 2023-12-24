const asyncHandler = require("express-async-handler");
const auto = require("../models/autoModel");

// @[  GET,  /api/autos/, private,  return all autos ]
const getAutos = asyncHandler(async (req, res) => {
  const autos = await auto.find();
  console.log(autos);
  res.status(200).json({
    autos,
    message: "getAutos method from autoController",
  });
});

// @[ POST,  /api/autos/create,  private,  create new vehicule  ]
const createAuto = asyncHandler(async (req, res) => {
  const newAuto = await auto.create({
    brand: "skoda",
    model: "fabia",
    year: 2014,
    color: "rouge",
    energy: "diesel",
    horsepower: "6",
    photo: [
      "https://images.pexels.com/photos/15194851/pexels-photo-15194851/free-photo-of-skoda-near-water-and-hills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  });
  console.log(newAuto);
  res.status(200).json({
    auto: newAuto,
    message: "getAutos method from autoController",
  });
});

module.exports = {
  getAutos,
  createAuto,
};
