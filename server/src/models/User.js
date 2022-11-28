const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredName = {
  type: String,
  required: [true, "Please add a name."],
};

const requiredEmail = {
  type: String,
  required: [true, "Please add an e-mail."],
  unique: true,
};

const requiredUsername = {
  type: String,
  required: [true, "Please add a username."],
  unique: true,
};

const requiredPassword = {
  type: String,
  required: [true, "Please add a password."],
};

const UserSchema = new Schema(
  {
    name: requiredName,
    email: requiredEmail,
    username: requiredUsername,
    password: requiredPassword,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
