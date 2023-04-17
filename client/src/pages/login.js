import { useRouter } from "next/router";
import Link from "next/link";

export default function SingUp() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-[#000000]">
        <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center ">Iniciar Sesión</h2>
          <form>  
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#EE2737]"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">Contraseña</label>
              <input
                type="password"
                id="password"
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
            <p class="text-gray-600 text-center">Registrarse <Link href="/signup" class="text-[#EE2737] hover:text-[#1F6768]">aquí.</Link></p>
          </form>
        </div>
      </div>
    );
  }
  