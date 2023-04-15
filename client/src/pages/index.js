import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Registrarse</h2>
        <form>
          <div className="grid gap-4 grid-cols-2">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">Apellido</label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Tu apellido"
              />
            </div>
          </div> 
          <div className="mb-4">
            <label htmlFor="tel" className="block mb-1 font-medium">Celular</label>
            <input
              type="text" inputmode="numeric" pattern="[0-9]*"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Celular" 
            /> 
          </div> 
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold focus:outline-none"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
