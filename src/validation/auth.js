import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
    'any.empty': 'name cannot be empty',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'email must be a valid email address',
    'string.min': 'email should have at least {#limit} characters',
    'string.max': 'email should have at most {#limit} characters',
    'any.required': 'email is required',
    'any.empty': 'email cannot be empty',
  }),
  password: Joi.string().required().messages({
    'string.base': 'password should be a string',
    'any.required': 'password is required',
    'any.empty': 'password cannot be empty',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'email must be a valid email address',
    'any.required': 'email is required',
    'any.empty': 'email cannot be empty',
  }),
  password: Joi.string().required().messages({
    'string.base': 'password should be a string',
    'any.required': 'password is required',
    'any.empty': 'password cannot be empty',
  }),
});

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'email must be a valid email address',
    'any.required': 'email is required',
    'any.empty': 'email cannot be empty',
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required().messages({
    'string.base': 'password should be a string',
    'any.required': 'password is required',
  }),
  token: Joi.string().required().messages({
    'string.base': 'token must be a string',
    'any.required': 'token is required',
  }),
});
