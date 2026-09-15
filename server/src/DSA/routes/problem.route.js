import { Router } from "express";

import VerifyAdmin from "../../middlewares/admin.middleware.js";

import {
    AddProblem,
    GetProblem
} from "../controllers/problem.controller.js";

const router = Router();

router.get("/", GetProblem);
router.post("/add", VerifyAdmin, AddProblem);


export default router;