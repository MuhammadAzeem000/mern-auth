import validator from "validator";
import isEmpty from "is-empty";
const { isLength, isEmail, equals } = validator;

const validateRegisterInput = (data) => {
  let errors = {};

  let { name, email, password, password2 } = data;

  //Convert empty fields to an empty string so can use validator

  name = !isEmpty(name) ? name : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  password2 = !isEmpty(password2) ? password2 : "";

  //Check Name
  if (isEmpty(name)) {
    errors.name = "Name field is required";
  } else if (!isLength(name, { min: 3 })) {
    errors.name = "Name must be least 3 characters";
  }

  //Email Check
  if (isEmpty(email)) {
    errors.email = "Email field is required";
  } else if (!isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password Check
  if (isEmpty(password)) {
    errors.password = "Password field is required";
  } else if (!isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be least 6 characters";
  }

  //Confirm Password Check
  if (isEmpty(password2)) {
    errors.password2 = "Confirm password field is required";
  } else if (!equals(password, password2)) {
    errors.password2 = "Password must be match";
  }
  return { errors, isValid: isEmpty(errors) };
};
