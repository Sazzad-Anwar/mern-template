const joi = require("joi");

/*
 * * Folder input validation
 */

const folderInputValidation = joi.object({
  name: joi.string().required(),
});

module.exports = folderInputValidation;
