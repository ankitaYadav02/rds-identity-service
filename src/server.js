import dotenv from "dotenv";
import express from "express";
import user from "./user/Routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use("/", user);

server.listen(port, (req, res) => {
  console.log(`server is listen at ${port} port `);
});
