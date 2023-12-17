const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuiller inserer le champ Nom"],
    },
    email: {
      type: String,
      required: [true, "Veuiller inserer le champ E-mail"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Veuiller inserer le champ mot de passe"],
      select: false,
    },
    role: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Role",
      },
    ],
    Token: {
      type: mongoose.Types.ObjectId,
      ref: "Token",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
