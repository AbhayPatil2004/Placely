import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";

import {
    AddStudentSocket,
    RemoveStudentSocket
} from "./webManager.js";


const InitializeWebSocket = (server) => {

    const wss = new WebSocketServer({
        server
    });


    wss.on("connection", async (ws, req) => {

        try {

            // ==========================================
            // 1. Get accessToken from browser cookies
            // ==========================================

            const cookies = req.headers.cookie;

            if (!cookies) {

                ws.close();

                return;
            }


            const accessToken = cookies
                .split(";")
                .find(cookie =>
                    cookie.trim().startsWith("accessToken=")
                )
                ?.split("=")[1];


            if (!accessToken) {

                ws.close();

                return;
            }


            // ==========================================
            // 2. Verify JWT
            // ==========================================

            const verifyToken = jwt.verify(
                accessToken,
                process.env.JWT_SECRET
            );


            // ==========================================
            // 3. Verify role
            // ==========================================

            if (verifyToken.role !== "student") {

                ws.close();

                return;
            }


            // ==========================================
            // 4. Get student ID
            // ==========================================

            const studentId = verifyToken.userId;


            if (!studentId) {

                ws.close();

                return;
            }


            // ==========================================
            // 5. Store WebSocket connection
            // ==========================================

            AddStudentSocket(
                studentId,
                ws
            );


            console.log(
                `Student ${studentId} connected`
            );


            // ==========================================
            // 6. Send connection confirmation
            // ==========================================

            ws.send(
                JSON.stringify({
                    type: "CONNECTED",
                    message: "WebSocket connected successfully"
                })
            );


            // ==========================================
            // 7. Handle disconnect
            // ==========================================

            ws.on("close", () => {

                RemoveStudentSocket(
                    studentId,
                    ws
                );

                console.log(
                    `Student ${studentId} disconnected`
                );
            });


            // ==========================================
            // 8. Handle WebSocket error
            // ==========================================

            ws.on("error", (error) => {

                console.error(
                    "WebSocket error:",
                    error.message
                );

            });

        } catch (error) {

            console.error(
                "WebSocket authentication failed:",
                error.message
            );

            ws.close();
        }
    });


    console.log(
        "WebSocket server initialized"
    );
};


export default InitializeWebSocket;