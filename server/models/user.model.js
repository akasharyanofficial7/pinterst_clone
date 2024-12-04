const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Puser",
      },
    ],

    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Puser",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Puser = mongoose.model("Puser", schema);
module.exports = Puser;
