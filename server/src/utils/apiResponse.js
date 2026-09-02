class ApiResponse{

    constructor( statusCode , message , daat = null ){
        this.success = statusCode < 400 ,
        this.statusCode = statusCode ;
        this.message = message ,
        this.data = data 
    }
}

export default ApiResponse ;