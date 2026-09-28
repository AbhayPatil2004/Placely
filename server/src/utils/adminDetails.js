const GetAdminId = ( req ) => {
    return req.user.userId ;
} 

const GetAdminName = ( req )  => {
    return req.user.fullname ;
}

const GetAdminEmail = ( req ) => {
    return req.user.email ;
}

export {
    GetAdminId ,
    GetAdminName ,
    GetAdminEmail 
}