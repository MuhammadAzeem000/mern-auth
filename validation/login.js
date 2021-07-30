import validator from "validator";
import isEmpty from "is-empty";
const { isEmail } = validator;

const validateLoginInput = (data) => {
  let errors = {};

  let { email, password } = data;

  //Convert empty fields to an empty string so can use validator

  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  //Email Check
  if (isEmpty(email)) {
    errors.email = "Email field is required";
  } else if (!isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password Check
  if (isEmpty(password)) {
    errors.password = "Password field is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
