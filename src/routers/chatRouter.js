import { getRequests } from "../controllers/chatController";

const express = require("express");
const globalRouter = express.Router();

globalRouter.get("/:universityCode/getrequests", getRequests);

export default globalRouter;
