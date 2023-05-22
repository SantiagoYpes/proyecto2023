import { contextTeacher } from "../context/TeacherContext";
import { useContext } from "react";
import { useEffect } from "react"; 
import Footer from "../components/Footer";
import axios from "axios"; 
import PhotoUpload from "../components/PhotoUpload";
import ComplexNavbar from '../components/NavBar'
export default function Profile() {
  const { active, setActive } = useContext(contextTeacher);
  console.log(active);

  const url = "http://localhost:4000/teacher/" + active;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setActive(result.data);
      console.log(result);
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <ComplexNavbar></ComplexNavbar>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div class="flex items-center justify-center bg-[#1F6768] rounded-t-lg px-4 py-8"> 
            <PhotoUpload></PhotoUpload>
          </div>
          <div class="px-6 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Perfil del administrador</h2>
            <p class="text-gray-600"></p>
          </div>
          <div class="px-6 py-4">
            <form class="space-y-4">
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={active.name}
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={active.lastname}
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
                  Correo electrónico
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value={active.email}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#EE2737] hover:bg-[#1F6768]  text-white rounded-md font-semibold focus:outline-none"
              > 
                Actualizar
              </button>
            </form>  
          </div>
        </div>
      </div> 
      <Footer/>
    </div>
  );
}
