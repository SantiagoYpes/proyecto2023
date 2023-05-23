import React from "react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import AddFilesButton from "./AddFilesButton";
import axios from "axios";
function AlertAdd({ t, id_teacher, user, id_contract }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [checked, setChecked] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (event) => {
    let signed="false"
    const url = "http://localhost:4000/updatecontract/"+id_contract;
    if (checked){
      signed= "true"
    }
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("ced", id_teacher);
    formData.append("contract", selectedFile);
    formData.append("description", description);
    formData.append("user", user);
    formData.append("signed", signed);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.dismiss(t._id);

      // Manejar la respuesta de la solicitud POST...
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const handleError = () => {
    toast((t) => (
      <Alert
        t={t}
        message="Ocurrió un error al iniciar sesión, por favor verifica tus credenciales"
      />
    ));
  };
  return (
    <div>
      <center>
        <h1>Crear un nuevo Contrato</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-1 font-medium">
              Nombre
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Ingresa un nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block mb-1 font-medium">
              Descripción
            </label>
            <input
              required
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className=" px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Ingresa una descripción"
            />
            <input type="file" onChange={handleFileChange} />
          </div>
          <td>
            <div>Firmado</div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" onChange={handleChange} />
                <div className="w-11 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                <div
                  className={`absolute left-1 top-1 transition ${
                    checked
                      ? "translate-x-5 bg-green-400"
                      : "bg-white"
                  } w-4 h-4 rounded-full shadow`}
                  
                ></div>
              </div>
            </label>
          </td>
          <br></br>
          <td className="p-2 border border-gray-300 hidden lg:table-cell flex space-x-2">
            <button
              type="submit"
              className="py-2 px-4 bg-[#EE2737] text-white rounded-md font-semibold focus:outline-none"
            >
              Actualizar
            </button>
            <button
              className="bg-[#1F6768]  text-white font-bold py-2 px-4 rounded"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          </td>
        </form>
      </center>
    </div>
  );
}

export default AlertAdd;
