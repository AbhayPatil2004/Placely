import Solved from "../models/solved.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { GetStudentId } from "../../utils/studentDetails.js";

const GetStudentSolvedProblems = async (req, res) => {
  try {
    const studentId = GetStudentId(req);

    const solvedProblems = await Solved.find({ studentId });

    if (solvedProblems.length === 0) {
      return res.status(404).json(
        new ApiError(404, "No solved problems found", {})
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        "Solved problems fetched successfully",
        solvedProblems
      )
    );
  } catch (error) {
    console.error("GetStudentSolvedProblems Error:", error);

    return res.status(500).json(
      new ApiError(500, "Internal Server Error", {})
    );
  }
};

export {
  GetStudentSolvedProblems
};