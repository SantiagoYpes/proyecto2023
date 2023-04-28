import { Router } from "express";
import { deleteTeacher, getContracts, getTeachers, newContract, newTeacher, teacherId, updateTeacher,  } from "../controllers/teachers.controllers.js";
const router = Router()

router.get('/hello', (req,res) => res.send("Hello World"))


router.get('/teachers', getTeachers)
router.post('/newTeacher', newTeacher)
router.put('/putTeacher', updateTeacher)
router.delete('/deleteTeacher/:id', deleteTeacher)

router.get('/teacher/:id', teacherId)
router.post('/newContract', newContract)
router.get('/contract/:id', getContracts)

export default router