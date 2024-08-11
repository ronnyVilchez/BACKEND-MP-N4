import { Router } from "express";
import { createNewUser, editNewUser, userInfo } from "../controllers/user.controller.js";

const router = Router()

router.get('/:id',userInfo)
router.post('/',createNewUser)
router.patch('/:id',editNewUser)

export default router