const UserModel = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists, you can log in.",
        success: false,
      });
    }

    // Create a new user instance
    const userModel = new UserModel({ name, email });
    userModel.password = await bcrypt.hash(password, 10);

    // Save the new user to the database
    await userModel.save();

    return res
      .status(201)
      .json({ message: "Signup successful", success: true });
  } catch (error) {
    console.error("Signup error:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    const errorMessage = "Auth failed, email or password is wrong";
    if (!existingUser) {
      return res.status(403).json({
        message: errorMessage,
        success: false,
      });
    }
    isPasswordEqual = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordEqual) {
      return res.status(403).json({
        message: errorMessage,
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { email: existingUser.email, _id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: existingUser.name,
    });
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signUp,
  login,
};
