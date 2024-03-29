
import mongoose from "mongoose";

import { DB_NAME } from "../contants.js";


async function connectDB() {


    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n Mongodb connected !! DB HOST:${connectionInstance.connection.host} ${DB_NAME}`);

    } catch (error) {

        console.log("MONGO DB connection error", error);
        process.exit(1)
    }

}


export default connectDB