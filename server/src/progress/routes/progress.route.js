import express from "express";
import { GetSubjectProgress , AddLearningProgress , GetLearningProgress } from "../controllers/learningProgress.controller.js";
import  VerifyStudent  from "../../middlewares/student.middleware.js";
import { GetDSAProgress } from "../controllers/dsaProgress.controller.js";

const router = express.Router();


router.get(
    "/learning",
    VerifyStudent,
    GetLearningProgress
    
);

router.get(
    "/DSA",
    VerifyStudent,
    GetDSAProgress
    
);

router.get(
    "/subject/learning",
    VerifyStudent,
    GetSubjectProgress
);

router.post(
    "/learning",
    VerifyStudent,
    AddLearningProgress
);

export default router;