const GetStudentId = (req) => {
    return req.user?.userId || null;
};

const GetStudentName = (req) => {
    return req.user?.fullname || null;
};

const GetStudentEmail = (req) => {
    return req.user?.email || null;
};

export {
    GetStudentId,
    GetStudentName,
    GetStudentEmail
};