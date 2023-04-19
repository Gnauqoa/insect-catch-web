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
  return "";
};

export default getErrorMessage;
