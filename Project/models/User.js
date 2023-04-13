const mongoose = require("mongoose");

//Irá dar o nome à collection(No plural)
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

module.exports = User;
