const jwt = require("jsonwebtoken");
const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "15h",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 60 * 1000,
    httpOnly: true,
  });
};

module.exports = generateToken;
