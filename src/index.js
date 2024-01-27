
 //require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

import  express  from "express";

import connectDB from "./db/index.js";


dotenv.config({

    path:'./env'
})




// data base connection first mathod code

connectDB()


















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
