import React, { useState } from "react";
import { Typography, Button, Link, FormControl } from "@mui/material";
import Facebook from "../../shared/assets/facebook.png";
import Google from "../../shared/assets/google.png";
import Apple from "../../shared/assets/apple.png";
import Lock from "../../shared/assets/lock.png";
import Email from "../../shared/assets/email.png";
import MyTextField from "../../atoms/myTextField";
import {
  getEmailMessage,
  getPasswordMessage,
  getBirthMessage,
  updateState,
} from "../validate ";
import { SignUp } from "../../../api/auth/register";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../../layout/auth/snackBarReducer";

const RegisterForm = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 relative">
      <Introduce />
      <RegisterType />
      <Divider />
      <InputArea />
    </div>
  );
};

const InputArea = () => {
  const [name, setName] = useState({
    value: "",
    message: "",
    error: false,
  });

  const [password, setPassword] = useState({
    value: "",
    message: "",
    error: false,
  });
  const [email, setEmail] = useState({
    value: "",
    message: "",
    error: false,
  });

  const [birth, setBirth] = useState({
    value: "",
    message: "",
    error: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetSnackBar = (message, type = "error", open = true) => {
    dispatch(setSnackBar({ message: message, type: type, open: open }));
  };

  const onPasswordChange = (e) => {
    const message = getPasswordMessage(e.currentTarget.value);
    updateState(
      setPassword,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"password message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
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
  const onNameChange = (e) => {
    updateState(
      setName,
      e.currentTarget.value,
      !e.currentTarget.value.length ? "Fist name can't be empty." : ""
    );
  };
  const onBirthChange = (e) => {
    const message = getBirthMessage(e.currentTarget.value);
    updateState(
      setBirth,
      e.currentTarget.value,
      message.map((data, index) => (
        <span
          key={"birth message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };

  const handleSubmit = async () => {
    const messageSnackBar = [];
    if (!name.value.length) {
      setName({
        ...name,
        message: "Full name can't be empty.",
        error: true,
      });
      messageSnackBar.push("Full name can't be empty.");
    }
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
    const messagePassword = getPasswordMessage(password.value);
    if (password.value.length < 6)
      messageSnackBar.push("Password must be at least 6 characters in length.");
    if (messagePassword.length > 1) {
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
      messagePassword.map((data) => messageSnackBar.push(data));
    }
    const messageBirth = getBirthMessage(birth.value);
    if (messageBirth.length > 0) {
      setBirth({
        ...birth,
        message: messageBirth.map((data, index) => (
          <span
            key={"birth message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
        error: true,
      });
      console.log(birth);
      messageBirth.map((data) => messageSnackBar.push(data));
    }
    if (messageSnackBar.length) {
      handleSetSnackBar(
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
      handleSetSnackBar("", true, false);
      // paste code register here
      try {
        const response = await SignUp(
          name.value,
          email.value,
          password.value,
          birth.value
        );
        if (response.uid === undefined) {
          handleSetSnackBar(response.error, "error", true);
        } else {
          handleSetSnackBar(
            "Register success, login now!", "success", true
            );
          navigate("/auth/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <FormControl className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#121115",
            }}
          >
            Full name
          </Typography>
          <div className="flex flex-row gap-2 ">
            <MyTextField
              onChange={(e) => onNameChange(e)}
              placeholder="Full name"
              message={name.message}
              type="alphabet"
              error={name.error}
            />
          </div>
        </div>
        <MyTextField
          onChange={(e) => onEmailChange(e)}
          startIcon={Email}
          label="Email"
          placeholder="name@example.com"
          message={email.message}
          error={email.error}
        />
        <MyTextField
          type="password"
          onChange={(e) => onPasswordChange(e)}
          startIcon={Lock}
          label="Password"
          message={password.message}
          error={password.error}
        />
        <MyTextField
          type="date"
          onChange={(e) => onBirthChange(e)}
          label="Birth"
          message={birth.message}
          error={birth.error}
          placeholder="birth"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center	">
        <Typography sx={{ color: "#37343E", fontWeight: 400, fontSize: 14 }}>
          By continuing, you agree to Lexor’s
          <Link href="" sx={{ fontWeight: 500 }} underline="none">
            {" Terms of Service "}
          </Link>
        </Typography>
        <Typography sx={{ color: "#37343E", fontWeight: 400, fontSize: 14 }}>
          and acknowledge Lexor's
          <Link href="" sx={{ fontWeight: 500, fontSize: 14 }} underline="none">
            {" Privacy Policy. "}
          </Link>
        </Typography>
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        sx={{ borderRadius: 90, width: "100%" }}
        variant="primary filled"
      >
        Create account
      </Button>
      <div className="flex flex-row text-center items-center justify-center">
        <Typography sx={{ color: "#5C5668", fontWeight: 400, fontSize: 14 }}>
          Already have an account?
          <Link href="login" sx={{ fontWeight: 500 }} underline="none">
            {" Log in"}
          </Link>
        </Typography>
      </div>
    </FormControl>
  );
};

const Divider = () => {
  return (
    <div className="flex flex-row items-center gap-5 justify-center w-full ">
      <div className="h-[1px] w-full bg-[#CECCD2]"></div>
      <div className="text-center w-full 	">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          or log in with email
        </Typography>
      </div>

      <div className="h-[1px] w-full bg-[#CECCD2] "></div>
    </div>
  );
};

const RegisterType = () => {
  const allRegisterType = [
    { title: "Facebook", icon: Facebook, onClick: () => {} },
    { title: "Google", icon: Google, onClick: () => {} },
    { title: "Apple ID", icon: Apple, onClick: () => {} },
  ];
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      {allRegisterType.map((data, index) => (
        <Button
          onClick={data.onClick}
          key={"login type " + index}
          sx={{
            textTransform: "none",
            background: "#ffffff",
            color: "#000000",
            border: "2px",
            borderStyle: "solid",
            borderRadius: "20px",
            width: "100%",
            fontSize: "14px",
            fontWeight: "700",
            marginTop: "16px",
            ":hover": {
              background: "#ffffff",
            },
            "&.MuiButton-root": {
              borderColor: "#DEDDE1",
            },
            padding: "10px 24px",
          }}
          startIcon={<img src={data.icon} />}
        >
          <Typography
            sx={{
              color: "#1A1D1F",
              fontSize: 14,
              fontWeight: 500,
            }}
          ></Typography>
          {data.title}
        </Button>
      ))}
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Typography
        sx={{
          fontSize: 48,
          fontWeight: 700,
          color: "#121115",
        }}
      >
        Sign up to Lexor
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#5C5668",
        }}
      >
        Continue with
      </Typography>
    </div>
  );
};

export default RegisterForm;
