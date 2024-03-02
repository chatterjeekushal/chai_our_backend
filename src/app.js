

import express from "express"

import cors from "cors"

import cookieParser from "cookie-parser"

const app = express()

app.use(cors({

    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"10kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())





//routes import


import userRouter from './routers/user.routs.js'



// routs deklarasan

app.use("/api/v1/users",userRouter) //syntax app.use("routename","route file name")

//url https://localhost:3000/api/v1/users/register





export default app