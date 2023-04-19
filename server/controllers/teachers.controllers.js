import User from "../models/User.js";

export const getTeachers = async (req, res) => {
  try {
    const listTeachers = await User.find();
    res.send(listTeachers);
  } catch (error) {
    res.error(error);
  }
};

export const newTeacher = async (req, res) => {
  try {
    if (req.body.ced === "") {
      res.status(500).send(error);
    } else {
      console.log(req.body);
      const user = new User(req.body);
      await user.save();
      console.log("Profesor Creado");
      res.send(user._id);
    }
  } catch (error) {
    res.status(500).send(error);
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
    res.send(error);
  }
};
