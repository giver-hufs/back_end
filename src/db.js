import mongoose from "mongoose";

mongoose.connect(
  "mongodb://HanGwanJin:12345@ac-7siudz1-shard-00-00.h6a2jbt.mongodb.net:27017,ac-7siudz1-shard-00-01.h6a2jbt.mongodb.net:27017,ac-7siudz1-shard-00-02.h6a2jbt.mongodb.net:27017/?ssl=true&replicaSet=atlas-xv9fr9-shard-0&authSource=admin&retryWrites=true&w=majority",
  { dbName: "giver" }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
