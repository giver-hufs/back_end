import { getRequests } from "../controllers/chatController";

const express = require("express");
const chatRouter = express.Router();

chatRouter.get("/:universityCode/getrequests", getRequests);

export default chatRouter;
