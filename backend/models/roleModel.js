const mongoose = require("mongoose");
const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez inserer le champ role"],
    },
    updatedBy: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", roleSchema);
