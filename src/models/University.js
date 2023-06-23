const mongoose = require("mongoose");

const UniversitySchema = mongoose.Schema({
  code: Number,
  name: { type: String, index: true },
});

const University = mongoose.model("university", UniversitySchema);
export default University;
