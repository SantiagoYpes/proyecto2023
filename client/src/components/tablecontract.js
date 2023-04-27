import React from "react";
import { toast } from "react-hot-toast";
function TableContract() {
  return (
    <table class="min-w-full divide-y divide-gray-200 text-[#000000]">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 font-bold text-left uppercase tracking-wider">
            Documento
          </th>
          <th scope="col" class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider">
            Fecha de creación
          </th>
          <th scope="col" class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider">
            Fecha de actualización
          </th>
          <th scope="col" class="px-6 py-3 font-bold text-left text-s uppercase tracking-wider">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-s text-gray-900">Documento 1</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-s text-gray-900">01/01/2023</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-s text-gray-900">01/02/2023</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
              Borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableContract;
