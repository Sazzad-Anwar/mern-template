const joi = require("joi");

/*
 * * Update user input validation
 */

const updateUserRequestVariables = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  dateOfBirth: joi.string(),
  location: joi.string(),
  password: joi.string(),
  confirmPassword: joi.string(),
  isActive: joi.boolean(),
  phoneNumber: joi.string(),
  avatarUrl: joi.string(),
  role: joi.string(),
});

module.exports = updateUserRequestVariables;
