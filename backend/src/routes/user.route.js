import { Router } from "express";
import { getAllUsers } from "../controller/user.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);

router.get("/", getAllUsers);

export default router;
