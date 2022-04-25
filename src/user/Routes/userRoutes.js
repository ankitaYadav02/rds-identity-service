import express from "express";
import {
  getHealthControllers,
  getProfileControllers,
  verifyUserControllers,
} from "../Controllers/userControllers.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  getHealthControllers(req, res);
});

router.get("/profile", async (req, res) => {
  getProfileControllers(req, res);
});

router.post("/verification", async (req, res) => {
  verifyUserControllers(req, res);
});

export default router;
