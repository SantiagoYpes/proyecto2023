import React from "react";
import ComplexNavbar from "@/components/NavBar";
import { Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Alert from "@/components/Alert";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { contextTeacher } from "../context/TeacherContext";
export default function TableContractUser() {
  const handleDownload = (downloadUrl) => {
    // Crear un enlace temporal y simular un clic para iniciar la descarga
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Contrato.pdf"; // Establece el nombre del archivo
    link.click();
  };
  const handleError = () => {
    toast((t) => <Alert t={t} message="Ocurrió un error" />);
  };

  const { contract, setContract } = useContext(contextTeacher);
  const router = useRouter();
  const [contracts, setContracts] = useState([]);
  console.log("id de contrato:" + contract);
  const url = "http://localhost:4000/contracts";
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("items"));
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result.data);
        setContracts(result.data);
        console.log(contracts);
      } catch (error) {
        handleError()
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleEdit = (ced) => {
    setContract(ced);
    router.push("/logcontract");
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
          Observa los Contratos
        </Typography>
      </center>

      <div class="text-s text-gray-900">Contratos de los Docentes</div>
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
                  className="text-blue-700 underline px-4 py-2 rounded"
                  onClick={() => handleDownload(contract.url)}
                >
                  Descargar archivo PDF
                </button>
              </td>
              <td>
                <button
                  className="bg-[#1F6768] hover:bg-green-900 text-white font-bold py-2 px-2 rounded"
                  onClick={() => handleEdit(contract.ced)}
                >
                  Ver Más...
                </button>
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
