import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { contextTeacher } from "../context/TeacherContext";
import AlertDeleteContract from "./AlertDeleteContrac";
import { Toaster, toast } from "react-hot-toast";

function TableContract() {
  const { contract } = useContext(contextTeacher);
  const [contracts, setContracts] = useState([]);
  const url = "http://localhost:4000/contract/" + contract;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      console.log(result.data);
      setContracts(result.data);
      console.log(contracts);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    toast((t) => <AlertDeleteContract t={t} id_contract={id} />);
  };

  if (contracts.length != 0) {
    return (
      <div>
        <div class="text-s text-gray-900">Contratos del Docente</div>
        <table class="min-w-full divide-y divide-gray-200 text-[#000000]">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left uppercase tracking-wider"
              >
                Documento
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Fecha de creación
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Fecha de actualización
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {contracts.map((contract) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900">{contract.ced}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900"> {contract.createdAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900">{contract.updatedAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(contract._id)}
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
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
}

export default TableContract;
