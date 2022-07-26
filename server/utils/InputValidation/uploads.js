const joi = require("joi");

/*
 * * Upload input validation
 */

const uploadInputValidation = joi.object({
  folderId: joi.string().required(),
  fileName: joi.string(),
});

module.exports = uploadInputValidation;
