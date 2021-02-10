const mongoose = require("mongoose");

// Schema
let textSchema = mongoose.Schema({
  id: { type: String /*, required: true*/ },
  nick: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  category: { type: String },
  title: { type: String },
  content: { type: String },
  location: { type: String },
  date: { type: Date, default: Date.now },
  image: [{ type: String }],
  favorite: { type: Boolean },
  temp: { type: Boolean },
});

let Text = mongoose.model("texts", textSchema);

module.exports = Text;
