import React from "react";
import { toast } from "react-hot-toast";
function Alert({ t, message}) {
  return (
    <div>
      <p>{message}</p>
      <center>
        <div clasName="flex">
          <button
            className="bg-[#1F6768] hover:bg-[#EE2737]  text-white font-bold py-2 px-4 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Aceptar
          </button>
        </div>
      </center>
    </div>
  );
}

export default Alert;
