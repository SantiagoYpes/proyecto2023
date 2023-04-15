import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const [teachers, setTeachers] = useState([]);
  const url = "http://localhost:4000/teachers";
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setTeachers(result.data);
      console.log(teachers);
    };

    fetchData();
  }, []);
  const handleDelete = (id) => {
    console.log(id)
    toast((t) => (
      <div>
        <p>
          ¿Quieres eliminar a este profesor?
          {id}
        </p>
        <div clasName="flex">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
            Borrar
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  }; 
  return (
    <div>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Documento
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Nombre
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Apellido
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Materia
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Email
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Celular
            </th>
            <th className="p-7 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell w-1/5">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr className="bg-white lg:hover:bg-gray-100" key={teacher.id}>
              <td class="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.ced}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.name}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.lastname}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.subject}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.email}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell">
                {teacher.cell}
              </td>
              <td className="p-7 border border-gray-300 hidden lg:table-cell flex space-x-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
