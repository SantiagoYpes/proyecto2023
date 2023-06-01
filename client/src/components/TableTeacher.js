import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import AlertDeleteTeacher from "./AlertDeleteTeacher";
import { useRouter } from "next/router";
import { contextTeacher } from "../context/TeacherContext";
import Alert from "@/components/Alert";

function TableTeacher() {
  const { setTeacher } = useContext(contextTeacher);
  const { setContract } = useContext(contextTeacher);
  const router = useRouter();
  const [teachers, setTeachers] = useState([]);

  const handleError = () => {
    toast((t) => <Alert t={t} message="Ocurrió un error" />);
  };

  useEffect(() => {
    const url = "http://localhost:4000/teachers";

    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("items"));
        axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        const result = await axios.get(url);
        setTeachers(result.data);
        console.log(teachers);
      } catch (error) {
        handleError();
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = (id) => {
    toast((t) => <AlertDeleteTeacher t={t} id_teacher={id} />);
  };
  const handleEdit = (id, ced) => {
    setTeacher(id);
    setContract(ced);
    router.push("/profile");
  };
  return (
    <div>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Documento
            </th>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Nombre
            </th>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Apellido
            </th>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Email
            </th>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Celular
            </th>
            <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell w-1/5">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr className="bg-white lg:hover:bg-gray-100" key={teacher.id}>
              <td class="p-2 border border-gray-300 hidden lg:table-cell">
                {teacher.ced}
              </td>
              <td className="p-2 border border-gray-300 hidden lg:table-cell">
                {teacher.name}
              </td>
              <td className="p-2 border border-gray-300 hidden lg:table-cell">
                {teacher.lastname}
              </td>
              <td className="p-2 border border-gray-300 hidden lg:table-cell">
                {teacher.email}
              </td>
              <td className="p-2 border border-gray-300 hidden lg:table-cell">
                {teacher.cell}
              </td>
              <td className="p-2 border border-gray-300 hidden lg:table-cell flex space-x-2">
                <button
                  className="bg-[#1F6768] hover:bg-green-900 text-white font-bold py-2 px-2 rounded"
                  onClick={() => handleEdit(teacher._id, teacher.ced)}
                >
                  Editar
                </button>
                <button
                  className="p-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
                  onClick={() => handleDelete(teacher._id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
}

export default TableTeacher;
