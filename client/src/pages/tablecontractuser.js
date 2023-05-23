import React from "react";
import ComplexNavbar from "@/components/NavBar2";
import { Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import  AlertAdd  from "../components/AlertEdit";
import { Toaster, toast } from "react-hot-toast";

import axios from "axios";
export default function TableContractUser() {
  const handleDownload = (downloadUrl) => {
    // Crear un enlace temporal y simular un clic para iniciar la descarga
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Contrato.pdf"; // Establece el nombre del archivo
    link.click();
  };

  const user = JSON.parse(localStorage.getItem("items"));
  const contract = user.ced;
  const [contracts, setContracts] = useState([]);
  console.log("id de contrato:" + contract);
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

  const [checked, setChecked] = useState(false);

  const handleAdd = (id_teacher, id_contract) => { 
    toast.loading((t) => (
      <AlertAdd
        t={t}
        id_contract={id_contract}
        id_teacher={id_teacher}
        user ={'Profesor'}
      />
    ));
  };
  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 text-[#000000]">
      <ComplexNavbar />
      <br></br>
      <center>
        <Typography
          variant="h2"
          className="text-black-500 p-7 uppercase text-5xl  "
        >
          Observa tus Contratos
        </Typography>
      </center>

      <div class="text-s text-gray-900 ml-6">Contratos del Docente</div>
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
              Link de Descarga
            </th>
            <th
              scope="col"
              class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
            >
              Estado (Firmado)
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
                  className="text-blue-700 underline px-4 py-2 rounded"
                  onClick={() => handleDownload(contract.url)}
                >
                  Descargar archivo PDF
                </button>
              </td>
              <td>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                    />
                    <div className="w-11 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`absolute left-1 top-1 transition ${
                        contract.signed=="true" ? "translate-x-5 bg-green-400" : "bg-white"
                      } w-4 h-4 rounded-full shadow`}
                    ></div>
                  </div>
                  <button
                    class="text-red-700 font-bold py-2 px-3 rounded"
                    onClick={() => handleAdd(contract.ced, contract._id)}
                  >
                    Editar
                  </button>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster/>
      <Footer />
    </div>
  );
}
