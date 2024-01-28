const express = require("express");
const router = express.Router();
// const { auth } = require("../middlewares/authMiddleware");
// const multer = require("multer");
// const upload = multer({ dest: "./public/uploads/" });
const {
  register,
  login,
  logout,
  sendEmail,
  uploadFile,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/send-email", auth, sendEmail);
// router.post("/upload-file", upload.single("avatar"), uploadFile);

module.exports = router;

////(use state) ki tkouchi ll chekbox t5arej ll agence de resitution
