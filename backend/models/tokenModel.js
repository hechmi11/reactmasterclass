const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Veuillez inserer un token"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", tokenSchema);
