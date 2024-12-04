const Puser = require("../models/user.model");
const bcryptjs = require("bcryptjs");

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

module.exports = {
  registerUser,
};
