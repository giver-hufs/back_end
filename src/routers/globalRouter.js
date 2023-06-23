import { getUniversityCode } from "../controllers/globalController";

const express = require("express");
const globalRouter = express.Router();

globalRouter.get("/universityCode/:universityName", getUniversityCode);

export default globalRouter;
