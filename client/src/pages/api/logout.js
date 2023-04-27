import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logout(req, res) {
  const { userToken } = req.cookies;
  if (!userToken) {
    res.status(401).json({ error: "Not able token" });
  }
  try {
    verify(userToken, "secret");
    const serialized = serialize("userToken", null, {
      httOnly: true, //Evita que la coockie se muestre en el front.
      secure: process.env.NODE_ENV === "production", //Valida en que ambiente esta.
      sameSite: "strict", // para servicios externos como el backen separado usar el valor none.
      maxAge: 0,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json("logout succesfully");
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}