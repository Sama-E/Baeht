import express from "express";
import {
  createHService,
  deleteHService,
  getHService,
  getHServices
} from "../controllers/hservice.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createHService);
router.delete("/:id", verifyToken, deleteHService);
router.get("/single/:id", getHService);
router.get("/", getHServices);

export default router;