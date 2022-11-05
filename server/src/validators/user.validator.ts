/**
 * * This is validator for create user
 */

import joi from 'joi';

let registerUserRequestValidator = joi.object({
    name: joi.string().required(),
    userName: joi.string().required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } }),
    phoneNumber: joi.string().required(),
    password: joi.string().required().pattern(new RegExp('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')),
    isActive: joi.bool(),
    avatar: joi.string()
});

let loginRequestValidator = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } }),
    password: joi.string().required().pattern(new RegExp('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'))
});

let refreshTokenRequestValidation = joi.object({
    userId: joi.string().required(),
    refresh_token: joi.string().required()
});

export { registerUserRequestValidator, loginRequestValidator, refreshTokenRequestValidation };
