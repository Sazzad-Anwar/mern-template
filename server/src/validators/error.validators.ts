/**
 * * This is validator for create user
 */

import joi from 'joi';

let createErrorLogValidation = joi.object({
    message: joi.string().required(),
    IP: joi.string().required(),
    stack: joi.string().required(),
    userAgent: joi.bool().required(),
    requestRoute: joi.string().required()
});

export { createErrorLogValidation };
