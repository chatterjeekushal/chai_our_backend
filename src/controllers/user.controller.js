

import { asynchandaler } from "../utils/acync_handaler.js"

import { upload } from "../middlewares/multer.middleware.js"

import { ApiError } from "../utils/api_error.js"

import { User } from "../models/user.model.js"

import { UplordOnCloudinary } from "../utils/clounary.js"

import { ApiResponse } from "../utils/api_responce.js"

import body from "body-parser"



const registerUser = asynchandaler(async (req, res) => {


    const { fullName, email, username, password } = req.body


    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {

        throw new ApiError(400, "all filed are requred")

    }


    const exesituser = await User.findOne({

        $or: [{ username }, { email }]
    })

    if (exesituser) {

        throw new ApiError(409, "user with email or username alrady exsist")
    }

    const avtarlocalpath = req.files?.avatar[0]?.path

    const coverimagelocalpath = req.files?.coverImage[0]?.path


    if (!avtarlocalpath) {

        throw new ApiError(400, "avtar file is requard")
    }


    const avatar = await UplordOnCloudinary(avtarlocalpath)
    const coverImage = await UplordOnCloudinary(coverimagelocalpath)


    if (!avatar) {

        throw new ApiError(400, "avtar is requred")
    }

    const User = await User.create({ fullName, avtar: avatar.url, coverimage: coverImage || "", email, password, username: username.toLowerCase() })

    const createdUser = await User.findById(User._id).select("-password -refreshToken")

    if (!createdUser) {

        throw new ApiError(500, "someting went wrong")
    }


    return res.status(201).json(new ApiResponse(200, createdUser, "user ragister sussufully"))


})

export { registerUser }