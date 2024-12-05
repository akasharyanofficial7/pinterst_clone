const Puser = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const Trycatch = require("../utils/trycatch");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await Puser.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already registered" });
    }
    const hashpassword = await bcryptjs.hash(password, 8);

    user = await Puser.create({
      name,
      email,
      password: hashpassword,
    });

    res.status(201).json({
      user,
      message: "User is registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "We got an error while registering the user",
      error: error.message,
    });
  }
};
const loginuser = Trycatch(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await Puser.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found on this email" });
  }

  // Compare the password
  const comparepassword = await bcryptjs.compare(password, user.password);
  if (!comparepassword) {
    return res.status(400).json({ message: "Wrong password" });
  }

  generateToken(user._id, res);

  // If password matches, send success response
  return res.status(200).json({
    message: "Login successful",
    user,
  });
});

module.exports = {
  registerUser,
  loginuser,
};
