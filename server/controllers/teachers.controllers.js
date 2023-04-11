import Teacher from "../models/Teacher.js"

export const getTeachers = async(req, res) => {
    const listTeachers = await Teacher.find()
    res.send(listTeachers)
}

export const newTeacher = async(req,res) => {
    
    const {id, name, lastname} = req.body
    const teacher = new Teacher({id, name, lastname})
    await teacher.save()
    res.json(teacher)
}

export const updateTeacher = (req,res) => res.send("Teacher updated")

export const deleteTeacher = (req,res) => res.send("New teacher updated")

export const teacherId = (req,res)=> res.send("Teacher by id")