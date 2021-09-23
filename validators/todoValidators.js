const Joi = require("joi");
const validatePost = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().max(50).required(),
    completed: Joi.boolean().required(),
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
  validatePost,
};
