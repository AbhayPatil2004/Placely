import Question, {
  CNQuestion,
  DBMSQuestion,
  OSQuestion,
  SWEQuestion,
} from "../Model/core.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

const getSubjectQuestions = (model, subject) => async (req, res, next) => {
  try {
    const questions = await model.find(
      {},
      { _id: 1, ID: 1, Question: 1, Answer: 1, Difficulty: 1 },
    )
      .sort({ ID: 1 })
      .lean();

    const data = questions.map(({ _id, ID, Question: question, Answer: answer, Difficulty: difficulty }) => ({
      id: String(_id),
      order: ID,
      question,
      answer,
      difficulty,
    }));

    return res.status(200).json(
      new ApiResponse(
        200,
        data.length
          ? `${subject} questions fetched successfully`
          : `No ${subject} questions found`,
        data,
      ),
    );
  } catch (error) {
    return next(new ApiError(500, `Unable to load ${subject} questions`, [], error));
  }
};

export const GetOopQuestions = getSubjectQuestions(Question, "OOP");
export const GetOsQuestions = getSubjectQuestions(OSQuestion, "OS");
export const GetCnQuestions = getSubjectQuestions(CNQuestion, "CN");
export const GetDbmsQuestions = getSubjectQuestions(DBMSQuestion, "DBMS");
export const GetSweQuestions = getSubjectQuestions(SWEQuestion, "SWE");