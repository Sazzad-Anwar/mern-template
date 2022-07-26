const joi = require("joi");

/*
 * * Category input validation
 */

const categoryRequestVariables = joi.object({
  name: joi.string().required(),
  parent: joi.string(),
  image: joi.string(),
  isActive: joi.boolean(),
});

module.exports = categoryRequestVariables;
