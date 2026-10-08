import { Router } from "express";

import VerifyAdmin from "../../middlewares/admin.middleware.js";
import AttachStudent from "../../middlewares/attachStudent.middleware.js";

import {
    AddProblem,
    UpdateProblem,
    GetProblem,
    GetProblemsSheet,
    GetProblemByTopic,
    DeleteProblem
} from "../controllers/problem.controller.js";

const router = Router();

// Admin routes
router.post("/", VerifyAdmin, AddProblem);

router.put("/:slug", VerifyAdmin, UpdateProblem);

router.delete("/:slug", VerifyAdmin, DeleteProblem);

// Public routes
router.get("/sheet", AttachStudent , GetProblemsSheet);

router.get("/", GetProblemByTopic);

router.get("/:slug", GetProblem);

export default router;