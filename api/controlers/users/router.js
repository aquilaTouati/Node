const validator2 = require("../../../validators/usersValidator");
const middleware2 = require("../../../middlewares/eveningMiddleware");

router
  .get("/", middleware.verifyEvening, controler.getUser)
  .get("/:id", controler.getUserById)
  .post("/", validator.validateUser, controler.createUser)
  .put("/:id", validator.validateUser, controler.updateUser)
  .delete("/:id", controler.deleteUser);

module.exports = router;
