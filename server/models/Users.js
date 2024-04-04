const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: String,
  sname: String,
  email: String,
});

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
