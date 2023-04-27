import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function LoginService(req, res) {
  let dataFromDB = {
    id: "",
    type: "",
  };

  dataFromDB = req.body.data;
  if (dataFromDB["type"] !== "") {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        type: dataFromDB.type,
        id: dataFromDB.id
      },
      "secret"
    );

    const serialized = serialize("userToken", token, {
        httOnly: true, //Evita que la coockie se muestre en el front.
        secure: process.env.NODE_ENV === "production", //Valida en que ambiente esta.
        sameSite: "strict", // para servicios externos como el backen separado usar el valor none.
        maxAge: 1000 + 60 * 60 * 24 * 30,
        path: "/",
      });

    res.setHeader("Set-Cookie", serialized);
    return res.json("Creado correctamente");
  }
  return res.status(401).json({ error: "No se pudo autenticar con JWT" });
}
