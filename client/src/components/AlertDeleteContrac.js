import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Alert from "./Alert";
import { useRouter } from "next/router";

const handleError = () => {
  toast((t) => (
    <Alert t={t} message="Ocurrió un error al eliminar el contrato" />
  ));
};

const handleDelete = (message, t) => {
  toast.dismiss(t._id);
  toast((to) => <Alert t={to} message={message} />);
};

function AlertDeleteContract({ t, id_contract }) {
  const router = useRouter();
  const deleteContract = async () => {
    const urlDelete = "http://localhost:4000/deletecontract/" + id_contract;
    await axios
      .delete(urlDelete)
      .then((response) => {
        handleDelete(response.data, t);
        router.push("/guide");
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud axios.delete:", error);
        handleError();
      });
  };
  return (
    <div>
      <p>¿Quieres eliminar este contrato?</p>
      <div clasName="flex">
        <button
          onClick={deleteContract}
          className="bg-[#1F6768] hover:bg-[#EE2737] text-white font-bold py-2 px-4 rounded mx-2"
        >
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

export default AlertDeleteContract;
