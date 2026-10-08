import Router from 'express'
import { GetStudentSolvedProblems } from '../controllers/solved.controller.js'
import VerifyStudent from '../../middlewares/student.middleware.js'

const router = Router()

router.get( "/problem" , VerifyStudent , GetStudentSolvedProblems )

export default router 