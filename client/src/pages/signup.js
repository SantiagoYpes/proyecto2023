import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import  Alert from "../components/Alert";
import { Toaster, toast } from "react-hot-toast";

export default function SingUp() {
  const router = useRouter();
  const [postForm, setDatosFormulario] = useState({
    name: "",
    ced: "",
    lastname: "",
    cell: "",
    email: "",
    password: "",
    type: "teacher",
    valuehour:"90000"
    // Agrega aquí los demás campos del formulario
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({ ...postForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Dentro de la función handleSubmit del componente Formulario
    const url = "http://localhost:4000/newTeacher";
    console.log(postForm);
    await axios
      .post(url,postForm)
      .then((response) => {
        const data = response.data
        handleAlert("Usuario Creado con id: "+data)
        console.log(data)
      })
      .catch((error) => {
         handleAlert("Ocurrió un error al registrar usuario, por favor verifica tus datos")
        console.error("Error al enviar la solicitud axios.get:", error);
      });
  };
  const handleAlert = (message) => {
    toast((t) => <Alert t={t} message ={message}/>);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-[#000000]">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center ">
          Registrarse
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-2">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 font-medium">
                Nombre
              </label>
              <input
                name="name"
                value={postForm.name}
                onChange={handleChange}
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
                placeholder="Tu nombre" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Apellidos
              </label>
              <input
                name="lastname"
                value={postForm.lastname}
                onChange={handleChange}
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
                placeholder="Tus apellidos" 
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">
              Cédula
            </label>
            <input
              type="text"
              name="ced"
              value={postForm.ced}
              onChange={handleChange}
              inputmode="numeric"
              pattern="[0-9]*"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu cédula" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">
              Celular
            </label>
            <input
              name="cell"
              value={postForm.cell}
              onChange={handleChange}
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu celular" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Correo electrónico
            </label>
            <input
              name="email"
              value={postForm.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Contraseña
            </label>
            <input
              name="password"
              value={postForm.password}
              onChange={handleChange}
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu contraseña"
              required
            />
            <p class="text-gray-600 text-xs italic">
              La contraseña debe tener al menos 8 caracteres y contener letras y números.
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#EE2737] hover:bg-[#1F6768] text-white rounded-md font-semibold focus:outline-none"
          >
            Registrarse
          </button>
          <p class="text-gray-600 text-center">
            Inicia sesión{" "}
            <Link href="/login" class="text-[#EE2737] hover:text-[#1F6768]">
              aquí.
            </Link>
          </p>
        </form>
      </div>
      <Toaster/>
    </div>
  );
}
