import React from 'react'
import { toast } from "react-hot-toast";
function AlertDeleteTeacher({t,id_teacher}) {
  return (
    <div>
        <p>
          ¿Quieres eliminar a este profesor?
          {id_teacher}
        </p>
        <div clasName="flex">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
            Borrar
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
  )
}

export default AlertDeleteTeacher