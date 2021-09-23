const Joi = require("joi");
const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: result.error,
    });
  }
  next();
};

module.exports = {
  validateUser,
};
