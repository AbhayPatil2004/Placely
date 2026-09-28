const connectedStudents = new Map();


const AddStudentSocket = (studentId, ws) => {

    connectedStudents.set(
        studentId.toString(),
        ws
    );

};


const RemoveStudentSocket = (studentId) => {

    connectedStudents.delete(
        studentId.toString()
    );

};


const SendToStudent = (studentId, data) => {

    const ws = connectedStudents.get(
        studentId.toString()
    );


    if (!ws) {

        console.log(
            `Student ${studentId} is not connected`
        );

        return false;
    }


    if (ws.readyState !== 1) {

        connectedStudents.delete(
            studentId.toString()
        );

        return false;
    }


    ws.send(
        JSON.stringify(data)
    );

    return true;
};


export {
    AddStudentSocket,
    RemoveStudentSocket,
    SendToStudent
};