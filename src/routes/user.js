import { Router } from "express"
import { register } from "../controllers/user_controller.js"

const router = Router();

router.post("/register", register);

export default router;