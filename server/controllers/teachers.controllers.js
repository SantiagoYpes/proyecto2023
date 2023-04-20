import User from "../models/User.js";

export const getTeachers = async (req, res) => {
  try {
    const list = await User.find();
    let listTeachers = list
      .filter(function (teacher) {
        return teacher.type === "teacher";
      })
      .map(function (teacher) {
        return teacher;
      });
    res.send(listTeachers);
  } catch (error) {
    res.status(400).error(error);
  }
};

export const newTeacher = async (req, res) => {
  try {
    if (req.body.ced === "") {
      res.status(400).send("error");
    } else {
      console.log(req.body);
      const user = new User(req.body);
      await user.save();
      console.log("Profesor Creado");
      res.send(user._id);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateTeacher = (req, res) => res.send("Teacher updated");

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send("Profesor con ID" + id + "Correctamente eliminado")
  } catch (error) {
    console.log(error);
    res.status(400).send("Ocurrió un error", error)
  }
  
};

export const teacherId = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await User.findById(id);
    console.log("Búsqueda terminada");
    res.json(teacher);
  } catch (error) {
    res.status(400).send(error);
  }
};
