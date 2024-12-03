const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(" THE PORT IS 3000");
});
