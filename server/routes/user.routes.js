import { Router } from "express";
import {loginUser} from "../controllers/users.controllers.js";
const router = Router()


router.post('/login', loginUser)


export default router