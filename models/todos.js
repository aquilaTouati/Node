const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const todosSchema = new Schema({
  title: {
    type: String,
  },

  completed: {
    type: Boolean,
  },
});

const todo = mongoose.model("Todos", todosSchema);

module.exports = todo;
