const Todo = require("../../../models/todos");

const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "delectus aut autem2",
    completed: false,
  },
  {
    id: 3,
    title: "delectus aut autem3",
    completed: false,
  },
];

const createTodo = async (req, res) => {
  // const todo = req.body;
  // todo.id = todos.length + 1;
  // todos.push(todo);
  const todo = new Todo({
    ...req.body,
  });
  await todo.save();
  res.status(200).send({
    message: "To dos created successfully",
    data: todo,
  });
};

const getTodo = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).send({
    message: "Fetched successfully",
    data: todos,
  });
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  //const todo = todos.find((todo) => todo.id == id);
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "to do not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: todo,
  });
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  const todosIndex = todos.findIndex((todo) => todo.id == id);

  if (todosIndex < 0) {
    return res.status(404).send({
      message: "To do not found",
      data: {},
    });
  }
  todos.splice(todosIndex, 1);
  res.status(200).send({
    message: "Deleted successfully",
    data: {},
  });
};

const updateTodo = (req, res) => {
  const id = req.params.id;
  const todosIndex = todos.findIndex((todo) => todo.id == id);
  if (todosIndex < 0) {
    return res.status(404).send({
      message: "To do not found",
      data: {},
    });
  }
  todos[todosIndex].completed = !todos[todosIndex].completed;
  res.status(200).send({
    message: "Boolean Modified",
    data: {},
  });
};

module.exports = {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
