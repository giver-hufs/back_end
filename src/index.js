//import "dotenv/config";
import "./db";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import userRouter from "./routers/userRouter";
// import globalRouter from "./routers/globalRouter";
// import restaurantRouter from "./routers/restaurantRouter";
// import chatRouter from "./routers/chatRouter";
// import searchRouter from "./routers/searchRouter";

const app = express();

const server = require("http").createServer(app);

// const initializeSocket = require("./socket");
// initializeSocket(server);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("tiny"));
// app.use("/", globalRouter);
app.use("/user", userRouter);
// app.use("/chat", chatRouter);
// app.use("/restaurant", restaurantRouter);
// app.use("/search", searchRouter);
server.listen(8080, "0.0.0.0", () => console.log("✅  Server Ready!"));
