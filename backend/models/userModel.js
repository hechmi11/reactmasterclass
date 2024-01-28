const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez inserer le champ nom"],
    },
    email: {
      type: String,
      required: [true, "Veuillez inserer le champ email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Veuillez inserer le champ mot de passe"],
    },
    photo: {
      type: String,
    },
    role: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Role",
      },
    ],
    token: {
      type: mongoose.Types.ObjectId,
      ref: "Token",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
