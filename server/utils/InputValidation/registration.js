const joi = require("joi");

/*
 * * Registration input validation
 */

const registrationRequestVariables = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  phoneNumber: joi.string().required(),
  role: joi.string(),
});

module.exports = registrationRequestVariables;
