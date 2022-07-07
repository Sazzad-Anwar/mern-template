const joi = require("joi");

/*
 * * Category input validation
 */

const categoryRequestVariables = joi.object({
  name: joi.string().required(),
  ancestors: joi.array().items(joi.string()).default([]),
  parent: joi.string(),
  image: joi.string(),
});

module.exports = categoryRequestVariables;
