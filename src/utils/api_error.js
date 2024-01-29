
class ApiError extends Error{


    constructor(statuscode,massage="some think wrong",errors=[],statck=""){

        super(massage)

        this.statuscode=statuscode;
        this.data=null;
        this.message=massage;
        this.success=false;
        this.errors=errors;

        if(statck){

            this.stack=statck
        }else{

            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export default ApiError