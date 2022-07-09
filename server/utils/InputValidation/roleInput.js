const joi = require("joi");

/*
 * @Description: Role input validation
 */
const roleInput = joi.object({
  role: joi.string(),
  accessRoutes: joi.array().items(joi.string()),
});

module.exports = roleInput;
