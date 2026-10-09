import { Router } from "express";

import VerifyAdmin from "../../middlewares/admin.middleware.js";
import AttachStudent from "../../middlewares/attachStudent.middleware.js";

import {
    GetAllProblems ,
    AddProblem,
    AddMultipleProblems ,
    UpdateProblem,
    GetProblem,
    GetProblemsSheet,
    GetProblemByTopic,
    DeleteProblem,
    DeleteAllProblems
} from "../controllers/problem.controller.js";

const router = Router();

// Admin routes
router.post("/", VerifyAdmin, AddProblem);
router.post("/multiple", VerifyAdmin, AddMultipleProblems );

router.put("/:slug", VerifyAdmin, UpdateProblem);


// Public routes
router.get("/sheet", AttachStudent , GetProblemsSheet);

router.get("/", GetProblemByTopic);

router.get("/all", GetAllProblems );
router.get("/:slug", GetProblem );


router.delete("/all", VerifyAdmin, DeleteAllProblems );
router.delete("/:slug", VerifyAdmin, DeleteProblem);

export default router;