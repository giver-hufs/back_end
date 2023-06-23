import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true, index: true },
  phonenumber: { type: String, required: true },
  universityCode: { type: Number, required: true },
  major: { type: String, required: true },
});

const User = mongoose.model("users", UserSchema);
export default User;
