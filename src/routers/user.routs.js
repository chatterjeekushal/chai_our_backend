

import { Router } from "express";

import { ragisterUser } from "../controllers/user.controller.js"

import { upload } from "../middlewares/multer.middleware.js";

const router = Router()


//router.route("/register").post(ragisterUser)

router.post('/register', upload.fields([{ name: "avtar", maxCount: 1, }, { name: "coverImage", maxCount: 1, }]), (req, res) => {

    ragisterUser(req, res)

})



export default router

