const validator = require("../../../validators/usersValidator");
const middleware2 = require("../../../middlewares/eveningMiddleware");
const auth = require("../../../middlewares/auth");
const controller = require("./controller");

router
  .get("/", middleware.verifyEvening, auth.verifyToken, controller.getUser)
  .get("/:id", controller.getUserById)
  .post("/", validator.validateUser, controller.createUser)
  .put("/:id", validator.validateUser, controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = router;
