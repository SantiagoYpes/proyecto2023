import React from "react";
import { toast } from "react-hot-toast";
function Alert({ t, message}) {
  return (
    <table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Documento
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Fecha de inicio
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Fecha de fin
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Acciones
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">Documento 1</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">01/01/2023</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">01/02/2023</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Acción
        </button>
      </td>
    </tr>
  </tbody>
</table>
  );
}

export default Alert;
