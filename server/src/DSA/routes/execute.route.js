import Router from 'express'
import { ExecuteCode } from '../controllers/execute.controller.js'
import IsAuthenticated from '../../middlewares/auth.middleware.js'

const router = Router()

router.post("/execute" , IsAuthenticated , ExecuteCode );

export default router 