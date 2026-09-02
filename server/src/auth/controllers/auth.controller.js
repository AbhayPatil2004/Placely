import Student from "../../student/models/student.model.js";
import TPUser from "../../tp/models/tp.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import ApiError from "../../utils/apiError.js";
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'


async function tpSignup(req, res) {
    try {
        const { username, email, password, collegeId } = req.body;

        if (!collegeId) {
            return res.status(400).send(
                ApiError(400, "CollegeId is required", {})
            );
        }

        if (!username) {
            return res.status(400).send(
                ApiError(400, "Username is required", {})
            );
        }

        if (!email) {
            return res.status(400).send(
                ApiError(400, "Email is required", {})
            );
        }

        if (!password) {
            return res.status(400).send(
                ApiError(400, "Password is required", {})
            );
        }

        const isExists = await TPUser.findOne({ email });

        if (isExists) {
            return res.status(409).send(
                ApiError(409, "Account already exists with this email", {})
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await TPUser.create({
            collegeId,
            username,
            email,
            password: hashedPassword,
            isVerified: false,
            status: "PENDING"
        });

        return res.status(201).send(
            ApiResponse(
                201,
                "TP signup request sent successfully. Waiting for admin approval.",
                {}
            )
        );

    } catch (error) {
        return res.status(500).send(
            ApiError(500, error.message, {})
        );
    }
}