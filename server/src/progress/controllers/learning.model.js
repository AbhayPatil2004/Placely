import LearningProgress from "../models/learning.model.js";
import { GetStudentId } from "../../utils/studentDetails.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import Student from "../../student/models/student.model.js";

const AddLearningProgress = async (req, res) => {
    try {
        const studentId = GetStudentId(req);

        const { subject, topicId, topic } = req.body;

        // --------------------------------------------------
        // Validate studentId
        // --------------------------------------------------

        if (!studentId) {
            return res.status(401).json(
                new ApiError(401, "Student authentication required", {})
            );
        }

        // --------------------------------------------------
        // Verify student exists
        // --------------------------------------------------

        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json(
                new ApiError(404, "Student not found", {})
            );
        }

        // --------------------------------------------------
        // Validate required fields
        // --------------------------------------------------

        if (!subject || !topicId || !topic) {
            return res.status(400).json(
                new ApiError(400, "All fields are required", {})
            );
        }

        // --------------------------------------------------
        // Validate subject
        // --------------------------------------------------

        const validSubjects = [
            "Object Oriented Programming",
            "Computer Networks",
            "DataBase Management System",
            "Software Engineering",
            "Operating System",
            "Quantitative Aptitude",
            "Verbal Aptitude",
            "Logical Aptitude"
        ];

        if (!validSubjects.includes(subject)) {
            return res.status(400).json(
                new ApiError(400, "Invalid Subject", {})
            );
        }

        // --------------------------------------------------
        // Validate topicId
        // --------------------------------------------------

        if (!topicId) {
            return res.status(400).json(
                new ApiError(400, "Invalid topicId", {})
            );
        }

        // --------------------------------------------------
        // Find student's progress document
        // --------------------------------------------------

        let learningProgress = await LearningProgress.findOne({
            studentId
        });

        // --------------------------------------------------
        // If progress document doesn't exist
        // --------------------------------------------------

        if (!learningProgress) {
            learningProgress = await LearningProgress.create({
                studentId,
                subjects: [
                    {
                        subject,
                        topics: [
                            {
                                topicId,
                                topic,
                                isCompleted: true,
                                completedAt: new Date()
                            }
                        ]
                    }
                ]
            });

            return res.status(201).json(
                new ApiResponse(
                    201,
                    learningProgress,
                    "Learning progress added successfully"
                )
            );
        }

        // --------------------------------------------------
        // Find subject
        // --------------------------------------------------

        const subjectIndex = learningProgress.subjects.findIndex(
            (item) => item.subject === subject
        );

        // --------------------------------------------------
        // Subject doesn't exist
        // --------------------------------------------------

        if (subjectIndex === -1) {
            learningProgress.subjects.push({
                subject,
                topics: [
                    {
                        topicId,
                        topic,
                        isCompleted: true,
                        completedAt: new Date()
                    }
                ]
            });

            await learningProgress.save();

            return res.status(201).json(
                new ApiResponse(
                    201,
                    learningProgress,
                    "Subject progress added successfully"
                )
            );
        }

        // --------------------------------------------------
        // Check if topic already exists
        // --------------------------------------------------

        const topicExists = learningProgress.subjects[
            subjectIndex
        ].topics.some(
            (item) => item.topicId.toString() === topicId.toString()
        );

        if (topicExists) {
            return res.status(409).json(
                new ApiError(
                    409,
                    "Topic progress already exists",
                    {}
                )
            );
        }

        // --------------------------------------------------
        // Add topic to existing subject
        // --------------------------------------------------

        learningProgress.subjects[subjectIndex].topics.push({
            topicId,
            topic,
            isCompleted: true,
            completedAt: new Date()
        });

        await learningProgress.save();

        return res.status(201).json(
            new ApiResponse(
                201,
                learningProgress,
                "Topic progress added successfully"
            )
        );

    } catch (error) {
        console.error("AddLearningProgress Error:", error);

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                {}
            )
        );
    }
};

const GetLearningProgress = async (req, res) => {

    try {

        const studentId = GetStudentId(req);

        if (!studentId) {
            return res.status(401).json(
                new ApiError(
                    401,
                    "Student authentication required",
                    {}
                )
            );
        }

        const progress = await LearningProgress.findOne({
            studentId
        });

        if (!progress) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Please start your learning to track your learning progress",
                    {}
                )
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                progress,
                "Progress sent successfully"
            )
        );

    } catch (error) {

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                {}
            )
        );
    }
};

const GetSubjectProgress = async (req, res) => {

    try {

        const studentId = GetStudentId(req);

        const { subject } = req.body;

        if (!studentId) {
            return res.status(401).json(
                new ApiError(
                    401,
                    "Student authentication required",
                    {}
                )
            );
        }

        const studentProgressExits = await LearningProgress.findOne({
            studentId
        });

        if (!studentProgressExits) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "Please start your learning to track your learning progress",
                    {}
                )
            );
        }

        const subjects = studentProgressExits.subjects;

        let index = -1;

        for (let i = 0; i < subjects.length; i++) {

            if (subjects[i].subject == subject) {
                index = i;
                break;
            }

        }

        if (index == -1) {
            return res.status(404).json(
                new ApiError(
                    404,
                    "No progress found for this subject",
                    {}
                )
            );
        }

        return res.status(200).json(
            new ApiResponse(
                200,
                subjects[index],
                "Subject Progress sent successfully"
            )
        );

    }
    catch (error) {

        return res.status(500).json(
            new ApiError(
                500,
                "Internal Server Error",
                {}
            )
        );
    }

};

export {
    AddLearningProgress,
    GetLearningProgress,
    GetSubjectProgress
}