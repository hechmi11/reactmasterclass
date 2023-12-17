const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "veuillez inserer le champs role"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", tokenSchema);
