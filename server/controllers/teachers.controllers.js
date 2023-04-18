import User from "../models/User.js";

export const getTeachers = async (req, res) => {
  try {
    const listTeachers = await User.find();
    res.send(listTeachers);
  } catch (error) {
    res.error(error)
  }
};

export const newTeacher = async (req, res) => {
  try {
    const teacher = new User(req.body);
    await teacher.save();
    console.log("Profesor Creado")
    res.send(teacher._id);
  } catch (error) {
    res.send(error);
  }
};

export const updateTeacher = (req, res) => res.send("Teacher updated");

export const deleteTeacher = (req, res) => res.send("New teacher updated");

export const teacherId = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await User.findById(id);
    console.log("Búsqueda terminada");
    res.json(teacher);
  } catch (error) {
    res.send(error)
  }
};
