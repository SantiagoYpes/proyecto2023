import User from "../models/User.js";
import { uploadContract } from "../libs/cloudinary.js";
import Contract from "../models/Contract.js";
import fs from "fs-extra";
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
    res.send("Profesor con ID" + id + "Correctamente eliminado");
  } catch (error) {
    console.log(error);
    res.status(400).send("Ocurrió un error", error);
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

export const getContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const query = Contract.find({ ced: id });
  query
    .exec()
    .then((users) => {// Maneja los usuarios encontrados
      res.send(users)
      console.log("Busqueda Contrato"); 
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)// Maneja el error
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const newContract = async (req, res) => {
  try {
    const { ced } = req.body;
    if (req.files.contract && ced) {
      const result = await uploadContract(req.files.contract.tempFilePath);
      await fs.remove(req.files.contract.tempFilePath);
      const url = result.secure_url;
      const public_id = result.public_id;

      try {
        const contract = new Contract({ ced, url, public_id });
        await contract.save();
        res.send(contract._id);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
      res.status(400).send(error);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
