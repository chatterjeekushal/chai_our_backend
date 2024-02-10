
import { v2 as cloudinary } from "cloudinary";

import fs from "fs";




cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET,
});


const UplordOnCloudinary=async (LocalFilePath)=>{


try {

    if(!LocalFilePath) return null

    // uplord file on clouddinary

 const responce = await cloudinary.uploader.upload(LocalFilePath,{

        resource_type:"auto"
    })

    // file has been uploded successfully

    console.log("file is uplored on cloudinary",responce.url);

    return responce
    
} catch (error) {


    fs.unlinkSync(LocalFilePath) // remove the localy saved tempory file as the uplord opration got failed

    return null;
    
}

}


export {UplordOnCloudinary};




