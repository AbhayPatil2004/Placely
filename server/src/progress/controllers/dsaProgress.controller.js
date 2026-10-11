import Solved from "../../DSA/models/solved.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import Submission from "../../DSA/models/submission.model.js";
import Problem from "../../DSA/models/problem.model.js";
import { GetStudentId } from "../../utils/studentDetails.js";

const GetDSAProgress = async (req, res) => {
    try {
        const studentId = GetStudentId(req);

        if (!studentId) {
            return res.status(401).json(
                new ApiError(401, "Student not authenticated")
            );
        }

        const [
            totalProblems,
            totalSolvedQuestions,
            totalSubmissions,
            acceptedSubmissions,
            solvedProblems,
            topicTotals
        ] = await Promise.all([
            Problem.countDocuments(),

            Solved.countDocuments({
                studentId,
                status: "SOLVED"
            }),

            Submission.countDocuments({ studentId }),

            Submission.countDocuments({
                studentId,
                status: "ACCEPTED"
            }),

            Solved.find({
                studentId,
                status: "SOLVED"
            }).populate({
                path: "problemId",
                select: "topic difficulty"
            }),

            Problem.aggregate([
                {
                    $group: {
                        _id: "$topic",
                        totalQuestions: { $sum: 1 }
                    }
                },
                {
                    $sort: { _id: 1 }
                }
            ])
        ]);

        let basic = 0;
        let easy = 0;
        let medium = 0;
        let hard = 0;

        const solvedByTopic = new Map();

        // Count solved questions by difficulty and topic
        for (const solved of solvedProblems) {
            const problem = solved.problemId;

            if (!problem) continue;

            if (problem.difficulty === "BASIC") {
                basic++;
            } else if (problem.difficulty === "EASY") {
                easy++;
            } else if (problem.difficulty === "MEDIUM") {
                medium++;
            } else if (problem.difficulty === "HARD") {
                hard++;
            }

            const topicName = problem.topic;

            solvedByTopic.set(
                topicName,
                (solvedByTopic.get(topicName) || 0) + 1
            );
        }

        // Include every topic, even if the student has solved zero questions
        const topics = topicTotals.map((item) => {
            const solvedQuestions =
                solvedByTopic.get(item._id) || 0;

            const totalQuestions = item.totalQuestions;

            return {
                topic: item._id,
                totalQuestions,
                solvedQuestions,
                unsolvedQuestions: totalQuestions - solvedQuestions,
                completionPercentage: totalQuestions
                    ? Number(
                        ((solvedQuestions / totalQuestions) * 100)
                            .toFixed(2)
                    )
                    : 0
            };
        });

        const acceptanceRate = totalSubmissions
            ? Number(
                ((acceptedSubmissions / totalSubmissions) * 100)
                    .toFixed(2)
            )
            : 0;

        const completionPercentage = totalProblems
            ? Number(
                ((totalSolvedQuestions / totalProblems) * 100)
                    .toFixed(2)
            )
            : 0;

        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    overview: {
                        totalQuestions: totalProblems,
                        solvedQuestions: totalSolvedQuestions,
                        unsolvedQuestions:
                            totalProblems - totalSolvedQuestions,
                        completionPercentage
                    },

                    difficulty: {
                        basic,
                        easy,
                        medium,
                        hard
                    },

                    submissions: {
                        totalSubmissions,
                        acceptedSubmissions,
                        rejectedSubmissions:
                            totalSubmissions - acceptedSubmissions,
                        acceptanceRate
                    },

                    topics
                },
                "DSA progress fetched successfully"
            )
        );

    } catch (error) {
        console.error("GetDSAProgress error:", error);

        return res.status(500).json(
            new ApiError(500, "Failed to fetch DSA progress")
        );
    }
};

export {
    GetDSAProgress
};
