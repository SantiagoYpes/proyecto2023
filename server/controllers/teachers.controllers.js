import User from "../models/User.js"

export const getTeachers = async(req, res) => {
    const listTeachers = await User.find()
    res.send(listTeachers)
}

export const newTeacher = async(req,res) => {
    const teacher = new User(req.body)
    await teacher.save()
    res.json(teacher)
}

export const updateTeacher = (req,res) => res.send("Teacher updated")

export const deleteTeacher = (req,res) => res.send("New teacher updated")

export const teacherId = async(req,res)=>{
    const {id} = req.params
    const teacher = await User.findById(id)
    res.send(teacher)
}