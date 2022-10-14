import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import MyTextField from "../../atoms/myTextField";
import Lock from "../../shared/assets/lock.png";
import MySnackBar from "../../shared/snackbar";
import { getConfirmPasswordMessage, getPasswordMessage } from "../validate ";

const SetNewPasswordForm = () => {
  const [snackBar, setSnackBar] = useState({
    message: "Please enter a valid email.",
    type: "error",
    open: false,
  });
  const handleSetOpenSnackBar = (status) => {
    setSnackBar({
      ...snackBar,
      open: status,
    });
  };
  const handleSetSnackBar = (message, type = "error", open = true) => {
    setSnackBar({
      message: message,
      type: type,
      open: open,
    });
  };
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 relative ">
      <Introduce />
      <InputArea setSnackBar={handleSetSnackBar} />
      <MySnackBar
        message={snackBar.message}
        type={snackBar.type}
        setOpen={(status) => handleSetOpenSnackBar(status)}
        open={snackBar.open}
      />
    </div>
  );
};

const InputArea = ({ setSnackBar }) => {
  const [password, setPassword] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    message: "",
    error: false,
  });
  const handleSubmit = () => {
    const messagePassword = getPasswordMessage(password.value);
    const messageConfirmPassword = getConfirmPasswordMessage(
      confirmPassword.value,
      password.value
    );
    const messageSnackBar = [];
    if (password.value.length < 6)
      messageSnackBar.push("Password must be at least 6 characters in length.");
    if (messagePassword.length > 1) {
      messagePassword.map((data) => messageSnackBar.push(data));
      setPassword({
        ...password,
        error: true,
        message: messagePassword.map((data, index) => (
          <span
            key={"password message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
      });
    }
    if (messageConfirmPassword.length) {
      messageConfirmPassword.map((data) => messageSnackBar.push(data));
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        message: messageConfirmPassword.map((data, index) => (
          <span
            key={"confirm password message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
      });
    }

    if (messageSnackBar.length > 0) {
      setSnackBar(
        messageSnackBar.map((data, index) => (
          <span
            key={"snack bar message " + index}
            className="flex flex-row items-center"
          >
            {data}
          </span>
        )),
        "error",
        true
      );
    } else {
      setSnackBar("", true, false);
      // code when password & confirm password has met the conditions
      // input code start request here
    }
  };
  const onPasswordChange = (e) => {
    const message = getPasswordMessage(e.currentTarget.value);
    updateState(
      setPassword,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"password message " + index}
          className="flex flex-row items-center gap-1"
        >
          {data}
        </span>
      ))
    );
  };
  const onConfirmPasswordChange = (e) => {
    updateState(setConfirmPassword, e.currentTarget.value);
    const message = getConfirmPasswordMessage(
      e.currentTarget.value,
      password.value
    );
    updateState(
      setConfirmPassword,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"confirm password message " + index}
          className="flex flex-row items-center gap-1"
        >
          {data}
        </span>
      ))
    );
  };
  const updateState = (setState, value, message = "", error = false) => {
    const update = {
      value: value,
      message: message,
      error: error,
    };
    setState(update);
  };
  return (
    <div className="flex flex-col gap-6 w-full">
      <form className="flex flex-col gap-4">
        <MyTextField
          type="password"
          onChange={(e) => onPasswordChange(e)}
          startIcon={Lock}
          label="Pass word"
          message={password.message}
          error={password.error}
        />
        <MyTextField
          type="password"
          onChange={(e) => onConfirmPasswordChange(e)}
          startIcon={Lock}
          label="Confirm password"
          message={confirmPassword.message}
          error={confirmPassword.error}
        />
        <Button
          onClick={handleSubmit}
          // type="submit"
          sx={{ borderRadius: 90 }}
          variant="primary filled"
        >
          Reset password
        </Button>
      </form>
      <div className="flex flex-col items-center">
        <Typography
          sx={{
            color: "#5C5668",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          Return to
          <Link
            sx={{ color: "#D63384", fontWeight: 500, fontSize: 14 }}
            underline="none"
            href="login"
          >
            {" Log in"}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Typography
        sx={{
          fontSize: 48,
          fontWeight: 700,
          color: "#121115",
        }}
      >
        Set new password
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#5C5668",
        }}
      >
        Your new password must be different from previous used passwords.
      </Typography>
    </div>
  );
};

export default SetNewPasswordForm;
