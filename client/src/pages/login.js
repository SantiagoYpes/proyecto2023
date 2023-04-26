import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import Alert from "@/components/Alert";
import { useContext } from "react";
import { contextTeacher } from "@/context/TeacherContext";

export default function LogIn() {
  const { active, setActive } = useContext(contextTeacher);
  const [status, setStatus] = useState([]);
  const router = useRouter();
  const [postForm, setDatosFormulario] = useState({
    email: "",
    pass: "",
    // Agrega aquí los demás campos del formulario
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario({ ...postForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    setStatus("show");
    event.preventDefault();

    //
    // console.log(response);

    const url = "http://localhost:4000/login";
    await axios
      .post(url, postForm)
      .then(async (response) => {
        await axios.post("/api/login", response);
        setStatus("hidden");
        const validToken = await axios.get("/api/vtoken");
        validToken.data.type === "teacher"
          ? router.push("/HomePage")
          : router.push("/HomePageAdmin");
        setActive(validToken.id);
      })
      .catch((error) => {
        setStatus("hidden");
        console.error("Error al enviar la solicitud axios.get:", error);
        handleError();
      });
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
              required
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
              required
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
        <br></br>
        <center>
          <div
            className={
              status == "show"
                ? "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                : "hidden inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            }
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </center>
      </div>
      <Toaster />
    </div>
  );
}
