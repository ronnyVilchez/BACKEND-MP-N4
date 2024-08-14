import { Router } from "express";
import { createNewUser, editNewUser, userInfo,imageProfile } from "../controllers/user.controller.js";
import { uploadImage } from "../config/multer.js";

const router = Router()

router.get('/:id',userInfo)
router.post('/',createNewUser)
router.patch('/:id',uploadImage.single('photo'),editNewUser)
router.get('/image/:filename',imageProfile)

export default router