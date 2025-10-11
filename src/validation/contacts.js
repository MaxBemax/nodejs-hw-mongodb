import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
    'any.empty': 'name cannot be empty',
  }),

  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'phoneNumber should be a string',
    'string.min': 'phoneNumber should have at least {#limit} characters',
    'string.max': 'phoneNumber should have at most {#limit} characters',
    'any.required': 'phoneNumber is required',
    'any.empty': 'name cannot be empty',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'email should be a string',
    'string.email': 'email must be a valid email address',
    'string.min': 'email should have at least {#limit} characters',
    'string.max': 'email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean value (true or false)',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'contactType should be a string',
      'any.only': 'contactType must be one of [work, home, personal]',
      'any.required': 'contactType is required',
      'any.empty': 'contactType cannot be empty',
    }),
  // min/max у цьому полі зайве, бо значення обмежено переліком вказаних констант(enum).
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'name should be a string',
    'string.min': 'name should have at least {#limit} characters',
    'string.max': 'name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'phoneNumber should be a string',
    'string.min': 'phoneNumber should have at least {#limit} characters',
    'string.max': 'phoneNumber should have at most {#limit} characters',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'email should be a string',
    'string.email': 'email must be a valid email address',
    'string.min': 'email should have at least {#limit} characters',
    'string.max': 'email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean value (true or false)',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'contactType should be a string',
    'any.only': 'contactType must be one of [work, home, personal]',
  }),
  // min/max у цьому полі зайве, бо значення обмежено переліком вказаних констант(enum).
});
