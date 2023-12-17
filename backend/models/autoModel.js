const mongoose = require("mongoose");

const autoSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "veillez inserer un token"],
    },
    model: {
      type: String,
      required: [true, "veillez inserer un token"],
    },
    year: {
      type: Number,
      required: [true, "veillez inserer un token"],
    },
    color: {
      type: String,
      required: [true, "veillez inserer un token"],
    },
    energy: {
      type: String,
      required: [true, "veillez inserer un token"],
    },
    hoursepower: {
      type: Number,
      required: [true, "veillez inserer un token"],
    },
    photo: [
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
