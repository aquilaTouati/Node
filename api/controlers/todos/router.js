const express = require("express");
const router = express.Router();
const controler = require("./controler");
const middleware = require("../../../middlewares/hourMiddleware");

router
  .get("/", middleware.veirfyMorning, controler.getTodo)
  .get("/:id", controler.getTodoById)
  .post("/", controler.createTodo)
  .put("/:id", controler.updateTodo)
  .delete("/:id", controler.deleteTodo);

module.exports = router;
