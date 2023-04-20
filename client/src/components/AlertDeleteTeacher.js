import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Alert from "./Alert";

import { useRouter } from "next/router";

const handleError = () => {
  toast((t) => (
    <Alert
      t={t}
      message="Ocurrió un error al eliminar el usuario"
    />
  ));
};

const handleDelete = (message,t) => {
  toast.dismiss(t._id)
  toast((to) => (
    <Alert
      t={to}
      message={message}
    />
  ));
};

function AlertDeleteTeacher({ t, id_teacher }) {
  const deleteTeacher = async () => {
    const urlDelete = "http://localhost:4000/deleteTeacher/"+id_teacher;
    await axios.delete(urlDelete)
        .then((response) => {
          handleDelete(response.data, t)
          window.location.reload(true)
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud axios.delete:", error);
          handleError();
        });
  };
  return (
    <div>
      <p>
        ¿Quieres eliminar a este profesor?
        {id_teacher}
      </p>
      <div clasName="flex">
        <button onClick={deleteTeacher} className="bg-[#1F6768] hover:bg-[#EE2737] text-white font-bold py-2 px-4 rounded mx-2">
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
  );
}

export default AlertDeleteTeacher;
