import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import PhotoUpload from "../components/PhotoUpload";
import axios from "axios";
import ComplexNavbar from "../components/NavBar2";
import Alert from "@/components/Alert";
import { Toaster, toast } from "react-hot-toast";
export default function Profile() {
  const router = useRouter();
  const [active, setActive] = useState([]);
  const [name, setName] = useState([]);
  const [lastname, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [cell, setCell] = useState([]);

  
  const handleError = () => {
    toast((t) => <Alert t={t} message="Ocurrió un error" />);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCellChange = (event) => {
    setCell(event.target.value);
  };

  const handleSubmit = async (event) => {
    const url = "http://localhost:4000/updateUser/" + user.id;
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("cell", cell);
    try {
      const response = await axios.post(url, formData);

      router.push("/HomePage");
      // Manejar la respuesta de la solicitud POST...
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const user = JSON.parse(localStorage.getItem("items"));
  const url = "http://localhost:4000/teacher/" + user.id;
  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("items"));
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      try {
        const result = await axios.get(url);
        setActive(result.data);
        setName(result.data.name);
        setLastName(result.data.lastname);
        setEmail(result.data.email);
        setCell(result.data.cell);
      } catch (error) {
        console.log(error);
        handleError()
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <ComplexNavbar></ComplexNavbar>
      <div class="max-w-2xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="flex items-center justify-center bg-[#1F6768] rounded-t-lg px-4 py-8">
            <PhotoUpload></PhotoUpload>
          </div>
          <div class="px-6 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Perfil del docente</h2>
            <p class="text-gray-600"></p>
          </div>
          <div class="px-6 py-4">
            <form onSubmit={handleSubmit} class="space-y-4">
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={handleNameChange}
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={name}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  onChange={handleLastNameChange}
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={lastname}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Cédula
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={active.ced}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Celular
                </label>
                <input
                  type="text"
                  onChange={handleCellChange}
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={cell}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="text"
                  id="firstName"
                  onChange={handleEmailChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={email}
                />
              </div>
              <div class="relative">
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Valor de la hora
                </label>
                <span class="absolute left-3 bottom-2.5 text-[#000000]">$</span>
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  id="phone"
                  class="w-full px-3 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1F6768] text-[#000000]"
                  value={active.valuehour}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#1F6768] hover:bg-[#EE2737] text-white rounded-md font-semibold focus:outline-none"
              >
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster/>
      <Footer />
    </div>
  );
}
