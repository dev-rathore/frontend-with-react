import * as Yup from 'yup';

export const constants = {
  EMAIL_REQUIRED_MESSAGE: 'Please enter a valid email address',
  EMAIL_VALIDATION_MESSAGE: 'Please enter a valid email address',
  FIRST_NAME_REQUIRED_MESSAGE: 'First name is required',
  FIRST_NAME_VALIDATION_MESSAGE: 'First name must be at least 2 characters long',
  FIRST_NAME_VALIDATION_MATCH_MESSAGE: 'First name cannot contain special characters',
  LAST_NAME_VALIDATION_MESSAGE: 'Last name is required',
  PASSWORD_REQUIRED_MESSAGE: 'Password is required',
  PASSWORD_VALIDATION_MESSAGE: 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long',
  PHONE_VALIDATION_MESSAGE: 'Phone number is required',
  USERNAME_REQUIRED_MESSAGE: 'Username is required',
  USERNAME_VALIDATION_MESSAGE: 'Username must start with an alphabet or number, cannot start with a special character, and only allows alphabets, numbers, underscore (_), and period (.)',
};

export const passwordSchema = Yup
  .string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    constants.PASSWORD_VALIDATION_MESSAGE,
  )
  .required(constants.PASSWORD_REQUIRED_MESSAGE);

export const usernameSchema = Yup
  .string()
  .matches(
    /^[a-zA-Z0-9](?:[_\.](?=[a-zA-Z0-9])|[a-zA-Z0-9]){0,18}[a-zA-Z0-9]$/,
    constants.USERNAME_VALIDATION_MESSAGE,
  )
  .required(constants.USERNAME_REQUIRED_MESSAGE);

export const emailSchema =  Yup
  .string()
  .email(constants.EMAIL_VALIDATION_MESSAGE)
  .required(constants.EMAIL_REQUIRED_MESSAGE);

export const firstNameSchema = Yup
  .string()
  .min(2, constants.FIRST_NAME_VALIDATION_MESSAGE)
  .matches(/^[a-zA-Z]+$/, constants.FIRST_NAME_VALIDATION_MATCH_MESSAGE)
  .required(constants.FIRST_NAME_REQUIRED_MESSAGE);

export const lastNameSchema = Yup.string();

export const phoneNumberSchema = Yup
  .string()
  .required(constants.PHONE_VALIDATION_MESSAGE);
