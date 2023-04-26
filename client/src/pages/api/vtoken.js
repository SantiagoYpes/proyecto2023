import { verify } from "jsonwebtoken";

export default function validateToken(req, res) {
  const { userToken } = req.cookies;

  try {
    const user = verify(userToken, "secret");
    return res.json({ id: user.id, type: user.type });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
