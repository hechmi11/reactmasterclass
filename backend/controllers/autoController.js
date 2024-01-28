const asyncHandler = require("express-async-handler");
const Auto = require("../models/autoModel");

// @[  GET,  /api/autos/, private,  return all autos ]
const getAutos = asyncHandler(async (req, res) => {
  const autos = await Auto.find();
  console.log(autos);
  res.status(200).json({
    autos,
    message: "getAutos method from autoController",
  });
});

// @[ POST,  /api/autos/create,  private,  create new vehicule  ]
const createAuto = asyncHandler(async (req, res) => {
  const {
    matricule,
    carteGrise,
    brand,
    model,
    year,
    color,
    energy,
    horsepower,
    transmission,
    nbrSiege,
    category,
    availible,
    photos,
  } = req.body;
  const newAuto = await Auto.create({
    matricule,
    carteGrise,
    brand,
    model,
    year,
    color,
    energy,
    horsepower,
    transmission,
    nbrSiege,
    category,
    availible,
    photos,
  });
  console.log(newAuto);
  res.status(200).json({
    auto: newAuto,
    message: "getAutos method from autoController",
  });
});


// @[  GET,  /api/autos/query, private,  return all autos ]
const getAutoQuery = asyncHandler(async (req, res) => {
  const { model, brand, color } = req.query;

  let chaineDeRecherche = {};

  if (model) {
    chaineDeRecherche.model = model;
  }
  if (brand) {
    chaineDeRecherche.brand = brand;
  }
  if (color) {
    chaineDeRecherche.color = color;
  }

  console.log(chaineDeRecherche);
  const autos = await Auto.find(chaineDeRecherche);

  console.log(autos);
  res.status(200).json({
    autos,
    message: "getAutoQuery filtrage dynamique ",
  });
});
module.exports = {
  getAutos,
  createAuto,
  getAutoQuery,
};
