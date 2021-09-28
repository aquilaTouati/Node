const express = require("express");

const app = express();
const userRouter = require("./api/controlers/todos/router");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/todos", userRouter);

mongoose.connect(
  "mongodb://akilaT:strodix1997@cluster0-shard-00-00.rj5tw.mongodb.net:27017,cluster0-shard-00-01.rj5tw.mongodb.net:27017,cluster0-shard-00-02.rj5tw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3qusrp-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Databse connected !!");
});

// GET https://jsonplaceholder.typicode.com/users endpoint

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },
];

// GET http://localhost:5000/users
app.get("/users", (req, res) => {
  res.status(200).send({
    message: "Fetched successfully",
    data: users,
  });
});

// GET http://localhost:5000/users/1
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: user,
  });
});

// POST http://localhost:5000/users
app.post("/users", (req, res) => {
  const user = req.body;
  console.log("data =", user);
  user.id = users.length + 1;
  users.push(user);
  res.status(200).send({
    message: "User created successfully",
    data: user,
  });
});

// PUT http://localhost:5000/users/1
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const index = users.findIndex((user) => user.id == id);
  if (index < 0) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  users[index] = {
    id: id,
    ...user,
  };
  res.status(200).send({
    message: "User updated successfully",
    data: users[index],
  });
});

// DELETE http://localhost:5000/users/1
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const usersIndex = users.findIndex((user) => user.id == id);

  if (usersIndex < 0) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  users.splice(usersIndex, 1);
  res.status(200).send({
    message: "Deleted successfully",
    data: {},
  });
});

app.all("*", (req, res) => {
  res.status(404).send({
    message: "Route not found",
  });
});
app.listen(5000, () => {
  console.log("Listen on http://localhost:5000");
});
