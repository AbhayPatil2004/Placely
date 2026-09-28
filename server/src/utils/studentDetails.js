const GetStudentId = ( req ) => {
    return req.user.userId ;
} 

const GetStudentName = ( req ) => {
    return req.user.fullname ;
}

const GetStudentEmail = (req) => {
    return req.user.email ;
}

export {
    GetStudentId ,
    GetStudentName ,
    GetStudentEmail 
}