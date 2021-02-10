const mongoose = require("mongoose");

// Schema
let locationSchema = mongoose.Schema({
  first_area: { type: String },
  second_area: { type: String },
  // third_area: { type: String },
});

let Location = mongoose.model("locations", locationSchema);

module.exports = Location;
