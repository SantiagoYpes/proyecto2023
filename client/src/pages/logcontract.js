import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { contextTeacher } from "../context/TeacherContext";
import ComplexNavbar from "@/components/NavBar";
import Footer from "../components/Footer";
import { Typography } from "@material-tailwind/react";
import Alert from "@/components/Alert";
import { Toaster, toast } from "react-hot-toast";
function TableContract() {
  const { contract } = useContext(contextTeacher);
  const [contracts, setContracts] = useState([]);

  const url = "http://localhost:4000/logcontract/" + contract;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("items"));
        axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        const result = await axios.get(url);
        setContracts(result.data);
        console.log(contracts);
      } catch (error) {
        handleError();
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleError = () => {
    toast((t) => <Alert t={t} message="Ocurrió un error" />);
  };

  if (contracts.length != 0) {
    return (
      <div className="min-h-screen items-center justify-center bg-gray-100 text-[#000000]">
        <ComplexNavbar />
        <br></br>
        <center>
          <Typography
            variant="h2"
            className="text-black-500 p-7 uppercase text-5xl  "
          >
            <h1>Información del Contrato</h1>
          </Typography>
        </center>
        <table class="min-w-full divide-y divide-gray-200 text-[#000000]">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Nombre
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Actualización
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Descripción
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Usuario
              </th>
              <th
                scope="col"
                class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider"
              >
                Firmado
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {contracts.map((contract) => (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900"> {contract.name}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900">{contract.updatedAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900">{contract.description}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-s text-gray-900">{contract.user}</div>
                </td>
                <td>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="w-11 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                      <div
                        className={`absolute left-1 top-1 transition ${
                          contract.signed == "true"
                            ? "translate-x-5 bg-green-400"
                            : "bg-white"
                        } w-4 h-4 rounded-full shadow`}
                      ></div>
                    </div>
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
}

export default TableContract;
