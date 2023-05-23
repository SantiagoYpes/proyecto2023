import { Router } from "express";
import { deleteContract, deleteTeacher, getContract, getContracts, getLogContract, getTeachers, newContract, newLogContract, newTeacher, teacherId, updateTeacher} from "../controllers/teachers.controllers.js";
const router = Router()

router.get('/hello', (req,res) => res.send("Hello World"))

router.get('/logcontract/:id', getLogContract)
router.post('/newlogcontract', newLogContract)

router.get('/teachers', getTeachers)
router.post('/newTeacher', newTeacher)
router.put('/putTeacher', updateTeacher)
router.delete('/deleteTeacher/:id', deleteTeacher)

router.get('/teacher/:id', teacherId)
router.post('/newContract', newContract)
router.get('/contract/:id', getContract)
router.get('/contracts', getContracts)
router.delete('/deletecontract/:id', deleteContract)



export default router