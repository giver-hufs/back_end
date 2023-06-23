const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  code: Number,
  dong: { type: String, index: true },
});

const Location = mongoose.model("location", LocationSchema);
export default Location;
