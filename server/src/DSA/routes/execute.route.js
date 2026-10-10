import Router from 'express'
import { ExecuteCode } from '../controllers/execute.controller.js'
import IsAuthenticated from '../../middlewares/auth.middleware.js'
import rateLimiter from '../../middlewares/rateLimiter.middleware.js'

const router = Router()

router.post("/execute" , IsAuthenticated , rateLimiter( { key: "code_execution",
        limit: 5,
        window: 60  }) , ExecuteCode );

export default router 