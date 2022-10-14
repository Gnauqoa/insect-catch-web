const getPasswordMessage = (password) => {
  let messageArray = [];
  if (password.length < 8) {
    messageArray.push("Password must be at least 8 characters in length.");
  } else if (password.length < 12) {
    messageArray.push(
      <>
        Password strength: <span className="text-[#E1251B] pl-1">{" Week."}</span>
      </>
    );
  } else
    messageArray.push(
      <>
        Password strength: <span className="text-[#207936]">{" Great."}</span>
      </>
    );
  // const isNonWhiteSpace = /^\S*$/;
  // if (!isNonWhiteSpace.test(password))
  //   messageArray.push("Password must not contain white spaces.");
  // if (password.search(/[!@#\$%\^&\*_]/) < 0) {
  //   messageArray.push(
  //     "Password must contain at least special char from -[ ! @ # $ % ^ & * _ ]."
  //   );
  // }
  // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  // if (!isContainsUppercase.test(password))
  //   messageArray.push("Password must have at least one uppercase character.");

  // const isContainsLowercase = /^(?=.*[a-z]).*$/;
  // if (!isContainsLowercase.test(password))
  //   messageArray.push("Password must have at least one lowercase character.");

  // const isContainsNumber = /^(?=.*[0-9]).*$/;
  // if (!isContainsNumber.test(password))
  //   messageArray.push("Password must contain at least one digit.");
  return messageArray;
};
const getConfirmPasswordMessage = (confirmPassword, password) => {
  let message = [];
  if (confirmPassword !== password)
    message.push("Confirm password does not match!.");
  if (!confirmPassword.length) message.push("Confirm password can't be empty.");
  return message;
};
const getEmailMessage = (email) => {
  const message = [];
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )
    message.push("Email not correct type");
  if (email.length === 0) message.push("Email can't be empty.");
  return message;
};
const getBirthMessage = (birth) => {
  const message = [];
  if (birth.length < 1) message.push("Birth can't be empty");
  return message;
};
const updateState = (setState, value, message = "", error = false) => {
  const update = {
    value: value,
    message: message,
    error: error,
  };
  setState(update);
};
export {
  getConfirmPasswordMessage,
  getPasswordMessage,
  getEmailMessage,
  getBirthMessage,
  updateState,
};
