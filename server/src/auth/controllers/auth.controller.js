// import Student from "../../student/models/student.model.js";
// import TPUser from "../../tp/models/tp.model.js";
// import ApiResponse from "../../utils/apiResponse.js";
// import ApiError from "../../utils/apiError.js";
// import jsonwebtoken from 'jsonwebtoken'
// import bcryptjs from 'bcrypt'



// async function tpSignup( req , res ){

//     try{

//         const { username , email , password } = req.body() ;
//         if( !username ){
//             return ApiError( 500 , "Username is Required " , {});
//         }
//         if( !email ){
//             return ApiError( 500 , "Username is Required " , {});
//         }
//         if( !password ){
//             return ApiError( 500 , "Username is Required " , {});
//         }

//         const isExits = TPUser.find{ email : email }
//         if( isExits ){
//             return ApiError( 500 , "Accound already Exits with these Email " , {});
//         }




//     }
//     catch(error){
//         return ApiError( 500 , error , {} );
//     }
// }