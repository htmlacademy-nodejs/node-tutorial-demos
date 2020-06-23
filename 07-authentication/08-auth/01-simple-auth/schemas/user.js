'use strict';

const Joi = require(`@hapi/joi`);
const {LoginMessage} = require(`../constants`);

module.exports = Joi.object({

    username: Joi.string()
                .required()
                .email()
                .messages({
                    'string.email': LoginMessage.WRONG_EMAIL,
                    'any.required': LoginMessage.REQUIRED_FIELD,
                }),

    password: Joi.string()
                .required()
                .messages({
                    'any.required': LoginMessage.REQUIRED_FIELD,
                }),

});
