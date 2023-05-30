import { Router } from "express";
import { deleteContract, deleteTeacher, getContract, getContracts, getLogContract, getTeachers, newContract, newLogContract, newTeacher, teacherId, updateTeacher} from "../controllers/teachers.controllers.js";
const router = Router()

router.get('/hello', (req,res) => res.send("Hello World"))

router.get('/logcontract/:id', getLogContract)
router.post('/newlogcontract', newLogContract)

router.get('/teachers',ensureToken, getTeachers)
router.post('/newTeacher', ensureToken, newTeacher)
router.put('/putTeacher',ensureToken, updateTeacher)
router.delete('/deleteTeacher/:id',ensureToken, deleteTeacher)

router.get('/teacher/:id',ensureToken, teacherId)
router.post('/newContract',ensureToken, newContract)
router.get('/contract/:id',ensureToken, getContract)
router.get('/contracts',ensureToken, getContracts)
router.delete('/deletecontract/:id',ensureToken, deleteContract)

function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    console.log(bearerHeader);
    if (bearerHeader){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else{
        res.status(401).send("No autorizado, no hay Token")
    }
}

export default router