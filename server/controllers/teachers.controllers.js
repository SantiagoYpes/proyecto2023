import Teacher from "../models/Teacher.js"

export const getTeachers = async(req, res) => {
    const listTeachers = await Teacher.find()
    res.send(listTeachers)
}

export const newTeacher = async(req,res) => {
    console.log(req.body)
    const {ced, name, lastname, subject, email, valuehour, cell, type} = req.body
    const teacher = new Teacher({ced, name, lastname, subject, email, valuehour, cell, type})
    await teacher.save()
    res.json(teacher)
}

export const updateTeacher = (req,res) => res.send("Teacher updated")

export const deleteTeacher = (req,res) => res.send("New teacher updated")

export const teacherId = async(req,res)=>{
    const {id} = req.params
    const teacher = await Teacher.findById(id)
    res.send(teacher)
  }