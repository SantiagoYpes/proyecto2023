import React from "react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
function AlertAdd({ t , id_teacher, signed, user}) {
  const router = useRouter()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleSubmit = async (event) => {
    const url = "http://localhost:4000/newContract/"
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('ced', id_teacher);
    formData.append('contract', selectedFile);
    formData.append('description', description);
    formData.append('user', user);
    formData.append('signed', signed);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.dismiss(t._id)
      router.push("/guide")

      // Manejar la respuesta de la solicitud POST...
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
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
        <h1 className="">Crear un nuevo Contrato</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4">
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
          <div className="mb-3">
            <label htmlFor="text" className=" block mb-1 font-medium">
              Descripción
            </label>
            <input
              required
              type="text"
              name="description"
              id="description"
              value={description} 
              onChange={handleDescriptionChange} 
              className=" px-3 py-2  border border-gray-300 mt5 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Ingresa una descripción"
            />
            <input required type="file" className="mt-3 text-xs"  onChange={handleFileChange} />
          </div>
          
            <button
              type="submit"
              className="py-2 px-4 bg-[#EE2737] mr-2 text-white rounded-md font-semibold focus:outline-none"
            >
              Crear
            </button>
            <button
              className="bg-[#1F6768] text-white font-bold py-2 px-4 rounded"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          
        </form>
      </center>
    </div>
  );
}

export default AlertAdd;
