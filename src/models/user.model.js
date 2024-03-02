
import mongoose from "mongoose";

import jwt from "jsonwebtoken"; // jwt use for web tokens

import bcrypt from "bcrypt" // bcrypt use for convart non read human password 

const userschema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, // jaodi kono flid k search abel banata hoi taha tar fild a index true koro

    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,


    },

    fullname: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, // jaodi kono flid k search abel banata hoi taha tar fild a index true koro

    },

    avater: {

        type: String,
        required: true,
    },

    coverimage: {

        type: String,

    },

    WachHistory: [{

        type: Schema.Types.ObjectId,
        ref: "Video"
    }],

    password: {

        type: String,
        required: [true, "password is required"]
    },

    refreshToken: {

        type: String,
    }



}, { timestamps: true })


// convart normal password to hash password 

userschema.pre("save", async function (next) {

    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)

    next()



})

// compare normal password to hash password

userschema.methods.isPasswordCorrect = async function (password) {

    return await bcrypt.compare(password, this.password)
}

userschema.methods.generateAccessToken =  function () {

   return jwt.sign({

        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname

    },
     process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })


}






userschema.methods.generateRefreshToken = async function () { return jwt.sign({

    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname

},
process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY})

}


export const Userdetails = mongoose.model("User",userschema);

 