const { signUp, login } = require("../Controllers/authController");
const {
  signUpValidation,
  loginValidation,
} = require("../Middlewares/validation");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signUp", signUpValidation, signUp);

module.exports = router;
