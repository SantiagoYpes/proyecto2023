import User from "../models/User.js";

export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, pass } = req.body;
  const query = User.find({ email: email });
  query
    .exec()
    .then((users) => {// Maneja los usuarios encontrados
        const found = users.find(user => user.password == pass)
        console.log(found)
        found.type === "teacher" ? res.send("teacher") : res.send("admin")
    })
    .catch((err) => {
      console.log(err)
      res.send(err) // Maneja el error
    });
};
