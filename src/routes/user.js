import { Router } from "express"
import { register_controller } from "../controllers/register_controller.js"
import { auth_controller } from "../controllers/auth_controller.js"

const router = Router();

router.post("/register", register_controller);
router.post("/auth", auth_controller);

export default router;
