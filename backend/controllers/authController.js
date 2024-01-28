const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const tokenKey = process.env.TOKEN_KEY;
const User = require("../models/userModel");
const Role = require("../models/roleModel");
const Token = require("../models/tokenModel");
// const transporter = require("../services/mail");

// generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, tokenKey, { expiresIn: "4d" });
};

// @[  POST,  /api/auth/register, public,  register new user ]
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    },
  });
});
// @[  POST,  /api/auth/login, public,  sign in user ]
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // const users = await User.find();

  console.log(user);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
      message: "user connected success",
    });
  } else {
    res
      .status(400)
      .json({ email, password, message: "Identifiants invalides" });
  }
});

// @[  get,  /api/auth/logout, private,  sign out user ]
const logout = asyncHandler(async (req, res) => {
  const { email } = req.body;
  res.json({ email, msg: "logout with success" });
});

const sendEmail = asyncHandler(async (req, res) => {
  //res.json({ msg: "send mail" });
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean().exec();
  const products = [
    {
      productId: "1w0987654ty5",
      productName: "Skoda Fabia blanche annee 2023  ",
      price: "130 Tnd/jour",
    },
  ];
  try {
    transporter.sendMail(
      {
        from: "Renter car <sales@rent-car.tn",
        to: "karim@gmail.com",
        subject: "Confirmation commande !",
        template: "email_template",
        context: {
          name: "Ben Mohamed Karim",
          products: products,
        },
      },
      () => {
        res.status(200).send("Email sent");
      }
    );
  } catch {
    return res.status(400).send("Email not sent");
  }
});
const uploadFile = asyncHandler(async (req, res) => {
  // use of multer
  const { email } = req.body;
  const { avatar } = req.file;
  console.log(req.file, req.body);
  res.json({ email, msg: "req file " });
});
module.exports = {
  register,
  login,
  logout,
  sendEmail,
  uploadFile,
};

// const loggedUser = await user.findOne({ email: "ch@gmail.com" });
//   // update token
//   const newToken = await token.create({
//     key: generateToken(loggedUser.id, loggedUser.role),
//   });

//   loggedUser.token = newToken;
//   loggedUser.save();

//   res.status(200).json({
//     loggedUser,
//     message: "login method from authController",
//   });

// const newRole = await role.findOne({ name: "admin" });

// hash password
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash("12345678", salt);

// const newUser = await user.create({
//   name: "ch",
//   email: "ch@gmail.com",
//   password: hashedPassword,
//   role: newRole,
// });

// // creation du nouveau token dans la table token
// const newToken = await token.create({
//   key: generateToken(newUser.id, newUser.role),
// });

// // affectation du token creé
// newUser.token = newToken;
// newUser.save();

// console.log(newUser);

// res.status(200).json({
//   role: newRole,
//   token: newToken,
//   user: newUser,
//   message: "user created ",
// });

// const loggedUser = await user.findOne({ email: "ch@gmail.com" });
// // delete token
// const loggedUserToken = await token.findById(loggedUser.token);
// const deleted = await loggedUserToken.deleteOne();

// loggedUser.token = null;
// loggedUser.save();

// res.status(200).json({
//   deleted,
//   loggedUserToken,
//   loggedUser,
//   message: "logout method from authController",
// });
