const mongoose = require("mongoose");
const assuranceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "veuillez inserer le champ intitulé Assurance"],
    },
    description: {
      type: String,
      required: [true, "veuillez inserer le champ Description"],
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: [true, "veuillez inserer le champ frais assurance/Prix"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Assurannce", assuranceSchema);
