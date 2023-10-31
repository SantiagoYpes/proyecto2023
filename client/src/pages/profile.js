import { contextTeacher } from "../context/TeacherContext";
import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import ComplexNavbar from "@/components/NavBar";
import AlertAdd from "../components/AlertAdd";
import TableContract from "../components/tablecontract";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Alert from "@/components/Alert";
export default function Profile() {
  const router = useRouter();
  const [valuehour, setValuehour] = useState([]);
  const handleValuehourChange = (event) => {
    setValuehour(event.target.value);
  };
  const handleError = () => {
    toast((t) => <Alert t={t} message="Ocurrió un error" />);
  };

  const { teacher, setTeacher } = useContext(contextTeacher);

  const handleSubmit = async (event) => {
    const url = "http://localhost:4000/updateUser/" + teacher._id;
    event.preventDefault();
    const formData = new FormData();
    formData.append("valuehour", valuehour);
    try {
      const response = await axios.post(url, formData);

      router.push("/guide");
      // Manejar la respuesta de la solicitud POST...
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const url = "http://localhost:4000/teacher/" + teacher;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("items"));
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setTeacher(result.data);
        setValuehour(result.data.valuehour);
      } catch (error) {
        handleError();
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleAdd = (id_teacher) => {
    toast.loading((t) => (
      <AlertAdd
        t={t}
        id_teacher={id_teacher}
        user={"administrador"}
        signed={"false"}
      />
    ));
  };

  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <ComplexNavbar />
      <div class="max-w-2xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="flex items-center justify-center bg-[#1F6768] rounded-t-lg px-4 py-8">
            <img
              class="w-32 h-32 rounded-full border-4 border-white"
              src="https://via.placeholder.com/150"
              alt="Foto de Perfil"
            />
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
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={teacher.name}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Apellidos
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={teacher.lastname}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Cédula
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={teacher.ced}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Celular
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={teacher.cell}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Correo electrónico
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={teacher.email}
                />
              </div>
              <div class="relative">
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Valor de la hora
                </label>
                <span class="absolute left-3 bottom-2.5 text-[#000000]">$</span>
                <input
                  required
                  type="text"
                  inputmode="numeric"
                  onChange={handleValuehourChange}
                  pattern="[0-9]*"
                  id="phone"
                  class="w-full px-3 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1F6768] text-[#000000]"
                  value={valuehour}
                />
              </div>
              <button className="w-full py-2 px-4 bg-[#1F6768] hover:bg-[#EE2737] text-white rounded-md font-semibold focus:outline-none">
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
      <center>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
          onClick={() => handleAdd(teacher.ced)}
        >
          Crear Contrato
        </button>
      </center>
      <div class="max-w-1xl mx-auto px-4 py-8">
        <TableContract />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}
