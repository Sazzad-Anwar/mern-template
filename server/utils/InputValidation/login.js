const joi = require("joi");

/*
 * * Login input validation
 */

const loginRequestVariables = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
  phoneNumber: joi.string(),
});

module.exports = loginRequestVariables;
