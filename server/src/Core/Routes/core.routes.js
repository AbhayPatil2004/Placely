import { Router } from "express";
import VerifyStudent from "../../middlewares/student.middleware.js";
import {
  GetCnQuestions,
  GetDbmsQuestions,
  GetOopQuestions,
  GetOsQuestions,
  GetSweQuestions,
} from "../Controllers/core.controller.js";

const router = Router();

router.get("/oop", VerifyStudent, GetOopQuestions);
router.get("/os", VerifyStudent, GetOsQuestions);
router.get("/cn", VerifyStudent, GetCnQuestions);
router.get("/dbms", VerifyStudent, GetDbmsQuestions);
router.get("/swe", VerifyStudent, GetSweQuestions);

export default router;