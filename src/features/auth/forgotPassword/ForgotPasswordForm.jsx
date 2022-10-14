import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import Email from "../../shared/assets/email.png";
import MySnackBar from "../../shared/snackbar";
import MyTextField from "../../atoms/myTextField/index";

import { getEmailMessage } from "../validate ";

const ForgotPasswordForm = () => {
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
  const [email, setEmail] = useState({ value: "", message: "", error: false });
  const onEmailChange = (e) => {
    const messageEmail = getEmailMessage(e.currentTarget.value);
    updateState(
      setEmail,
      e.currentTarget.value,
      messageEmail.map((data, index) => (
        <span
          key={"email message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
  const handleSummit = () => {
    const messageSnackBar = [];
    const messageEmail = getEmailMessage(email.value);
    if (messageEmail.length) {
      setEmail({
        ...email,
        message: messageEmail.map((data, index) => (
          <span
            key={"email message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
        error: true,
      });
      messageEmail.map((data) => messageSnackBar.push(data));
    }
    if (messageSnackBar.length) {
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
      // paste code register here
    }
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
          onChange={(e) => onEmailChange(e)}
          startIcon={Email}
          label="Email"
          placeholder="name@example.com"
          message={email.message}
          error={email.error}
        />
        <Button
          onClick={handleSummit}
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
    <div className="flex flex-col gap-4 items-center justify-center text-center">
      <Typography
        sx={{
          fontSize: 48,
          fontWeight: 700,
          color: "#121115",
        }}
      >
        Forgot Password ?
      </Typography>
      <div>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          Please enter your email address and we will send you an email
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          about how to reset your password.
        </Typography>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
