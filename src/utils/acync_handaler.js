


 function asynchandaler(requesthandaler){

   return (req,res,next)=>{

        Promise.resolve(requesthandaler(req,res,next)).catch((err)=>next(err))
    }

}



export { asynchandaler }