const connectedStudents = new Map();


const AddStudentSocket = (studentId, ws) => {

    connectedStudents.set(
        studentId.toString(),
        ws
    );

};


const RemoveStudentSocket = (studentId, ws) => {
    const key = studentId.toString();

    if (connectedStudents.get(key) === ws) {
        connectedStudents.delete(key);
    }

};


const SendToStudent = (studentId, data) => {

    const ws = connectedStudents.get(
        studentId.toString()
    );


    if (!ws) {
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