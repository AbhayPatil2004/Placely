import express from "express";
import { GetSubjectProgress , AddLearningProgress , GetLearningProgress } from "../controllers/learning.model.js";
import  VerifyStudent  from "../../middlewares/student.middleware.js";

const router = express.Router();


router.get(
    "/",
    VerifyStudent,
    GetLearningProgress
    
);

router.get(
    "/subject",
    VerifyStudent,
    GetSubjectProgress
);

router.post(
    "/",
    VerifyStudent,
    AddLearningProgress
);

export default router;