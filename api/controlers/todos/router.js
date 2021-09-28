const express = require("express");
const router = express.Router();
const controler = require("./controler");
const middleware = require("../../../middlewares/hourMiddleware");
const validator = require("../../../validators/todoValidators");

router
  .get("/", /*middleware.veirfyMorning,*/ controler.getTodo)
  .get("/:id", controler.getTodoById)
  .post("/", validator.validatePost, controler.createTodo)
  .put("/:id", validator.validatePost, controler.updateTodo)
  .delete("/:id", controler.deleteTodo);

module.exports = router;
