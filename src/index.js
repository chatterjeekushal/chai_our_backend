
//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

import express from "express";

import connectDB from "./db/index.js";

import app from "./app.js"


dotenv.config({

    path: './env'
})




// data base connection first mathod code

connectDB()

    .then(() => {


       

        // EXPRESS SERVER CREATE

        app.listen(process.env.PORT || 3000, () => {

            console.log(`server is running port ${process.env.PORT}`);
        })


        app.on("error", (error) => {

            console.log(`express erroe`, error);
            throw error
        })


        // give me error when express app is failed

       


    })
    .catch((error) => {

        console.log("mongodb connetion faild !!! ", error);
    })

  













/*
(async ()=>{

try {


 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

app.on("error",()=>{

    console.log(" express error",error);
    throw error
})

 app.listen(process.env.PORT,()=>{

    console.log(`APP IS LISNING PORT ${PORT}`);
})

    
} catch (error) {

    console.log("erroe",error);
    
    throw error
}


})()

*/
