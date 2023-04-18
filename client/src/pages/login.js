import { useRouter } from "next/router";
import { useState } from "react";

import Link from "next/link";
import axios from "axios";


export default function LogIn() {
  const router = useRouter()
  const [postForm, setDatosFormulario] = useState({
    email: "",
    pass: "",
    // Agrega aquí los demás campos del formulario
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({ ...postForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dentro de la función handleSubmit del componente Formulario
    const url = "http://localhost:4000/login";
    axios
      .post(url,postForm)
      .then((response) => {
        const type = response.data
        console.log(type)
        type === "teacher" ? router.push("/guide") : alert("unknown")

      })
      .catch((error) => {
        console.error("Error al enviar la solicitud axios.get:", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-[#000000]">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center ">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={postForm.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              name="pass"
              id="password"
              value={postForm.pass}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
              placeholder="Tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#EE2737] hover:bg-[#1F6768] text-white rounded-md font-semibold focus:outline-none"
          >
            Iniciar Sesión
          </button>
          <p class="text-gray-600 text-center">
            Registrarse{" "}
            <Link href="/signup" class="text-[#EE2737] hover:text-[#1F6768]">
              aquí.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}