const mongoose = require("mongoose");

// Schema
let userSchema = mongoose.Schema({
  id: { type: String /*, required: true*/ },
  nick: { type: String },
  sex: { type: String },
  age: { type: Number },
  wirtten_text: { type: mongoose.Schema.Types.ObjectId, ref: "texts" },
  favorite_text: { type: mongoose.Schema.Types.ObjectId, ref: "texts" },
  temp_text: { type: mongoose.Schema.Types.ObjectId, ref: "texts" },
});

let User = mongoose.model("users", userSchema);

module.exports = User;
