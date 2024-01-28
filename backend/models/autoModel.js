const mongoose = require("mongoose");
const autoSchema = mongoose.Schema(
  {
    matricule: {
      type: String,
      required: [true, "Veuillez insérer le champ matricule"],
      lowercase: true,
      unique: true,
    },
    carteGrise: {
      type: String,
      required: [true, "Veuillez insérer le champ carte grise"],
      lowercase: true,
      unique: true,
    },
    brand: {
      type: String,
      required: [true, "Veuillez insérer le champ brand"],
    },
    model: {
      type: String,
      required: [true, "Veuillez insérer le champ model"],
    },
    year: {
      type: Number,
      required: [true, "Veuillez insérer le champ year"],
    },
    color: {
      type: String,
      required: [true, "Veuillez insérer le champ color"],
    },
    energy: {
      type: String,
      required: [true, "Veuillez insérer le champ energy"],
    },
    horsepower: {
      type: Number,
      required: [true, "Veuillez insérer le champ horsepower"],
    },
    transmission: {
      type: String,
      required: [true, "Veuillez insérer le champ transmission"],
    },
    nbrSiege: {
      type: Number,
      required: [true, "Veuillez insérer le champ nbrSiege"],
    },
    category: {
      type: String,
      required: [true, "Veuillez insérer le champ category"],
    },
    availible: {
      type: Boolean,
      required: [true, "Veuillez insérer le champ disponibilité"],
      default: true,
    },
    photos: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Auto", autoSchema);
