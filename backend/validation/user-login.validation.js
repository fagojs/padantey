const validator = require("validator");
const isEmpty = require("../validation/utils/isEmpty.utils");

const validateUserLogin = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid Email!";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field can not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors), //checks if error is empty
  };
};
module.exports = validateUserLogin;
