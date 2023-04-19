import validator from "validator";

const getErrorMessage = (name, value) => {
  if (name === "email")
    return validator.isEmail(value) ? "" : "Email is not valid";
  if (name === "password")
    return validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      returnScore: false,
    })
      ? ""
      : "Password length must be longer than 8, have 1 uppercase, 1 lowercase and 1 number";
  if (name === "first_name" || name === "last_name")
    return value.length ? "" : "First name can't be empty";
  return "";
};

export default getErrorMessage;
