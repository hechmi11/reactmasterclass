const mongoose = require("mongoose");

const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "veuillez inserer le champs role"],
    },
    updeatedBy: {
      type: String,
      default: "admin",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", roleSchema);
