import { Router } from "express";
import { createNewUser, editNewUser, userInfo } from "../controllers/user.controller.js";
import { uploadImage } from "../config/multer.js";

const router = Router()

router.get('/:id',userInfo)
router.post('/',createNewUser)
router.patch('/:id',uploadImage.single('image'),editNewUser)

export default router