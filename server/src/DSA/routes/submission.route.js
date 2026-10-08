import Router from 'express'
import { SubmitCode , GetAllSubmissions , DeleteAllSubmissions , GetStudentProblemSubmissions } from '../controllers/submission.controller.js'
import rateLimiter from '../../middlewares/rateLimiter.middleware.js'
import IsAuthenticated from '../../middlewares/auth.middleware.js'
import VerifyStudent from '../../middlewares/student.middleware.js'
import VerifyAdmin from '../../middlewares/admin.middleware.js'

const router = Router()

// router.post("/code" , IsAuthenticated , rateLimiter( { key: "code_submission",
//         limit: 5,
//         window: 60  }) , SubmitCode );

router.post("/code" , VerifyStudent , rateLimiter( { key: "code_submission",
        limit: 5,
        window: 60  }) , SubmitCode );


router.get("/all" , VerifyAdmin , GetAllSubmissions )

router.get(
    "/getStudentProblemSubmissions/:problemId",
    VerifyStudent,
    GetStudentProblemSubmissions
);
// router.get("/all" , GetAllSubmissions )        

router.delete("/all" , VerifyAdmin , DeleteAllSubmissions ) 

export default router 