import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  /*profileimg: Buffer, */
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true, index: true },
  email: { type: String, required: true },
  phonenumber: { type: String, required: true },
  address: { type: Map, of: String, required: true },
  locationalCode: { type: Number, default: 0 },
});

const User = mongoose.model("users", UserSchema);
export default User;
