const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

router.get("/", register);

// @[/api/auth/login , public,connextion method]

router.get("/login", login);

// @[/api/auth/register , private,signout method]

router.get("/logout", logout);

module.exports = router;
