import asynchandaler from "../utils/acync_handaler.js";

import {Userdetails} from "../models/user.model.js";

import body from "body-parser";

import ApiError from "../utils/api_error.js";

import { upload } from "../middlewares/multer.middleware.js";

import { UplordOnCloudinary } from "../utils/clounary.js";



const ragisterUser = asynchandaler(async (req, res) => {


    // ragister user

    // get user detiles
    //validasan - not emty
    //cheack if user exists username and email
    // cheack for images cheack for after
    // uplord them cloudinary,avter
    //create a user object - create entey in db
    //remove password and refresh token feild from responce
    //cheack for user create
    // return responce

const {fullName,username,email,password}=req.body

console.log(email);

if ([fullName,email,username,password].some((field)=> field?.trim()==="")) {
    
    throw new ApiError(400,"All filed are requird")

}

const existedUser = User.findOne({

    $or:[{username},{email}]
})

if (existedUser) {
    throw new ApiError(409,"User with email or username already exists")
}

const avatarLocalPath=req.files?.avatar[0]?.path;

const coverImageLocalPath = req.files?.coverImage[0]?.path;

if (!avatarLocalPath) {
    
    throw new ApiError(400,"avatar file is reqired")
}

const avatar = await UplordOnCloudinary(avatarLocalPath)

const coverimage = await UplordOnCloudinary(coverImageLocalPath)


if (!avatar) {
    throw new ApiError(400,"avatar file is reqired")
}

Userdetails.create({fullName,avatar:avatar.url,coverimage:coverimage?.url||"",email,username:username.toLowerCase()})



})


export { ragisterUser }