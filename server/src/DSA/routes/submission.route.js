import Router from 'express'
import { SubmitCode , GetAllSubmissions} from '../controllers/submission.controller.js'
import rateLimiter from '../../middlewares/rateLimiter.middleware.js'
import IsAuthenticated from '../../middlewares/auth.middleware.js'
import VerifyStudent from '../../middlewares/student.middleware.js'

const router = Router()

// router.post("/code" , IsAuthenticated , rateLimiter( { key: "code_submission",
//         limit: 5,
//         window: 60  }) , SubmitCode );

router.post("/code" , VerifyStudent , rateLimiter( { key: "code_submission",
        limit: 5,
        window: 60  }) , SubmitCode );


router.get("/all" , IsAuthenticated , GetAllSubmissions )        
// router.get("/all" , GetAllSubmissions )        

export default router 