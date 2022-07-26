const joi = require("joi");

/*
 * * Registration input validation
 */

const registrationRequestVariables = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  dateOfBirth: joi.string(),
  location: joi.string(),
  password: joi.string().required(),
  confirmPassword: joi.string(),
  isActive: joi.boolean(),
  phoneNumber: joi.string().required(),
  avatarUrl: joi.string().allow("", null),
  role: joi.string(),
});

module.exports = registrationRequestVariables;
