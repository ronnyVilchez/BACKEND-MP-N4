import { Router } from "express";
import { loginEmail } from "../controllers/auth.controller.js";
import { info, verifyToken } from "../middleware/verifyToken.js";

const router = Router()

router.post('/login',loginEmail)
router.get('/info',verifyToken,info)

export default router