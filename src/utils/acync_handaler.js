


 function asynchandaler(requesthandaler){

    (req,res,next)=>{

        Promise.resolve(requesthandaler(req,res,next)).catch((err)=>next(err))
    }

}



export default asynchandaler