import { Button, FormControl, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import Facebook from "../../shared/assets/facebook.png";
import Google from "../../shared/assets/google.png";
import Apple from "../../shared/assets/apple.png";
import Lock from "../../shared/assets/lock.png";
import Email from "../../shared/assets/email.png";
import MyTextField from "../../atoms/myTextField";
import { updateState, getEmailMessage } from "../validate ";
// api import
import CheckboxAtom from "../../atoms/checkBox/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../../layout/auth/snackBarReducer";
import { SignIn } from "../../../api/auth/login";
import { updateUserToken } from "./reducer";

const LoginForm = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 relative ">
      <Introduce />
      <LoginType />
      <Divider />
      <EmailLogin />
    </div>
  );
};

const EmailLogin = () => {
  const [username, setUsername] = useState({
    value: "",
    error: false,
    message: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    message: "",
  });
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetSnackBar = (message, type = "error", open = true) => {
    dispatch(setSnackBar({ message: message, type: type, open: open }));
  };
  const onUserNameChange = (e) => {
    const messageUserName = getEmailMessage(e.currentTarget.value);
    updateState(
      setUsername,
      e.currentTarget.value,
      messageUserName.map((data, index) => (
        <span
          key={"email message " + index}
          className="flex flex-row items-center"
        >
          {data}
        </span>
      ))
    );
  };
  const onPasswordChange = (e) => {
    updateState(setPassword, e.currentTarget.value);
  };
  const onCheckBoxChange = (value) => {
    setRemember(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageSnackBar = [];
    const messageUserName = getEmailMessage(username.value);
    if (messageUserName.length) {
      setUsername({
        ...username,
        message: messageUserName.map((data, index) => (
          <span
            key={"UserName message " + index}
            className="flex flex-row items-center gap-1"
          >
            {data}
          </span>
        )),
        error: true,
      });
      messageUserName.map((data) => messageSnackBar.push(data));
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
      // paste code login here
      const response = await SignIn(username.value, password.value);
      if (response.user === undefined) {
        handleSetSnackBar(response.error, "error", true);
      } else {
        const uid = response.user.uid;
        const token = response.user.accessToken;
        dispatch(updateUserToken({ uid, token }));
        navigate("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <FormControl className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <MyTextField
            onChange={(e) => onUserNameChange(e)}
            label={"Email"}
            placeholder={"name@example.com"}
            startIcon={Email}
            error={username.error}
            message={username.message}
          />
          <MyTextField
            onChange={(e) => onPasswordChange(e)}
            label={"Password"}
            placeholder={"*************"}
            startIcon={Lock}
            type={"password"}
            error={password.error}
            message={password.message}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="grid sm:grid-cols-2 gap-4">
            <CheckboxAtom
              disabled={false}
              defaultValue={false}
              onChange={(value) => onCheckBoxChange(value)}
              label="Remember for 7 days"
            />
            <Link
              href="forgotPassword"
              sx={{
                cursor: "pointer",
                userSelect: "none",
                marginLeft: "auto",
                fontSize: 14,
                fontWeight: 500,
              }}
              underline="none"
            >
              <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                Forgot password
              </Typography>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Button
            sx={{ width: "100%", borderRadius: 90 }}
            type="submit"
            variant="primary filled"
          >
            Login
          </Button>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Typography
            sx={{
              color: "#5C5668",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Don't have an account?
          </Typography>
          <Link
            href="register"
            sx={{
              cursor: "pointer",
              userSelect: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
            underline="none"
          >
            <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
              Sign up for free
            </Typography>
          </Link>
        </div>
      </FormControl>
    </form>
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

const LoginType = () => {
  const allLoginType = [
    { title: "Facebook", icon: Facebook, onClick: () => {} },
    { title: "Google", icon: Google, onClick: () => {} },
    { title: "Apple ID", icon: Apple, onClick: () => {} },
  ];
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      {allLoginType.map((data, index) => (
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
        Welcome back!
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

export default LoginForm;
