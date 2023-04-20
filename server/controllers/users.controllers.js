import User from "../models/User.js";

export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, pass } = req.body;
  const query = User.find({ email: email });
  query
    .exec()
    .then((users) => {// Maneja los usuarios encontrados
        const found = users.find(user => user.password == pass)
        if (found) {
          const response = {id:found._id, type:found.type}
          res.send(response)
        }
        else{
          res.status(500).send("error")
        }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)// Maneja el error
    });
};
