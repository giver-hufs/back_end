const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  roomId: { type: Number, required: true, index: true },
  message: { type: String, required: true },
  senderId: { type: String, required: true },
  senderName: { type: String, required: true },
  createdTime: { type: Date, default: Date.now, required: true },
});

const ChatIndivisual = mongoose.model("chat_indivisual", ChatSchema);
export default ChatIndivisual;
