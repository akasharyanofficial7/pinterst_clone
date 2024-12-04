const mongoose = require("mongoose");

const connectedDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.log("WE GOT ERROR TO CONNECT MONGO DB");
  }
};
module.exports = connectedDb;
