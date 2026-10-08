const GetAdminId = ( req ) => {
    return req.user?.userId || null ;
} 

const GetAdminName = ( req )  => {
    return req.user?.fullname || null ;
}

const GetAdminEmail = ( req ) => {
    return req.user?.email || null ;
}

export {
    GetAdminId ,
    GetAdminName ,
    GetAdminEmail 
}