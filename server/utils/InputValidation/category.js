const joi = require("joi");

/*
 * * Category input validation
 */

const categoryRequestVariables = joi.object({
  name: joi.string().required(),
  children: joi.array().items(joi.string()).default(null),
  image: joi.string(),
});

module.exports = categoryRequestVariables;
