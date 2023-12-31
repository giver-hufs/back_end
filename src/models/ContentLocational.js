const mongoose = require("mongoose");

const ContentLocationalSchema = mongoose.Schema({
  roomId: { type: Number, required: true, index: true },
  universityCode: { type: Number, required: true, index: true },
  contentName: { type: String, required: true, index: true },
  content: { type: String, required: true },
  hostName: { type: String, required: true }, // id
  giverName: { type: String },
  phoneNumber: { type: String, required: true },
  createdTime: { type: Date, default: Date.now, required: true },
  lat: { type: Number },
  lon: { type: Number },
});

const ContentLocational = mongoose.model(
  "content_locational",
  ContentLocationalSchema
);
export default ContentLocational;
