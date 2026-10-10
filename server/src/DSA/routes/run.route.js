import VerifyStudent from "../../middlewares/student.middleware.js";
import rateLimiter from "../../middlewares/rateLimiter.middleware.js";
import Router from 'express'
import { RunCode } from '../controllers/run.controller.js'

const router = Router()


router.post("/code", VerifyStudent, rateLimiter({
    key: "code_submission",
    limit: 5,
    window: 60
}), RunCode);

export default router 