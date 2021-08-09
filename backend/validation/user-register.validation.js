const validator = require("validator");

const isEmpty = require("./utils/isEmpty.utils");

const validateUserRegister = (data) => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";

  if (!validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Username must be between 2 to 30 characters";
  }
  if (validator.isEmpty(data.username)) {
    errors.username = "username field can not be empty";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field can not be empty";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Length of password should be 6 to 30 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field should not be empty";
  }

  if (!validator.isLength(data.contact, { min: 9, max: 10 })) {
    errors.contact = "Contact Number must be valid nepali number";
  }
  if (!validator.isNumeric(data.contact)) {
    errors.contact = "Contact Number must be a number";
  }
  if (validator.isEmpty(data.contact)) {
    errors.contact = "Contact Number field can not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateUserRegister;
