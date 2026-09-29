import { Router } from "express";

import VerifyAdmin from "../../middlewares/admin.middleware.js";

import {
    AddProblem,
    UpdateProblem ,
    GetProblem,
    GetProblemByTopic,
    DeleteProblem
} from "../controllers/problem.controller.js";

const router = Router();

router.post("/", VerifyAdmin, AddProblem);

router.put("/:slug", VerifyAdmin, UpdateProblem);

router.get("/:slug", GetProblem);

router.get("/", GetProblemByTopic);

router.delete("/:slug", VerifyAdmin, DeleteProblem);

export default router;