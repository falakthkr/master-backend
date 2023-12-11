const User = require("../models/users");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getUserDetails = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const addUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted user data successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (req.body.username) {
        user.username = req.body.username;
      }
      if (req.body.password) {
        user.password = req.body.password;
      }
      user
        .save()
        .then(() => res.json("User updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getUsers, addUser, deleteUser, updateUser, getUserDetails };
