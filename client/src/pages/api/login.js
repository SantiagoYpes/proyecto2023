import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function LoginService(req, res) {
  let dataFromDB = {
    id: "",
    type: "",
  };

  dataFromDB = req.body.data;
  if (dataFromDB["type"] !== "") {
    console.log(dataFromDB);

    return res.json("Creado correctamente");
  }
  return res.status(401).json({ error: "No se pudo autenticar con JWT" });
}
