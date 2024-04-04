const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userModel = require("./models/Users");

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/crud");

// All users
app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Get user by ID
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Update User by ID
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(id, {
      fname: req.body.fname,
      sname: req.body.sname,
      email: req.body.email,
    })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Create a new user
app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Delete a user
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running on port 3001");
});
