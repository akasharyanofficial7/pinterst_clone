const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectedDb = require("./db/db.js");
dotenv.config();

const userRoute = require("./routes/user.route.js");

//middleware
app.use(express.json());
//routes
app.use("/api/user", userRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectedDb();
  console.log(" THE PORT IS 3000");
});
