import executeCpp from "../services/docker.cpp.service.js";
import executeJava from "../services/docker.java.service.js";

const executeCode = async ( req , res ) =>{

    try{
        const {
            language , 
            code ,
            input = "" 
        } = req.body ;

        if( !language ){
            return res.status(400).json({
                success : false ,
                message : "Languge is Required"
            })
        }
        if( !code ){
            return res.status(400).json({
                success : false ,
                message : "Code is Required"
            })
        }

        let result = "" 

        if( language === "cpp" ){
            result = await executeCpp( code , input )
        }
        else if( language == "java" ){
            result = await executeJava( code , input )
        }
        else if( language == "js" ){

        }
        else if( language == "py" ){

        }
        else{
            return res.status(400).json(
                {
                    success : false ,
                    message : "Please Select Correct Programing language"
                }
            )
        }

        return res.status(200).json(
            {
                success : true ,
                message : "Code Executed Succesfully" ,
                result 
            }
        )

        
    }
    catch(error){
        return res.status(500).json({
            success : false ,
            message: "Code execution failed"

        })
    }
}

export default executeCode