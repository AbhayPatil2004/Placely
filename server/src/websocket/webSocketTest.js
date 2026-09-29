import WebSocket from "ws";

const socket = new WebSocket(
    "ws://localhost:5000"
);

socket.on("open", () => {

    console.log(
        "WebSocket connected"
    );

});

socket.on("message", (message) => {

    console.log(
        "Message received:",
        JSON.parse(message.toString())
    );

});

socket.on("close", () => {

    console.log(
        "WebSocket disconnected"
    );

});

socket.on("error", (error) => {

    console.error(
        "WebSocket error:",
        error.message
    );

});