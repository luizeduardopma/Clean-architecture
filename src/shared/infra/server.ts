import express from "express";
import cors from "cors";
import "../../config/dotenv";
import { isProduction } from "../../config/isProduction";
import { router } from "./http/api/api.routes";

const origin = {
  origin: isProduction() ? "https://cleanachitecture.com" : "*",
};

const server = express();
server.use(cors());
server.use(express.json());
server.use(router);

const port = process.env.PORT || 5000;

export { server, port, origin };
