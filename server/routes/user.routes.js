import { Router } from "express";
import {loginUser, updateContract, updateUser} from "../controllers/users.controllers.js";
const router = Router()


router.post('/login', loginUser)
router.post('/updateuser/:id', updateUser)
router.post('/updatecontract/:id', updateContract)
export default router